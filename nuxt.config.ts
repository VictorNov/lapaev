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
    '@nuxt/content',
    // '@nuxthq/studio'
  ],
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'fa-svg'
      },
      theme: {
        defaultTheme: 'dark',
      }
    }
  }
})