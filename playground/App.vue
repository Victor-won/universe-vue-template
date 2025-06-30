<template>
  <div style="padding: 40px">
    <h2>Playground - MyButton 组件演示</h2>
    <MyButton @click="onClick">点我</MyButton>
  </div>
</template>

<script setup lang="ts">
import MyButton from '../components/MyButton';

function onClick() {
  alert('按钮被点击！');
}
</script>
