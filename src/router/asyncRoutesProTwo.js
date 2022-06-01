/* 需要权限过滤的路由 */

import Layout from '@/views/layout/index.vue'

export const asyncRoutesProjectOne = [
  {
    path: '/projectTwo',
    name: 'projectTwo',
    component: Layout,
    meta: { type: 'project' },
    redirect: '/projectTwo/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () =>
          import('@/views/project/projectNameTwo/dashboard/index.vue'),
        name: 'projectTwoDashboard',
        meta: { title: '项目面板', icon: 'iconHouse' },
      },
    ],
  },
]
