import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import shiki from 'markdown-it-shiki'
import md from 'vite-plugin-md'
import mdPreview, { transformer } from 'vite-plugin-md-preview'


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.NODE_ENV === 'production' ? '/vue-star-plus' : '/',
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/]
      }),
      md({
        transforms: {
          before: transformer
        },
        markdownItSetup(md) {
          md.use(shiki, { theme: 'github-light' })
        }
      }),
      mdPreview()
    ],
  }
})