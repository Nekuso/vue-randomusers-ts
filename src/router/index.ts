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
      path: '/users/:id',
      name: Routes.USER,
      component: () => import('@/views/user-detail-view.vue')
    }
  ]
})

export default router
