import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('components/ConnInventory.vue'),
      }
    ],
  },
  {
    path: '/',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      {
        path: 'metrics',
        component: () => import('pages/MetricsPage.vue'),
      },
      {
        path: 'hotspot',
        component: () => import('pages/HotspotPage.vue'),
      },
      {
        path: 'inventory',
        component: () => import('pages/ConnInventory.vue'),
      },
    ],
  },

  // Admin paths.
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
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
