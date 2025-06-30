<template>
  <button :type="type" :disabled="disabled" @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['click']);

function onClick(event: MouseEvent) {
  if (!props.disabled) {
    emit('click', event);
  }
}
</script>

<style scoped>
button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #409eff;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}
button:disabled {
  background: #dcdfe6;
  cursor: not-allowed;
}
</style>
