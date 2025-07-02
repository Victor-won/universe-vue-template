import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import path from 'path'

export default defineConfig({
  plugins: [vue2()],
  resolve: {
    alias: {
      'vue': path.resolve(__dirname, 'node_modules/vue'),
      'vue-demi': path.resolve(__dirname, 'node_modules/vue-demi'),
      '@vue/composition-api': path.resolve(__dirname, 'node_modules/@vue/composition-api'),
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, '../components/index.ts'),
      name: 'UniverseVueTemplate',
      fileName: 'universe-vue-template',
      formats: ['es', 'cjs', 'umd'],
    },
    outDir: path.resolve(__dirname, '../dist/vue2'),
    rollupOptions: {
      external: ['vue', 'vue-demi', '@vue/composition-api'],
    },
  },
})
