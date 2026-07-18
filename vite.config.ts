import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// base: './' so the built site works at any URL —
//   https://www.madridinsider.com/ once DNS is pointed at GitHub Pages
//   https://roccosalata.github.io/madridinsider/ for previews
//   any custom domain the user might use later
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
})
