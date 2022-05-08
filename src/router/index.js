import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/tab1',
  },
  {
    path: '/tab1',
    name: 'tab1',
    component: () => import('../views/PluginsView.vue'),
  },
  {
    path: '/tab2',
    name: 'tab2',
    component: () => import('../views/PluginsView.vue'),
  },
  {
    path: '/tab3',
    name: 'tab3',
    component: () => import('../views/PluginsView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
