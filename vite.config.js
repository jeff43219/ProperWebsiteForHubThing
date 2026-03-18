import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // You might need to install this if it's missing

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This tells Vite: "@" means the "src" folder
      '@': path.resolve(__dirname, './src'),
    },
  },
})