import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import shiki from 'markdown-it-shiki'
import Markdown from 'vite-plugin-vue-markdown'
import MarkdownPreview from 'vite-plugin-markdown-preview'


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.NODE_ENV === 'production' ? '/vue-star-plus' : '/',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "sass-bem-next/_bem.scss";`
        }
      },
    },
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/]
      }),
      Markdown({
        markdownItSetup(md) {
          md.use(shiki, {
            theme: 'github-dark'
          })
        }
      }),
      MarkdownPreview()
    ],
  }
})