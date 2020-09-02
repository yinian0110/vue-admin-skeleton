export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "v-layout" */'../../components/layout/simple.vue'),
    meta: {},
    children: [
      {
        path: '',
        name: 'index-home',
        meta: {},
        component: () => import(/* webpackChunkName: "v-layout" */'../../views/home/home-page.vue'),
      },
    ],
  },
];
