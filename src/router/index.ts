/*
 * @Author: Zhang Chunming
 * @Date: 2022-06-20 13:16:02
 * @Description:
 * @FilePath: \vite-ts\src\router\index.ts
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [{
  path: '/home',
  name: 'Home',
  component: () => import('../views/home/IndexHome.vue')
}, {
  path: '/detail',
  name: 'Deatil',
  component: () => import('../views/detail/Detail.vue')
}]

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes
})

export default router
