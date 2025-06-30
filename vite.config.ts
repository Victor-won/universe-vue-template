import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib';
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
        '@components': path.resolve(__dirname, './components'),
      },
    },
    server: {
      port: 5173,
    },
    build: isLib
      ? {
          lib: {
            entry: path.resolve(__dirname, 'components/index.ts'),
            name: 'UniverseVueTemplate',
            fileName: (format) => `universe-vue-template.${format}.js`,
            formats: ['es', 'cjs'],
          },
          rollupOptions: {
            external: ['vue', 'vue-demi'],
            output: {
              globals: {
                vue: 'Vue',
                'vue-demi': 'VueDemi',
              },
            },
          },
          outDir: 'dist',
          emptyOutDir: true,
        }
      : undefined,
  };
});
