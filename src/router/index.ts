import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home-view.vue'
import { Routes } from '@/constants/route-names'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Routes.HOME,
      component: HomeView
    },
    {
      path: '/user',
      name: Routes.USER,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/user-detail-view.vue')
    }
  ]
})

export default router
