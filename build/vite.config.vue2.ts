import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'

export default defineConfig({
  plugins: [vue2()],
  build: {
    lib: {
      entry: 'components/index.ts',
      name: 'UniverseVueTemplate',
      fileName: 'universe-vue-template',
      formats: ['es', 'cjs', 'umd'],
    },
    outDir: 'dist/vue2',
  },
})
