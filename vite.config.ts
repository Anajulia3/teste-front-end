import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const proxy = {
  '/api/produtos': {
    target: 'https://app.econverse.com.br',
    changeOrigin: true,
    rewrite: () => '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
  },
};

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  server: {
    proxy,
  },
  preview: {
    proxy,
  },
});
