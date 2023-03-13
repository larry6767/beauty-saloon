import 'server-only'
import type { Locale } from './i18n-config'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the defalt import for cleaner types
const dictionaries = {
  en: () => import('./dictionaries/en').then((module) => module.default),
  ru: () => import('./dictionaries/ru').then((module) => module.default),
  cs: () => import('./dictionaries/cs').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
