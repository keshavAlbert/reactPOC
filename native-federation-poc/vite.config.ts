import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      // 👇 fix for esbuild not resolving RxJS operators
      'rxjs/operators': resolve(__dirname, 'node_modules/rxjs/dist/esm/operators/index.js'),
    },
  },
});
