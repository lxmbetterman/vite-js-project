import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Layout from '@/views/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/projectOne',
      name: 'projectOne',
      component: Layout,
      meta: { type: 'project' },
      redirect: '/projectOne/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () =>
            import('@/views/project/projectNameOne/dashboard/index.vue'),
          name: 'projectOneDashboard',
          meta: { title: '项目面板', icon: 'iconHouse' },
        },
      ],
    },
  ],
})

export default router
