import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  // User paths.
  {
    path: '/',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/HotspotPage.vue'),
      },
      {
        path: 'metrics',
        component: () => import('pages/MetricsPage.vue'),
      },
      {
        path: 'inventory',
        component: () => import('pages/ConnInventoryPage.vue'),
      },
    ],
  },

  // Admin paths.
  {
    path: '/',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        path: 'admin',
        component: () => import('pages/SamplePage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
