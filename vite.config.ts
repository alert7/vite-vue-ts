import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: '/#/home', // vite项目启动时自动打开浏览器
    hmr: true, // 热更新
    proxy: {
      // 字符串简写写法
      '/ebank': 'https://bizmate-whbase.sinosun.com:16443',
      // 选项写法
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // 正则表达式写法
      '^/fallback/.*': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, '')
      },
      // 使用 proxy 实例
      '/apis': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        }
      }
    }
  },
  resolve: {
    alias: {
      // '@':'绝对路径', 若有需要，自行配置其他
      '@': path.join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 注入样式变量（根据自己需求注入其他）
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  }
})
