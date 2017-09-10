import Vue from 'vue';
import VueRouter from 'vue-router';

import Bootstrap from './components/bootstrap/Bootstrap';
import HomeView from './views/home/Home';
import PostsView from './views/posts/Posts';

// https://router.vuejs.org/en/essentials/getting-started.html
Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeView },
  { path: '/home', component: HomeView },
  { path: '/posts', component: PostsView }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({ // eslint-disable-line no-new
  router,
  render: createElement => createElement(Bootstrap)
}).$mount('#app');