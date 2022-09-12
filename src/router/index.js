import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( /* webpackChunkName: "Home" */'../views/Home.vue'),
    meta: { title: 'Molino Viejo' }
  }
  //Menu Módulo 1
  //Menu Módulo 1  
  
]

const router = new VueRouter({
  routes
})



export default router
