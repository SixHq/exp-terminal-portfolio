import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Checker from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),Checker({
    typescript: {
      buildMode: false, // disables throwing on error
    },
  }),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    sourcemap: false, // or true if you need it, but this suppresses some errors
  },
})
