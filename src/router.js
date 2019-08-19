import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'products',
      path: '/',
      component: () => import('./views/products')
    },
    {
      name: 'cart',
      path: '/cart',
      component: () => import('./views/cart')
    }
  ]
})
