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
    path: '/category/sello-de-esporas',
    name: 0,
    component: () => import('../views/Category.vue')

  },
  {
    path: '/category/culturas-liquidas',
    name: 1,
    component: () => import('../views/Category.vue')

  },
  {
    path: '/category/kits-de-cultivo',
    name: 2,
    component: () => import('../views/Category.vue')

  },
  {
    path: '/category/equipamiento-laboratorio',
    name: 3,
    component: () => import('../views/Category.vue')

  },
  {
    path: '/category/accesorios-para-cultivo',
    name: 4,
    component: () => import('../views/Category.vue')

  },
  {
    path: '/category/autoclaves',
    name: 5,
    component: () => import('../views/Category.vue')

  },
  {
    path: '/category/substratos-para-cultivo',
    name: 6,
    component: () => import('../views/Category.vue')

  },
  {
    path: '/category/spawn',
    name: 7,
    component: () => import('../views/Category.vue')

  },
  {
    path: '/category/conservacion-/-deshidratadores',
    name: 8,
    component: () => import('../views/Category.vue')

  },
  {
    path: '/category/libros',
    name: 9,
    component: () => import('../views/Category.vue')

  },
  {
    path: '/product/:product_id',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/cart/',
    component: () => import('../views/Cart.vue')
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
