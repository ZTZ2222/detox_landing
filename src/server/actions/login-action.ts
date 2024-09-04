"use server"

import { AuthError } from "next-auth"
import { getTranslations } from "next-intl/server"
import { signIn, signOut } from "@/server/auth"
import { credentialsSchema } from "@/types/auth.schema"
import { actionClient } from "./safe-action"

export const loginUser = actionClient
  .schema(credentialsSchema)
  /**
   * Attempts to sign in a user using provided credentials and handles various authentication errors.
   * @param {Object} parsedInput - The parsed input containing user credentials.
   * @param {string} parsedInput.email - The user's email address.
   * @param {string} parsedInput.password - The user's password.
   * @returns {Object} An object containing either a success message or an error message.
   */
  .action(async ({ parsedInput: { email, password } }) => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirectTo: "/admin",
      })
      return { success: "User logged in" }
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return { error: "Email or Password Incorrect" }
          case "AccessDenied":
            return { error: error.message }
          case "OAuthSignInError":
            return { error: error.message }
          default:
            return { error: "Something went wrong" }
        }
      }
      throw error
    }
  })

export const logoutUser = actionClient.action(async () => {
  const t = await getTranslations()
  try {
    await signOut({ redirect: false })
    return { success: t("Server.actions.success-logout") }
  } catch (error) {
    console.log(error)
    return { error: t("Server.actions.error") }
  }
})
