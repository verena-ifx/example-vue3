import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>tag.startsWith('ifx-')
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // map '@' to './src'
    },
    preserveSymlinks: true,
  },
  // server: { port: 5002, strictPort: true, host: true },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        // admin: path.resolve(__dirname, 'silent-renew-oidc.html'),
      },
    },
    optimizeDeps: {
      exclude: ['stream'],
    },
  },
});



