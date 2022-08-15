import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: import('./../views/login.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: import('./../views/index.vue')
  },
  {
    path: '/back',
    name: 'back',
    component: import('./../views/back.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
