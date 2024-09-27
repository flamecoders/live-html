import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/live-html/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  }
})
