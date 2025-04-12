import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Adjust as needed
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'), // Entry point for your library
      name: 'shaywin-ui', // Name of your library
      fileName: (format) => `shaywind-ui.${format}.js`, // Output file name
      formats: ['es', 'umd'], // Specify output formats
    },
    rollupOptions: {
      external: ['svelte'], // External dependencies
      output: {
        globals: {
          svelte: 'Svelte', // Global variable for Svelte
        },
      },
    },
  },
  plugins: [svelte(), dts({ rollupTypes: true })], // Include Svelte and TypeScript definition plugins
});