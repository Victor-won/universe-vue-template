<template>
  <div style="padding: 40px">
    <h2>Playground - MyButton 组件演示</h2>
    <div style="margin-bottom: 16px;">
      <button @click="setTheme('default')">默认主题</button>
      <button @click="setTheme('custom')" style="margin-left: 8px;">自定义主题</button>
    </div>
    <MyButton @click="onClick">点我</MyButton>
  </div>
</template>

<script setup lang="ts">
import MyButton from '../components/MyButton';

function onClick() {
  alert('按钮被点击！');
}

function setTheme(type: 'default' | 'custom') {
  const root = document.documentElement;
  if (type === 'default') {
    root.style.setProperty('--uvt-primary-color', '#409eff');
    root.style.setProperty('--uvt-primary-color-hover', '#66b1ff');
    root.style.setProperty('--uvt-disabled-color', '#dcdfe6');
    root.style.setProperty('--uvt-radius', '4px');
    root.style.setProperty('--uvt-font-size', '14px');
  } else {
    root.style.setProperty('--uvt-primary-color', '#e67e22');
    root.style.setProperty('--uvt-primary-color-hover', '#f39c12');
    root.style.setProperty('--uvt-disabled-color', '#bdc3c7');
    root.style.setProperty('--uvt-radius', '20px');
    root.style.setProperty('--uvt-font-size', '18px');
  }
}
</script>
