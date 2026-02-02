import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // 1. Ative explicitamente a compatibilidade com a v4 do Nuxt
  future: {
    compatibilityVersion: 4,
  },
  
  compatibilityDate: '2024-04-03', // Use uma data atual estável
  devtools: { enabled: true },

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/content',
  ],
  content: {
    experimental: {
      nativeSqlite: true // Habilita o SQLite nativo do Node.js
    },
  },

  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: 'Alumicolt — Soluções em Esquadrias',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      link: [
        // Verifique se a pasta é public/img/icon.webp
        { rel: 'icon', type: 'image/webp', href: '/img/icon.webp' }
      ],
    },
  },
})