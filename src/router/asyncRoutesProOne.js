/* 需要权限过滤的路由 */

import Layout from '@/views/layout/index.vue'

export const asyncRoutesProjectOne = [
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
]
