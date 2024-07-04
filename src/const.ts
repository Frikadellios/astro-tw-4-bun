import type { Links, Page, Site, Socials } from '@/types'

export const SITE: Site = {
  TITLE: {
    uk: 'IT агенство',
    en: 'IT agency',
    ru: 'IT агенция'
  },
  DESCRIPTION: {
    uk: 'IT агенство',
    en: 'IT agency',
    ru: 'IT агенция'
  },
  AUTHOR: 'Mark Horn'
}

// Work Page
export const WORK: Page = {
  TITLE: {
    uk: 'Worked.',
    en: 'Work',
    ru: 'Work'
  },
  DESCRIPTION: {
    uk: 'Places I have worked.',
    en: 'Places I have worked.',
    ru: 'Places I have worked.'
  }
}

// Blog Page
export const BLOG: Page = {
  TITLE: {
    uk: 'Blog',
    en: 'Blog',
    ru: 'Blog'
  },
  DESCRIPTION: {
    uk: 'Places I have worked.',
    en: 'Places I have worked.',
    ru: 'Places I have worked.'
  }
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: {
    uk: 'Places I have worked.',
    en: 'Places I have worked.',
    ru: 'Places I have worked.'
  },
  DESCRIPTION: {
    uk: 'Places I have worked.',
    en: 'Places I have worked.',
    ru: 'Places I have worked.'
  }
}

// Search Page
export const SEARCH: Page = {
  TITLE: {
    uk: 'Places I have worked.',
    en: 'Places I have worked.',
    ru: 'Places I have worked.'
  },
  DESCRIPTION: {
    uk: 'Places I have worked.',
    en: 'Places I have worked.',
    ru: 'Places I have worked.'
  }
}

export const LINKS: Links = [
  {
    TEXT: {
      uk: 'Home',
      en: 'Home',
      ru: 'Home'
    },
    HREF: '/'
  },
  {
    TEXT: {
      uk: 'Services',
      en: 'Services',
      ru: 'Services'
    },
    HREF: '/'
  },
  {
    TEXT: {
      uk: 'Work',
      en: 'Work',
      ru: 'Work'
    },
    HREF: '/work'
  },
  {
    TEXT: {
      uk: 'Blog',
      en: 'Blog',
      ru: 'Blog'
    },
    HREF: '/blog'
  },
  {
    TEXT: {
      uk: 'Projects',
      en: 'Projects',
      ru: 'Projects'
    },
    HREF: '/projects'
  }
]

export const SOCIALS: Socials = [
  {
    NAME: 'Email',
    ICON: 'email',
    TEXT: 'devopsick@pm.me',
    HREF: 'mailto:devopsick@pm.me'
  },
  {
    NAME: 'Github',
    ICON: 'github',
    TEXT: 'github',
    HREF: 'https://github.com/Frikadellios'
  },
  {
    NAME: 'LinkedIn',
    ICON: 'linkedin',
    TEXT: 'linkedin',
    HREF: 'https://www.linkedin.com/'
  },
  {
    NAME: 'Twitter',
    ICON: 'twitter-x',
    TEXT: 'twitter',
    HREF: 'https://twitter.com/devopsick'
  }
]
