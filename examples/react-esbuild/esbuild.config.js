// esbuild.config.js
const {
  NodeGlobalsPolyfillPlugin,
} = require('@esbuild-plugins/node-globals-polyfill')
const {
  NodeModulesPolyfillPlugin,
} = require('@esbuild-plugins/node-modules-polyfill')

const define = {}
for (const k in process.env) {
  define[`process.env.${k}`] = JSON.stringify(process.env[k])
}

console.log(define)
require('esbuild')
  .build({
    entryPoints: ['src/App.tsx'],
    bundle: true,
    minify: true,
    format: 'cjs',
    sourcemap: true,
    outfile: 'dist/output.js',
    define,
    plugins: [
      NodeModulesPolyfillPlugin(),
      NodeGlobalsPolyfillPlugin({
        process: true,
        buffer: true,
      }),
    ],
    // external: ['react', 'react-dom'],
  })
  .catch(() => process.exit(1))
