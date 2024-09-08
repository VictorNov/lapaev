/*
Override the default Vuetify options.
This file is used to define the default options for Vuetify components.
For more information, visit: https://vuetifyjs.com/en/features/global-configuration/#setup
 */

import type { DefaultsInstance } from 'vuetify'

export const defaults: DefaultsInstance = {
  global: {
    // settings for all Vuetify components goes here
  },
  VBtn: {
    variant: 'flat',
    color: 'primary',
    size: 'default',
    elevation: 0
  }
}
