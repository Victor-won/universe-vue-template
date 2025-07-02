import { Meta } from '@storybook/vue3';

const logo = 'https://avatars.githubusercontent.com/u/11919642?s=200&v=4'; // 可替换为你的品牌 Logo

const themeVars = [
  { key: '--uvt-primary-color', label: '主色', type: 'color' },
  { key: '--uvt-primary-color-hover', label: '主色悬停', type: 'color' },
  { key: '--uvt-disabled-color', label: '禁用色', type: 'color' },
  { key: '--uvt-radius', label: '圆角', type: 'text' },
  { key: '--uvt-font-size', label: '字体大小', type: 'text' },
  { key: '--uvt-bg-color', label: '背景色', type: 'color' },
  { key: '--uvt-text-color', label: '文字色', type: 'color' },
];

const defaultThemes = {
  default: {
    name: '默认',
    vars: {
      '--uvt-primary-color': '#409eff',
      '--uvt-primary-color-hover': '#66b1ff',
      '--uvt-disabled-color': '#c0c4cc',
      '--uvt-radius': '4px',
      '--uvt-font-size': '14px',
      '--uvt-bg-color': '#fff',
      '--uvt-text-color': '#222',
    },
  },
  dark: {
    name: '暗黑',
    vars: {
      '--uvt-primary-color': '#409eff',
      '--uvt-primary-color-hover': '#66b1ff',
      '--uvt-disabled-color': '#444',
      '--uvt-radius': '4px',
      '--uvt-font-size': '14px',
      '--uvt-bg-color': '#181818',
      '--uvt-text-color': '#eee',
    },
  },
  brandA: {
    name: '品牌A',
    vars: {
      '--uvt-primary-color': '#e91e63',
      '--uvt-primary-color-hover': '#ff6090',
      '--uvt-disabled-color': '#c0c4cc',
      '--uvt-radius': '8px',
      '--uvt-font-size': '16px',
      '--uvt-bg-color': '#fff',
      '--uvt-text-color': '#222',
    },
  },
};

export default {
  title: '首页/总览',
  parameters: {
    docs: {
      description: {
        component: '组件库多语言首页/总览 story 示例。',
      },
    },
  },
} as Meta;

export const Home = (args, { globals }) => {
  const locale = globals.locale || 'zh';
  const darkMode = globals.darkMode || false;
  return {
    template: `
      <div style="padding:40px;max-width:800px;margin:auto;text-align:center;">
        <img :src="logo" alt="logo" style="width:80px;height:80px;border-radius:16px;margin-bottom:16px;" />
        <h1 style="margin-bottom:8px;">{{ title }}</h1>
        <p style="color:#888;margin-bottom:24px;">{{ desc }}</p>
        <div style="margin-bottom:32px;">
          <a :href="docUrl" target="_blank" style="margin:0 8px;">📖 {{ docBtn }}</a>
          <a :href="apiUrl" target="_blank" style="margin:0 8px;">🧩 {{ apiBtn }}</a>
          <a :href="themeUrl" target="_blank" style="margin:0 8px;">🎨 {{ themeBtn }}</a>
          <a :href="materialUrl" target="_blank" style="margin:0 8px;">🛒 {{ materialBtn }}</a>
        </div>
        <div style="margin-bottom:32px;text-align:left;display:inline-block;">
          <h3 style="margin-bottom:8px;">主题编辑器 Theme Editor</h3>
          <div style="margin-bottom:8px;">
            <label>主题切换：</label>
            <select v-model="currentTheme" @change="onThemeSelect">
              <option v-for="(theme, key) in themes" :key="key" :value="key">{{ theme.name }}</option>
            </select>
            <button @click="onReset" style="margin-left:8px;">重置</button>
          </div>
          <form @input="onThemeChange">
            <div v-for="item in themeVars" :key="item.key" style="margin-bottom:8px;">
              <label :for="item.key" style="display:inline-block;width:120px;">{{ item.label }}:</label>
              <input :id="item.key" :type="item.type" v-model="theme[item.key]" :style="item.type==='color'?{width:'40px',height:'24px',verticalAlign:'middle'}:{}" />
            </div>
          </form>
          <div style="margin-top:8px;">
            <button @click="onExport">导出主题</button>
            <input type="file" accept="application/json" @change="onImport" style="margin-left:8px;" />
          </div>
        </div>
        <ul style="text-align:left;display:inline-block;">
          <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>
      </div>
    `,
    data() {
      const themes = JSON.parse(JSON.stringify(defaultThemes));
      // 读取 localStorage
      const savedTheme = localStorage.getItem('uvt-theme');
      let theme = {};
      let currentTheme = 'default';
      if (savedTheme) {
        try {
          const parsed = JSON.parse(savedTheme);
          if (parsed.vars && parsed.name) {
            themes['custom'] = { name: '自定义', vars: parsed.vars };
            theme = { ...parsed.vars };
            currentTheme = 'custom';
          }
        } catch {
          throw new Error('Failed to parse saved theme');
        }
      } else if (darkMode) {
        theme = { ...themes.dark.vars };
        currentTheme = 'dark';
      } else {
        theme = { ...themes.default.vars };
      }
      // 兼容 Storybook 切换 darkMode
      if (darkMode && currentTheme !== 'dark') {
        theme = { ...themes.dark.vars };
        currentTheme = 'dark';
      }
      return locale === 'en'
        ? {
            logo,
            title: 'Universe Vue Component Library',
            desc: 'A universal Vue2/Vue3 component library with theme, docs, test, WebComponent, API automation, etc.',
            docBtn: 'Docs',
            apiBtn: 'API',
            themeBtn: 'Theme',
            materialBtn: 'Material',
            docUrl: 'https://github.com/<your-org>/universe-vue-template#readme',
            apiUrl: 'https://github.com/<your-org>/universe-vue-template/tree/main/docs/api',
            themeUrl: 'https://github.com/<your-org>/universe-vue-template/tree/main/components/theme',
            materialUrl: 'https://github.com/<your-org>/universe-vue-template/tree/main/material',
            list: [
              'Modern engineering & CI/CD',
              'Storybook documentation & multi-language',
              'Theme system & WebComponent export',
              'API auto-generation',
              'Material/Low-code platform integration',
            ],
            theme,
            themeVars,
            themes,
            currentTheme,
          }
        : {
            logo,
            title: 'Universe Vue 通用组件库',
            desc: '支持 Vue2/Vue3 的通用组件库，支持主题、文档、测试、WebComponent、API 自动化等。',
            docBtn: '文档',
            apiBtn: 'API 文档',
            themeBtn: '主题系统',
            materialBtn: '物料平台',
            docUrl: 'https://github.com/<your-org>/universe-vue-template#readme',
            apiUrl: 'https://github.com/<your-org>/universe-vue-template/tree/main/docs/api',
            themeUrl: 'https://github.com/<your-org>/universe-vue-template/tree/main/components/theme',
            materialUrl: 'https://github.com/<your-org>/universe-vue-template/tree/main/material',
            list: [
              '现代工程化与 CI/CD',
              'Storybook 文档与多语言',
              '主题系统与 WebComponent 导出',
              'API 自动生成',
              '物料/低代码平台对接',
            ],
            theme,
            themeVars,
            themes,
            currentTheme,
          };
    },
    watch: {
      currentTheme(val) {
        if (this.themes[val]) {
          this.theme = { ...this.themes[val].vars };
          this.applyTheme();
          if (val === 'custom') return;
          localStorage.removeItem('uvt-theme');
        }
      },
      theme: {
        handler() {
          this.applyTheme();
          // 持久化自定义主题
          if (this.currentTheme === 'custom') {
            localStorage.setItem('uvt-theme', JSON.stringify({ name: '自定义', vars: this.theme }));
          }
        },
        deep: true,
      },
      // 监听暗黑模式切换
      '$root.$options.globals.darkMode'(val) {
        if (val) {
          this.currentTheme = 'dark';
        } else {
          this.currentTheme = 'default';
        }
      },
    },
    mounted() {
      this.applyTheme();
    },
    methods: {
      applyTheme() {
        this.themeVars.forEach(v => {
          document.documentElement.style.setProperty(v.key, this.theme[v.key]);
        });
      },
      onThemeChange() {
        this.applyTheme();
        // 切换为自定义主题
        if (this.currentTheme !== 'custom') {
          this.currentTheme = 'custom';
        }
      },
      onThemeSelect() {
        if (this.themes[this.currentTheme]) {
          this.theme = { ...this.themes[this.currentTheme].vars };
          this.applyTheme();
        }
      },
      onReset() {
        this.currentTheme = 'default';
        this.theme = { ...this.themes.default.vars };
        this.applyTheme();
        localStorage.removeItem('uvt-theme');
      },
      onExport() {
        const json = JSON.stringify({ name: this.currentTheme, vars: this.theme }, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `uvt-theme-${this.currentTheme}.json`;
        a.click();
        URL.revokeObjectURL(url);
      },
      onImport(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = evt => {
          try {
            const result = evt.target && evt.target.result ? evt.target.result : '';
            if (!result) throw new Error('empty');
            const obj = JSON.parse(result as string);
            if (obj.vars) {
              this.theme = { ...obj.vars };
              this.currentTheme = 'custom';
              localStorage.setItem('uvt-theme', JSON.stringify({ name: '自定义', vars: this.theme }));
              this.applyTheme();
            }
          } catch {
            alert('主题文件格式错误');
          }
        };
        reader.readAsText(file);
      },
    },
  };
};
Home.storyName = '多语言首页';
