import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: () => import('../views/ExperiencesView.vue'),
    },
    {
      path: '/beyond-codes',
      name: 'beyond-codes',
      component: () => import('../views/BeyondCodesView.vue'),
    },
    {
      path: '/styleguide',
      name: 'styleguide',
      component: () => import('../views/StyleguideView.vue'),
    },
  ],
})

export default router
