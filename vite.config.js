// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // If your app is not at the domain root, add: base: '/your-repo-name/',
  build: {
    outDir: 'dist',
  }
})
