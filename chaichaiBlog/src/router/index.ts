/*
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2023-05-22 20:51:58
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-10-15 16:03:12
 * @FilePath: \chaichaiBlog\src\router\index.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/welcome.vue')
    },
    {
      path: '/componentsTest',
      name: 'test',
      component: () => import('../views/test.vue')
    }
  ]
})

export default router
