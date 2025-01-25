// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devServer: {
    port: 3060,
  },
  devtools: { enabled: true },
  components: [
    { path: '~/components/', pathPrefix: false, extensions: ['vue'] },
  ],
  ssr: false,
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets',
    head: {
      title: 'Diệu ♡ Hân Wedding',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ]
    }
  },
  css: ['@/assets/styles/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [
      svgLoader({
        defaultImport: 'component'
      })
    ],
    assetsInclude: ["**/*.mp3"],
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@import "@/assets/styles/_variables.scss";`,
        },
      },
    },
  },
})
