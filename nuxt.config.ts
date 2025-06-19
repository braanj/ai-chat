// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  future: {
    compatibilityVersion: 4,
  },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxt/ui', '@nuxt/eslint'],

  devtools: { enabled: true },

  devServer: {
    port: 3030,
  },
})