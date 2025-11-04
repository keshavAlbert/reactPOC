import { spawn } from 'node:child_process';
import { mkdirSync, copyFileSync, existsSync, watch } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Paths
const reactBridgeDir = __dirname;
const distFile = resolve(reactBridgeDir, 'dist/react-notebook-sidebar.js');
const angularVendorDir = resolve(reactBridgeDir, '../angular-app/src/assets/vendor');
const angularVendorFile = resolve(angularVendorDir, 'react-notebook-sidebar.js');

function copyIfExists() {
  if (existsSync(distFile)) {
    mkdirSync(angularVendorDir, { recursive: true });
    copyFileSync(distFile, angularVendorFile);
    console.log(`[copy] ${distFile} -> ${angularVendorFile}`);
  } else {
    console.log('[copy] dist file not found yet...');
  }
}

// Start vite build --watch
console.log('[vite] starting build watch...');
const vite = spawn(process.platform === 'win32' ? 'npx.cmd' : 'npx', ['vite', 'build', '--watch'], {
  cwd: reactBridgeDir,
  stdio: 'inherit'
});

// Initial attempt to copy in case output already exists
copyIfExists();

// Watch the dist folder for changes and copy on write
try {
  watch(resolve(reactBridgeDir, 'dist'), { persistent: true }, (_evt, filename) => {
    if (!filename || filename !== 'react-notebook-sidebar.js') return;
    copyIfExists();
  });
  console.log('[watch] watching dist/ for changes...');
} catch (e) {
  console.log('[watch] dist/ does not exist yet; will copy after first build');
}

// On exit, clean up
process.on('SIGINT', () => {
  vite.kill('SIGINT');
  process.exit(0);
});
