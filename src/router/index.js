import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './../views/login.vue'
import index from './../views/index.vue'
import back from './../views/back.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/back',
    name: 'back',
    component: back
  }
]

const router = new VueRouter({
  routes
})

export default router
