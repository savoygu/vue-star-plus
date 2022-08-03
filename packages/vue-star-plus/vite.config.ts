import { resolve as _resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const resolve = (...dirs) => _resolve(__dirname, ...dirs)

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "sass-bem-next/_bem.scss";`
      }
    }
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
  plugins: [
    vue(),
    vueJsx(),
    dts({
      outputDir: resolve(__dirname, 'types')
    })
  ]
})
