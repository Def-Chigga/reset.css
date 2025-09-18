import { defineConfig } from 'rollup'
import clean from 'rollup-plugin-clean'
import postcss from 'rollup-plugin-postcss'

export default defineConfig({
  input: './lib/index.css',
  output: {
    file: './bundle.js',
    format: 'es',
  },
  plugins: [
    // 清理打包目录
    clean(),
    // 处理CSS
    postcss({
      extract: 'reset.css', // 提取为独立 CSS 文件
      minimize: true, // 不使用postcss的压缩，我们手动处理
      plugins: [], // PostCSS 插件
    }),
  ],
})
