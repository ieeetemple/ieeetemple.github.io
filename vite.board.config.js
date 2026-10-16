import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  build: {
    outDir: 'assets/board-app',
    emptyOutDir: true,
    minify: 'esbuild',
    lib: {
      entry: 'src/board/main.jsx',
      formats: ['es'],
      cssFileName: 'board-interactive',
      fileName: () => 'board-interactive.js'
    }
  }
});
