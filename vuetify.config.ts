import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'
import { ru } from 'vuetify/locale'
import { light, dark } from './utils/vuetify/themes'
import { defaults } from './utils/vuetify/defaults'

export default defineVuetifyConfiguration({
  defaults,
  icons: {
    defaultSet: 'fa-svg',
  },
  locale: {
    locale: 'ru',
    fallback: 'ru',
    messages: { ru },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      light,
      dark,
    },
  },
})
