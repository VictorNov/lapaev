// https://nuxt.com/docs/api/configuration/nuxt-config
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      titleTemplate: '%s',
      meta: [
        { name: 'theme-color', content: '#424650' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
  },
  compatibilityDate: '2024-04-03',
  css: [
    '@/assets/styles/main.scss',
  ],
  devtools: { enabled: true },
  fonts: {
    families: [
      {
        name: 'Roboto',
        provider: 'google',
      },
      {
        name: 'PT Sans',
        provider: 'google',
      }
    ],
  },
  modules: [
    'vuetify-nuxt-module',
    '@nuxt/eslint',
    '@nuxtjs/stylelint-module',
    '@nuxt/fonts',
    '@nuxt/image',
    'nuxt-icons',
  ],
  stylelint: {
    fix: true,
    include: [
      join(currentDir, './pages/**/*.{vue,css,scss}'),
      join(currentDir, './components/**/*.{vue,css,scss}'),
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/styles/variables/_mixins.scss" as *;
            @use "~/assets/styles/variables/_variables.scss" as *;
          `,
        },
      },
    },
  },
  // vuetify: {
  //   moduleOptions: {
  //     styles: { configFile: join(currentDir, './assets/styles/vuetify.scss') },
  //   },
  // },
})