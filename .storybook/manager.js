import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const brandColor = '#409eff';
const brandImage = 'https://avatars.githubusercontent.com/u/11919642?s=200&v=4'; // 可替换为你的 Logo

const lightTheme = create({
  base: 'light',
  brandTitle: 'Universe Vue 通用组件库',
  brandUrl: 'https://github.com/<your-org>/universe-vue-template',
  brandImage,
  colorPrimary: brandColor,
  colorSecondary: brandColor,
});

const darkTheme = create({
  base: 'dark',
  brandTitle: 'Universe Vue 通用组件库',
  brandUrl: 'https://github.com/<your-org>/universe-vue-template',
  brandImage,
  colorPrimary: brandColor,
  colorSecondary: brandColor,
});

addons.setConfig({
  theme: lightTheme,
  darkTheme,
});
