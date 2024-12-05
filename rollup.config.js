import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.js',  

  output: [
    {
      file: 'dist/bundle.esm.js',  
      format: 'esm',
      sourcemap: true, 
    }
  ],

  external: [
    'chalk',
    'figlet',
  ],

  plugins: [
    resolve({
      preferBuiltins: true,  
      browser: false,       
    }),
    commonjs(),
  ],
};
