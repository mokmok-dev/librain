import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
  },
  projects: [
    {
      test: {
        name: 'apps',
        include: ['apps/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      },
      root: './',
    },
    {
      test: {
        name: 'packages',
        include: ['packages/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      },
      root: './',
    },
  ],
});
