"use server"

import { revalidatePath } from "next/cache"
import { getTranslations } from "next-intl/server"
import { z } from "zod"
import { db } from "@/server"
import { actionClient } from "@/server/actions/safe-action"
import {
  clientRequestCreateSchema,
  clientRequestUpdateSchema,
} from "@/types/request.schema"

export const createClientRequest = actionClient
  .schema(clientRequestCreateSchema)
  /**
   * Handles the action of submitting a client request
   * @param {Object} options - The options object
   * @param {Object} options.parsedInput - The parsed input data for the client request
   * @returns {Promise<Object>} An object containing either a success message or an error message
   */
  .action(async ({ parsedInput }) => {
    const t = await getTranslations()
    try {
      await db.clientRequest.create({ data: parsedInput })
      revalidatePath("/admin/requests", "page")
      revalidatePath("/[locale]/(protected)", "layout")
      return { success: t("Server.actions.request-submit-success") }
    } catch (error) {
      console.log(error)

      /**
       * Updates a client request in the database based on the parsed input
       * @param {Object} parsedInput - The parsed input containing the client request data
       * @param {string} parsedInput.uid - The unique identifier of the client request
       * @returns {Promise<Object>} An object indicating success or error status
       */
      return { error: t("Server.actions.request-submit-error") }
    }
  })

export const updateClientRequest = actionClient
  .schema(clientRequestUpdateSchema)
  .action(async ({ parsedInput }) => {
    const t = await getTranslations()
    try {
      await db.clientRequest.update({
        where: { uid: parsedInput.uid },
        data: parsedInput,
      })
      revalidatePath("/admin/requests")

      return { success: t("Server.actions.success-update") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })

export const deleteClientRequest = actionClient
  .schema(z.object({ uid: z.number() }))
  /**
   * Asynchronously deletes a client request from the database
   * @param {Object} parsedInput - The parsed input containing the request details
   * @param {string} parsedInput.uid - The unique identifier of the client request to delete
   * @returns {Promise<Object>} An object containing a success message or an error message
   */
  .action(async ({ parsedInput }) => {
    const t = await getTranslations()
    try {
      await db.clientRequest.delete({ where: { uid: parsedInput.uid } })
      revalidatePath("/admin/requests")

      return { success: t("Server.actions.success-delete") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })

export const changeClientRequestStatus = actionClient
  .schema(z.object({ uid: z.number() }))
  /**
   * Toggles the status of a client request between 'READ' and 'UNREAD'.
   * @param {Object} parsedInput - The parsed input containing the request UID.
   * @param {string} parsedInput.uid - The unique identifier of the client request.
   * @returns {Promise<Object>} An object containing either a success message or an error message.
   */
  .action(async ({ parsedInput }) => {
    const t = await getTranslations()
    try {
      const request = await db.clientRequest.findUnique({
        where: { uid: parsedInput.uid },
      })
      if (!request) return { error: t("Server.actions.item-not-found") }
      if (request.status === "READ") {
        await db.clientRequest.update({
          where: { uid: parsedInput.uid },
          data: { status: "UNREAD" },
        })
      } else {
        await db.clientRequest.update({
          where: { uid: parsedInput.uid },
          data: { status: "READ" },
        })
      }
      revalidatePath("/admin/requests")
      revalidatePath("/[locale]/(protected)", "layout")

      return { success: t("Server.actions.success-update") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })
