import Vue from 'vue';
import { createStore } from './store';
import { createRouter } from './router';
import App from './app.vue';

export function createApp() {
  const store = createStore();
  const router = createRouter();

  const app = new Vue({
    store,
    router,
    render: h => h(App)
  });

  return { app, router, store }
}
