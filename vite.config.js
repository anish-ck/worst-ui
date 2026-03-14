import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['@splinetool/runtime', '@splinetool/react-spline'],
  },
  build: {
    rollupOptions: {
      // treat @splinetool/runtime as a bundled dependency, not external
      external: [],
    },
  },
})
