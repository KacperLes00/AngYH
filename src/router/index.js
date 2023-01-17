import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/words',
      name: 'words',
      
      component: () => import('../views/WordsView.vue')
    },
    {
      path: '/exercises',
      name: 'exercises',
      
      component: () => import('../views/ExercisesView.vue')
    },
    {
      path: '/shedule',
      name: 'shedule',
      
      component: () => import('../views/SheduleView.vue')
    }

  ]
})

export default router
