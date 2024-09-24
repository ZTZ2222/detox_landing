import { notFound } from "next/navigation"
import { IntlErrorCode } from "next-intl"
import { LocalePrefix } from "next-intl/routing"
import { getRequestConfig } from "next-intl/server"

const localePrefix: LocalePrefix = "as-needed"

export const AppConfig = {
  name: "Detox",
  locales: [
    {
      id: "ru",
      name: "Русский",
    },
    {
      id: "en",
      name: "English",
    },
  ],
  defaultLocale: "ru",
  localePrefix,
}

/**
 * Returns an array of all locale IDs defined in the application configuration.
 /**
  * Configures and returns the internationalization request configuration for the application.
  * @param {Object} options - The options object.
  * @param {string} options.locale - The locale string to be used for internationalization.
  * @returns {Object} An object containing messages, error handling, and fallback configuration for internationalization.
  */
 * @returns {string[]} An array containing the IDs of all available locales.
 */
export const AllLocales = AppConfig.locales.map(locale => locale.id)

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!AllLocales.includes(locale as any)) notFound()

  return {
    messages: (await import(`../locales/${locale}.json`)).default,
    onError(error) {
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        console.log(error)
      } else {
        console.log(error)
      }
    },
    getMessageFallback({ namespace, key, error }) {
      return key
    },
  }
})

/**
 * Generates the internationalized path for a given URL and locale
 * @param {string} url - The original URL path
 * @param {string} locale - The locale code to be used for internationalization
 * @returns {string} The internationalized URL path
 */
export const getI18nPath = (url: string, locale: string) => {
  if (locale === AppConfig.defaultLocale) {
    return url
  }

  return `/${locale}${url}`
}
