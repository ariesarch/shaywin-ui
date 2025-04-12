import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'shaywin-ui',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd'], // Specify the formats you want to output
    },
    outDir: 'dist',
  }
})
