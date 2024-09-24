"use server"

import { db } from "@/server"

/**
 * Retrieves client requests from the database with pagination and optional search functionality.
 * @param {number} currentPage - The current page number for pagination (default is 1).
 * @param {string} [query] - Optional search query to filter client requests by name, phone, or email.
 * @returns {Promise<Array<ClientRequest>|null>} An array of client requests matching the criteria, or null if no results or an error occurs.
 */
export async function getClientRequests(
  currentPage: number = 1,
  query?: string,
) {
  try {
    const clientRequests = await db.clientRequest.findMany({
      where: {
        ...(query && {
          OR: [
            {
              fullName: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              phone: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              email: {
                contains: query,
                mode: "insensitive",
              },
            },
          ],
        }),
      },
      take: 10,
      skip: (Number(currentPage) - 1) * 10,
      orderBy: {
        createdAt: "desc",
      },
    })
    if (clientRequests.length === 0) return null

    return clientRequests
  } catch (error) {
    return null
  }
}

/**
 * Retrieves a client request from the database by its unique identifier.
 * @param {number} uid - The unique identifier of the client request.
 * @returns {Promise<Object|null>} A Promise that resolves to the client request object if found, or null if not found or if an error occurs.
 */
export async function getClientRequestById(uid: number) {
  try {
    const clientRequest = await db.clientRequest.findUnique({
      where: { uid },
    })
    if (!clientRequest) return null
    return clientRequest
  } catch (error) {
    return null
  }
}

/**
 * Retrieves the count of unread client requests from the database.
 * @returns {Promise<number|null>} A promise that resolves to the number of unread requests, or null if an error occurs.
 */
export async function getUnreadRequestsCount() {
  try {
    const count = await db.clientRequest.count({ where: { status: "UNREAD" } })
    return count
  } catch (error) {
    console.error("Failed to fetch counter data:", error)
    return null
  }
}
