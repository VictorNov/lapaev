// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
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
    '@nuxthq/studio',
    '@nuxt/content',
    '@nuxt/image'
  ],
  sourcemap: false,
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi-svg',
      },
      theme: {
        defaultTheme: 'dark',
      }
    }
  }
})