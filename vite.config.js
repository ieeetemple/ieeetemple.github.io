import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  build: {
    outDir: 'assets/home-app',
    emptyOutDir: true,
    minify: 'esbuild',
    lib: {
      entry: 'src/home/main.jsx',
      formats: ['es'],
      cssFileName: 'home-interactive',
      fileName: () => 'home-interactive.js'
    }
  }
});
