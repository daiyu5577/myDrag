import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          component: '@/pages/home',
          exact: true,
        },
        {
          path: '/source/allSource',
          component: '@/pages/source/allSource',
          exact: true,
        },
        {
          path: '/source/sourceUpload',
          component: '@/pages/source/sourceUpload',
          exact: true,
        },
      ]
    },
    {
      path: '/login',
      component: '@/pages/login',
      exact: true,
    },
  ],
  fastRefresh: {},
});
