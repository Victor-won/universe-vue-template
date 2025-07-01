import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import path from 'path'

export default defineConfig({
  plugins: [vue2()],
  build: {
    lib: {
      entry: path.resolve(__dirname, '../components/index.ts'),
      name: 'UniverseVueTemplate',
      fileName: 'universe-vue-template',
      formats: ['es', 'cjs'],
    },
    outDir: path.resolve(__dirname, '../dist/vue2'),
  },
})
