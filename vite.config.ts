import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split large JSON data into separate chunk
          'data-records': ['./data/records.json'],
          'data-categories': ['./data/categories.json'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
