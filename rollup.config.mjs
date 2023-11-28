import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import sucrase from '@rollup/plugin-sucrase';
import json from '@rollup/plugin-json';
import cleanup from 'rollup-plugin-cleanup';
import clear from 'rollup-plugin-clear'


export default {
  input: './src/main.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      name: 'tn',
      manualChunks(id) {
        if (id.includes('node_modules')) {
          return 'vendor/index';
        }
        if (id.includes('commonjs')) {
          return 'external/index'
        }
        if (id.includes('src')) {
          return `${(id.split('src/')[1]).split('.ts')[0]}`
        }
      },
      chunkFileNames: '[name].js'
    }
  ],
  plugins: [
    clear({
      targets: ['dist']
    }),
    resolve({ extensions: ['.ts', '.js'], preferBuiltins: true }),
    commonjs(),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['typescript'],
    }),
    json(),
    terser(),
    cleanup()
  ],
  onwarn: function (message) {
    if (message.code === 'EVAL') return
  }
}
