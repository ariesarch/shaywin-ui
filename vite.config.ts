import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: "SimpleUI",
      fileName: (format) => `shaywin-ui.${format}.js`, // Generate different files for each format
    },
    rollupOptions: {
      external: ['svelte'], // Keep Svelte as an external dependency
      output: {
        globals: {
          svelte: 'Svelte',
        },
      },
    },
  },
  plugins: [svelte({
    compilerOptions: {
      customElement: true
    }
}), dts({ rollupTypes: true })],
});