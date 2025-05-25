// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  // base: '/madridinsider/', // must match your repo name
  // ...other config options
  resolve: {
    alias: {
      "@": "/madridinsider/src",
    },
  },
})