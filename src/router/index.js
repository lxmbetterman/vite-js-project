import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import Layout from '@/views/layout/index.vue'
import MyPage from '@/views/project/micPro/my-page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/pages/login/index.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
      path: '/my-page', // vue-router@4.x path的写法为：'/my-page/:page*'
      name: 'my-page',
      component: MyPage,
    },
  ],
})

export default router
