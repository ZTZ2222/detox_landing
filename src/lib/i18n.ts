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

export const getI18nPath = (url: string, locale: string) => {
  if (locale === AppConfig.defaultLocale) {
    return url
  }

  return `/${locale}${url}`
}
