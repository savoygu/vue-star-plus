import { resolve as _resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

const resolve = (...dirs) => _resolve(__dirname, ...dirs)

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "node_modules/sass-bem/_bem.scss";`
      }
    },
  },
  build: {
    lib: {
      entry: resolve('src/main.ts'),
      name: 'VueStarPlus',
      fileName: (format) => `vue-star-plus.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue(), vueJsx(), dts({
    outputDir: resolve(__dirname, 'types')
  })]
})
