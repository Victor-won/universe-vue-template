import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'components/index.ts',
      name: 'UniverseVueTemplate',
      fileName: 'universe-vue-template',
      formats: ['es', 'cjs', 'umd'],
    },
    outDir: 'dist/vue3',
  },
})
