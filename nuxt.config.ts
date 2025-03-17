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
          href: '/favicon.ico?v=2'
        }
      ],
      meta: [
        { property: "og:title", content: "DIỆU♡HÂN - 23/03/2025" },
        { property: "og:description", content: "Diệu Hân Wedding - 23/03/2025!" },
        { property: "og:image", content: "https://dieuhanwedding.github.io/images/slide/001.webp" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:url", content: "https://dieuhanwedding.github.io/" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "DIỆU♡HÂN - 23/03/2025" },
        { name: "twitter:image", content: "https://dieuhanwedding.github.io/images/slide/001.webp" },
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
