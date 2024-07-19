import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './routes/AppHome.vue';
import AppProjects from './routes/AppProjects.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    {
      path: '/projects',
      name: 'projects',
      component: AppProjects,
    },
  ],
});
export { router };
