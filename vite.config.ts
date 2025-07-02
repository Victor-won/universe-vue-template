import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib';
  const isWebc = !!process.env.BUILD_WEB_COMPONENT;
  // 多组件入口配置
  const componentEntries = {
    MyButton: path.resolve(__dirname, 'components/MyButton/index.ts'),
    // 未来可自动化收集更多组件
  };
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
            formats: ['es', 'cjs', 'umd'],
          },
          rollupOptions: {
            // 多入口输出
            input: isWebc
              ? undefined
              : {
                  index: path.resolve(__dirname, 'components/index.ts'), // 全量包
                  ...componentEntries, // 按需组件包
                },
            external: ['vue', 'vue-demi'],
            output: {
              globals: {
                vue: 'Vue',
                'vue-demi': 'VueDemi',
              },
              entryFileNames: (chunkInfo) => {
                // 按需组件包输出到 components/ 目录
                if (chunkInfo.name && chunkInfo.name !== 'index') {
                  return 'components/[name]/index.js';
                }
                return '[name].js';
              },
            },
          },
          outDir: isWebc ? '../dist/webc' : 'dist',
          emptyOutDir: true,
        }
      : undefined,
  };
});
