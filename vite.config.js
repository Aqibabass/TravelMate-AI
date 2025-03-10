import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'node:path'; // Corrected import

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    strictPort: true, 
  },
});