import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Madrid Insider uses a custom domain (www.madridinsider.com)
  // so assets should resolve from the root.
  base: '/',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
})