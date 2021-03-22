import i18n from "./config/i18n.js";

export default {
  target: "static", // default is 'server'

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "tea",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  tailwindcss: {
    cssPath: "~/assets/scss/global.scss",
    configPath: "tailwind.config.js"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-i18n"],

  i18n,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
