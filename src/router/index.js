import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeVue.vue'
import RequestList from '@/components/RequestList.vue'
import RequestForm from '@/components/RequestForm.vue'
import EditRequestVue from '@/views/EditRequestVue.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/requestlist',
      name: 'requestlist',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: RequestList
    },
    {
      path: '/requestform',
      name: 'requestform',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: RequestForm
    },
    {
      path: '/EditRequest',
      name: 'EditRequest',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: EditRequestVue
    },
  ]
})

export default router
