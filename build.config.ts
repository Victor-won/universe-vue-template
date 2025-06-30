import { defineBuildConfig } from 'unbuild';
import vuePlugin from 'rollup-plugin-vue';

export default defineBuildConfig({
  entries: [
    // 主入口
    './components/index',
    // 按需组件入口可自动生成
  ],
  outDir: 'dist',
  declaration: true,
  rollup: {
    emitCJS: true,
    esbuild: false,
  },
  externals: [
    'vue',
    'vue-demi',
  ],
  hooks: {
    'rollup:options': (ctx, options) => {
      options.plugins = options.plugins || [];
      options.plugins.push(vuePlugin());
    },
  },
});
