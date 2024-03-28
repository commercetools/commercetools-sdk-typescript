import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // vue 3
import { nodePolyfills } from 'vite-plugin-node-polyfills'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), nodePolyfills()],
  define: {},
  build: {
    commonjsOptions: { transformMixedEsModules: true }, // Change
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
