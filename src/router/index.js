import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: ()=>import('../views/HomeView.vue')
    }, {
      path: '/Cart',
      name: 'Cart',
      component: ()=>import('../views/Cart.vue')
    },{
      path: '/Classify',
      name: 'Classify',
      component: ()=>import('../views/Classify.vue')
    },{
      path: '/Wo',
      name: 'Wo',
      component: ()=>import('../views/Wo.vue')
    },{
      path: '/Search',
      name: 'Search',
      component: ()=>import('../views/Search.vue')
    }
  ]
})

export default router
