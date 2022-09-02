import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( /* webpackChunkName: "Home" */'../views/Home.vue'),
    meta: { title: 'Molino Viejo' }
  }, 

  //Menu Módulo 1
  //Menu Módulo 1
  {
    path: '/Planes',
    name: 'Planes',
    component: () => import( /* webpackChunkName: "11" */'../views/Planes.vue'),
    meta: { title: 'Planes - Molino Viejo' }
  },

  {
    path: '/Quienes',
    name: 'Quienes',
    component: () => import(/* webpackChunkName: "12" */'../views/Quienes.vue'),
    meta: { title: 'Quienes Somos - Molino Viejo' }
  },

  
  


  //Menu Módulo 1
  //Menu Módulo 1  
  
]

const router = new VueRouter({
  routes
})



export default router
