import "server-only"

import { cache } from "react"
import { auth } from "@/server/auth"

/**
 * Retrieves the current authenticated user asynchronously with caching.
 * @returns {Promise<User | undefined>} A promise that resolves to the current user object if authenticated, or undefined if not.
 */
export const getCurrentUser = cache(async () => {
  const session = await auth()
  if (!session?.user) {
    return undefined
  }
  return session.user
})
