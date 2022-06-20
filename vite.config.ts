import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: '/#/home', // vite项目启动时自动打开浏览器
    hmr: true // 热更新
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
