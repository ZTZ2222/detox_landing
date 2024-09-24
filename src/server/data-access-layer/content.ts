"use server"

import { getLocale } from "next-intl/server"
import { db } from "@/server"
import type {
  NormalizedCard,
  NormalizedSection,
  zMetaRead,
  zSection,
  zSocial,
} from "@/types/content.schema"

/**
 * Retrieves a section by its unique identifier from the database.
 * @param {number} uid - The unique identifier of the section to retrieve.
 * @returns {Promise<zSection | null>} A promise that resolves to the section data including its cards, or null if not found.
 */
export async function getSectionById(uid: number): Promise<zSection | null> {
  const sectionData = await db.section.findUnique({
    where: { uid },
    include: {
      cards: {
        orderBy: { uid: "asc" },
      },
    },
  })
  return sectionData
}

/**
 * Retrieves and normalizes a section by its slug identifier.
 * @param {string} slug - The unique slug identifier for the section.
 * @returns {Promise<NormalizedSection | null>} A promise that resolves to a normalized section object if found, or null if not found.
 */
export async function getNormalizedSectionById(
  slug: string,
): Promise<NormalizedSection | null> {
  const locale = await getLocale()
  const sectionData = await db.section.findUnique({
    where: { slug },
    include: {
      cards: {
        orderBy: { uid: "asc" },
      },
    },
  })

  if (!sectionData) {
    return null
  }

  const sectionName = sectionData[
    `sectionName_${locale}` as keyof typeof sectionData
  ] as string | null
  const heading = sectionData[
    `heading_${locale}` as keyof typeof sectionData
  ] as string | null
  /**
   * Normalizes an array of cards based on the provided locale.
   * @param {Object[]} sectionData.cards - The array of card objects to be normalized.
   * @param {string} locale - The locale used for selecting language-specific fields.
   * @returns {NormalizedCard[]} An array of normalized card objects with localized content.
   */
  const subheading = sectionData[
    `subheading_${locale}` as keyof typeof sectionData
  ] as string | null
  const primaryButton = sectionData[
    `primaryButton_${locale}` as keyof typeof sectionData
  ] as string | null
  const secondaryButton = sectionData[
    `secondaryButton_${locale}` as keyof typeof sectionData
  ] as string | null

  const normalizedCards: NormalizedCard[] = sectionData.cards.map(card => ({
    uid: card.uid,
    title: card[`title_${locale}` as keyof typeof card] as string | null,
    description: card[`description_${locale}` as keyof typeof card] as
      | string
      | null,
    extra: card[`extra_${locale}` as keyof typeof card] as string | null,
    bullets: card[`bullets_${locale}` as keyof typeof card] as string[],
    image: card.image as string | null,
  }))

  return {
    uid: sectionData.uid,
    slug: sectionData.slug,
    sectionName,
    heading,
    subheading,
    primaryButton,
    secondaryButton,
    /**
     * Retrieves all social entries from the database in ascending order of their unique identifiers.
     * @returns {Promise<zSocial[] | null>} A promise that resolves to an array of zSocial objects if found, or null if no entries are found or an error occurs.
     */
    image: sectionData.image,
    cards: normalizedCards,
  }
}

export async function getSocials(): Promise<zSocial[] | null> {
  try {
    const socials = await db.social.findMany({
      orderBy: { uid: "asc" },
    })
    if (!socials) return null
    return socials
  } catch (error) {
    return null
  }
}

/**
 * Retrieves metadata from the database
 * @returns {Promise<zMetaRead | null>} A promise that resolves to the metadata object if found, or null if not found or if an error occurs
 */
export async function getMetadata(): Promise<zMetaRead | null> {
  try {
    const metadata = await db.metaData.findFirst({})
    if (!metadata) return null
    return metadata
  } catch (error) {
    return null
  }
}
