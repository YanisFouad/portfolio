import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/project/:id',
      component: () => import('@/components/pages/ProjectPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/components/pages/404Page.vue')
    },
  ],
})

export default router
