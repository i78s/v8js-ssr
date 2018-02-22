import Vue from 'vue';
import VueRouter from 'vue-router';

import PageIndex from '../components/page-index';
import PageAbout from '../components/page-about';
import PageNotFound from '../components/page-not-found';

Vue.use(VueRouter);

export function createRouter () {
  return new VueRouter({
    mode: 'history',
    base: `/`,
    routes: [
      {
        name: 'index',
        path: '/',
        component: PageIndex
      },
      {
        name: 'about',
        path: '/about',
        component: PageAbout
      },
      {
        path: "*",
        component: PageNotFound
      }
    ]
  });
}
