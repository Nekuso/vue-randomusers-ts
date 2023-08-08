import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home-view.vue'
import { Routes } from '@/constants/route-names'
import NotFound from '@/views/not-found.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Routes.HOME,
      component: HomeView
    },

    {
      path: '/users',
      name: Routes.USERS,
      component: HomeView
    },

    {
      path: '/users/:id',
      name: Routes.USER,
      component: () => import('@/views/user-detail-view.vue')
    },
    {
      path: '/:notFound',
      name: Routes.NOT_FOUND,
      component: NotFound
    }
  ]
})

export default router
