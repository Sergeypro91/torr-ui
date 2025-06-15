import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/torr-ui/',
  build: {
    sourcemap: true,
    rollupOptions: {
      external: ['@torr-app/styles/global.css'],
    }
  },
});
