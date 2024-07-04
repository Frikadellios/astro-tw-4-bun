export type Page = {
  TITLE: {
    uk: string
    en: string
    ru: string
  }
  DESCRIPTION: {
    uk: string
    en: string
    ru: string
  }
}

export interface Site extends Page {
  AUTHOR: string
}

export type Links = {
  TEXT: {
    uk: string
    en: string
    ru: string
  }
  HREF: string
}[]

export type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]

export interface CommonFrontmatter {
  title?: string
  reference?: string
  description?: string
  image?: string
  previewImage?: string
  canonicalURL?: string
  file?: string
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface Pages<T = any> {
  /** result */
  data: T[]
  /** metadata */
  /** the count of the first item on the page, starting from 0 */
  start: number
  /** the count of the last item on the page, starting from 0 */
  end: number
  /** total number of results */
  total: number
  /** the current page number, starting from 1 */
  currentPage: number
  /** number of items per page (default: 25) */
  size: number
  /** number of last page */
  lastPage: number
  url: {
    /** url of the current page */
    current: string
    /** url of the previous page (if there is one) */
    prev: string | undefined
    /** url of the next page (if there is one) */
    next: string | undefined
  }
}
