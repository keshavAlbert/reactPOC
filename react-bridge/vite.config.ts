import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/react-app/registerSidebarElement.tsx'),
      name: 'ReactNotebookSidebar',
      fileName: () => 'react-notebook-sidebar.js',
      formats: ['es']
    },
    target: 'es2019'
  }
});
