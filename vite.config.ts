import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@css': path.resolve(__dirname, './src/css'),
      '@functions': path.resolve(__dirname, './src/functions')
    },
  }
})
