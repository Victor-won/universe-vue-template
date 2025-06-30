import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['components/**/*.test.ts'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      thresholds: {
        statements: 90,
        branches: 90,
        functions: 90,
        lines: 90,
      },
    },
  },
});
