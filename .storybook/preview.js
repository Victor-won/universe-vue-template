import '../components/theme/default-theme.css';

export const globalTypes = {
  theme: {
    name: '主题',
    description: '切换组件库主题',
    defaultValue: 'default',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'default', title: '默认主题' },
        { value: 'dark', title: '暗黑主题' },
        { value: 'brandA', title: '品牌A' },
        { value: 'custom', title: '自定义主题' },
      ],
    },
  },
  darkMode: {
    name: '暗黑模式',
    description: '切换暗黑/明亮模式',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: '明亮' },
        { value: 'dark', title: '暗黑' },
      ],
    },
  },
  locale: {
    name: '语言',
    description: '切换文档语言',
    defaultValue: 'zh',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'zh', title: '中文' },
        { value: 'en', title: 'English' },
      ],
    },
  },
};

const themes = {
  default: {
    '--uvt-primary-color': '#409eff',
    '--uvt-primary-color-hover': '#66b1ff',
    '--uvt-disabled-color': '#dcdfe6',
    '--uvt-radius': '4px',
    '--uvt-font-size': '14px',
    '--uvt-bg-color': '#fff',
    '--uvt-text-color': '#222',
  },
  dark: {
    '--uvt-primary-color': '#409eff',
    '--uvt-primary-color-hover': '#66b1ff',
    '--uvt-disabled-color': '#444',
    '--uvt-radius': '4px',
    '--uvt-font-size': '14px',
    '--uvt-bg-color': '#181818',
    '--uvt-text-color': '#eee',
  },
  brandA: {
    '--uvt-primary-color': '#e91e63',
    '--uvt-primary-color-hover': '#ff6090',
    '--uvt-disabled-color': '#c0c4cc',
    '--uvt-radius': '8px',
    '--uvt-font-size': '16px',
    '--uvt-bg-color': '#fff',
    '--uvt-text-color': '#222',
  },
  custom: (() => {
    try {
      const saved = localStorage.getItem('uvt-theme');
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.vars || {};
      }
    } catch {
      throw new Error('Failed to parse saved theme');
    }

    return {
      '--uvt-primary-color': '#e67e22',
      '--uvt-primary-color-hover': '#f39c12',
      '--uvt-disabled-color': '#bdc3c7',
      '--uvt-radius': '20px',
      '--uvt-font-size': '18px',
      '--uvt-bg-color': '#fff',
      '--uvt-text-color': '#222',
    };
  })(),
};

export const decorators = [
  (story, context) => {
    let theme = context.globals.theme || 'default';
    let darkMode = context.globals.darkMode || 'light';
    // 工具栏切换暗黑时自动切换主题
    if (darkMode === 'dark' && theme !== 'dark') {
      theme = 'dark';
    }
    if (darkMode === 'light' && theme === 'dark') {
      theme = 'default';
    }
    let vars = themes[theme] || themes.default;
    // 持久化自定义主题
    if (theme === 'custom') {
      try {
        localStorage.setItem('uvt-theme', JSON.stringify({ name: '自定义', vars }));
      } catch {
        throw new Error('Failed to save theme');
      }
    }
    if (vars) {
      Object.entries(vars).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    }
    document.body.style.background = vars['--uvt-bg-color'] || '#fff';
    document.body.style.color = vars['--uvt-text-color'] || '#222';
    return story();
  },
];
