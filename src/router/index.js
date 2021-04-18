import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:slug',
    component: () => import('../views/Category.vue')

  },
  {
    path: '/product/:slug',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/cart/',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/success/',
    component: () => import('../views/Success.vue')
  },
  {
    path: '/canceled/',
    component: () => import('../views/Canceled.vue')
  },
  {
    path: '/policies/',
    component: () => import('../views/Policies.vue')
  },
  {
    path: '*',
    redirect: '/'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
