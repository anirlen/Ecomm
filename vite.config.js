import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ecom_react/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, 
  },
  optimizeDeps: {
    include: ['three/addons/loaders/GLTFLoader.js'],
  },
});
