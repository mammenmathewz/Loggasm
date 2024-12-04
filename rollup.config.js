import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.js',  // Your entry point file

  output: [
    {
      file: 'dist/bundle.cjs.js',  // CommonJS output for Node.js
      format: 'cjs',
      exports: 'auto',
      sourcemap: true, // Optional: Include a sourcemap for debugging
    },
    {
      file: 'dist/bundle.esm.js',  // ESM output for compatibility with modern tools
      format: 'esm',
      sourcemap: true, // Optional: Include a sourcemap for debugging
    },
  ],

  external: [
    // External dependencies that shouldn't be bundled
    'chalk',
    'figlet',
  ],

  plugins: [
    resolve({
      preferBuiltins: true,  // Ensure Node's built-in modules are resolved first
      browser: false,        // Make sure browser-specific code isn't included
    }),
    commonjs(),
  ],
};
