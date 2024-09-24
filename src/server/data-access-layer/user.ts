"use server"

import { db } from "@/server"

/**
 * Retrieves a user by email address, excluding the password field
 * @param {string} email - The email address of the user to retrieve
 * @returns {Promise<object|null>} The user object without the password field if found, or null if not found or on error
 */
export const getUserByEmailPasswordOmit = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email: email?.toLowerCase() },
      omit: {
        password: true,
      },
    })

    if (!user) {
      return null
    }
    return user
  } catch (error) {
    return null
  }
}

/**
 * Retrieves a user from the database by their email address.
 * @param {string} email - The email address of the user to retrieve.
 * @returns {Promise<User|null>} The user object if found, or null if not found or on error.
 */
export const getUserByEmailDanger = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email: email?.toLowerCase() },
    })

    if (!user) {
      return null
    }
    return user
  /**
   * Retrieves a user by their ID, excluding the password field.
   * @param {string} id - The unique identifier of the user to retrieve.
   * @returns {Promise<object|null>} A Promise that resolves to the user object without the password field if found, or null if not found or an error occurs.
   */
  } catch (error) {
    return null
  }
}

export const getUserByIdPasswordOmit = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
      omit: {
        password: true,
      },
    })
    return user
  } catch (error) {
    return null
  }
}

/**
 * Retrieves a user by their unique identifier, suppressing any errors.
 * @param {string} id - The unique identifier of the user to fetch.
 * @returns {Promise<object|null>} A Promise that resolves to the user object if found, or null if not found or if an error occurs.
 */
export const getUserByIdDanger = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
    })
    return user
  } catch (error) {
    return null
  }
}
