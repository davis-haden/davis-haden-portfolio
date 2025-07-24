import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// The base is set to a relative path so that the app can be deployed
// to GitHub Pages without requiring further configuration. If you
// deploy to a custom domain or subfolder, update the base accordingly.
export default defineConfig({
  plugins: [react()],
  base: './',
});
