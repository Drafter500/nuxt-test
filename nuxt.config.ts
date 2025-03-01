import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  compatibilityDate: '2025-02-25',
  modules: ['@nuxt/eslint'],
  css: ["~/assets/app.css"],
});
