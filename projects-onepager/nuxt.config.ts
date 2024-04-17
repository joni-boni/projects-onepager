export default defineNuxtConfig({

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  components: [
      { path: '~/components/navs' },
      '~/components'
  ],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode','nuxt-headlessui'],
  colorMode: {
      classSuffix: '',
      preference: 'light',
      fallback: 'light'
  },
  postcss: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {},
      },
  },
})
