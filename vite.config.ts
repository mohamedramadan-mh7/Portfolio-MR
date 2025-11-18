import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: '/Portfolio-MR/',        // مهم للنشر على GitHub Pages في مسار الريبو
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // alias واحد مفيد فقط
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',            // متوافق مع "gh-pages -d build"
  },
  server: {
    port: 3000,
    open: true,
  },
});
