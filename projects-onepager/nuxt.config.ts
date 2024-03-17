export default defineNuxtConfig({

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  components: [
      { path: '~/components/navs' },
      '~/components'
  ],
  modules: [
    'nuxt-headlessui',
  ],
  postcss: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {},
      },
  },
})
