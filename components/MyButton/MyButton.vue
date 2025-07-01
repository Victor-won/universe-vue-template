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
  border-radius: var(--uvt-radius);
  background: var(--uvt-primary-color);
  color: #fff;
  cursor: pointer;
  font-size: var(--uvt-font-size);
  font-family: var(--uvt-font-family);
  transition: background 0.2s;
}
button:disabled {
  background: var(--uvt-disabled-color);
  cursor: not-allowed;
}
button:not(:disabled):hover {
  background: var(--uvt-primary-color-hover);
}
</style>
