// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'assets/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'assets/global.css',
  ],
  plugins: ['~/plugins/animxyz.ts'],
  build: {
    transpile: ['primevue'],
  },
  ssr: false,
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'bg', name: 'Български', file: 'bg.json' },
    ],
  },
})
