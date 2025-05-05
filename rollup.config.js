const typescript = require('rollup-plugin-typescript2');

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.es.js',
      format: 'es'
    }
  ],
  plugins: [typescript()],
  external: ['react', 'react-dom']
};
