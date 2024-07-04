import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { inspectorServer } from '@react-dev-inspector/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import AstroPWA from '@vite-pwa/astro'
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'astro/config'
import AutoImport from 'unplugin-auto-import/astro'
import lightningcss from 'vite-plugin-lightningcss'
import { remarkReadingTime } from './remark-reading-time.mjs'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  prefetch: {
    prefetchAll: true
  },
  i18n: {
    defaultLocale: 'uk',
    locales: ['en', 'ru', 'uk'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  vite: {
    build: {
      cssMinify: 'lightningcss'
    },
    plugins: [
      tailwindcss(),
      Inspect({
        build: true,
        outputDir: '.vite-inspect'
      }),
      lightningcss({
        browserslist: 'last 2 versions and not dead, > 0.3%, Firefox ESR'
      }),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      inspectorServer()
    ]
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  },
  site: 'http://localhost:4321',
  integrations: [
    AstroPWA({
      registerType: 'autoUpdate'
    }),
    AutoImport({
      defaultExportByFilename: false,
      include: [
        /\.[tj]sx?$/ // .ts, .tsx, .js, .jsx
      ],
      packagePresets: ['detect-browser-es'],
      imports: ['react', 'react-router'],
      dirs: ['./src/utils/*.ts', './src/hooks'],
      dts: './src/auto-imports.d.ts'
    }),
    react({
      experimentalReactChildren: true
    }),
    sitemap({
      i18n: {
        defaultLocale: 'uk',
        locales: {
          en: 'en-GB',
          ru: 'ru-UA',
          uk: 'uk-UA'
        }
      }
    }),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'material-theme-palenight',
        wrap: true
      },
      drafts: true
    })
  ]
})
