import { LANGUAGES } from './utils'

export type Locale = 'en' | 'ru' | 'uk' | string

export const LOCALES = {
  en: 'en-GB',
  uk: 'uk-UA',
  ru: 'ru-UA'
}

interface Fallback {
  [key: string]: string
}

export const defaultLocale: string = 'uk'

export const locales = ['en', 'uk', 'ru']
export const LANGUAGES_ARRAY = Object.keys(LANGUAGES)
export const DEFAULT_LANGUAGE = 'en'
export const currentLocale = Object.keys(LANGUAGES)[0]

export const fallback: Fallback = {
  currentLocale: defaultLocale
}
