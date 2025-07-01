import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib';
  const isWebc = !!process.env.BUILD_WEB_COMPONENT;
  return {
    root: './playground',
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
    build: isLib || isWebc
      ? {
          lib: {
            entry: isWebc
              ? path.resolve(__dirname, 'components/MyButton/MyButton.ce.ts')
              : path.resolve(__dirname, 'components/index.ts'),
            name: isWebc ? 'MyButtonElement' : 'UniverseVueTemplate',
            fileName: (format) =>
              isWebc
                ? `my-button-webc.${format}.js`
                : `universe-vue-template.${format}.js`,
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
          outDir: isWebc ? 'dist/webc' : 'dist',
          emptyOutDir: true,
        }
      : undefined,
  };
});
