"use server"

import { revalidatePath } from "next/cache"
import { getTranslations } from "next-intl/server"
import { z } from "zod"
import { redirect } from "@/lib/i18n-navigation"
import { saltAndHashPassword } from "@/lib/utils"
import { db } from "@/server"
import { getUserByEmailDanger } from "@/server/data-access-layer/user"
import { userCreateSchema } from "@/types/user.schema"
import { actionClient } from "./safe-action"

export const createUser = actionClient
  .schema(userCreateSchema)
  /**
   * Creates a new user with the provided information
   * @param {Object} parsedInput - The parsed input containing user details
   * @param {string} parsedInput.email - The user's email address
   * @param {string} parsedInput.password - The user's password
   * @param {string} parsedInput.confirmPassword - The password confirmation
   * @param {Object} parsedInput.rest - Additional user properties
   * @returns {Promise<Object>} An object with either an error message or a success message
   */
  .action(async ({ parsedInput }) => {
    const { email, password, confirmPassword, ...rest } = parsedInput
    const normalizedEmail = email.toLowerCase()

    const existingUser = await getUserByEmailDanger(normalizedEmail)
    if (existingUser) return { error: "User already exists!" }

    const hashedPassword = await saltAndHashPassword(password)
    await db.user.create({
      data: {
        ...rest,
        email: normalizedEmail,
        password: hashedPassword,
      },
    })

    revalidatePath("/admin/users")
    redirect("/admin/users")

    // TODO: send verification email

    return { success: "User created!" }
  })

export const deleteUser = actionClient
  .schema(z.object({ id: z.string() }))
  /**
   * Asynchronous action to delete a user from the database
   * @param {Object} parsedInput - The parsed input containing user information
   * @param {string|number} parsedInput.id - The ID of the user to be deleted
   * @returns {Promise<Object>} An object containing either a success message or an error message
   */
  .action(async ({ parsedInput }) => {
    const t = await getTranslations()
    try {
      await db.user.delete({ where: { id: parsedInput.id } })
      revalidatePath("/admin/users")

      return { success: t("Server.actions.success-delete") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })
