import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Importamos los estilos de ITM
import '@/assets/RecursosITM/css/ECSOO.css'
// import '@/assets/RecursosITM/css/CienciasExactas.css'
import '@/assets/RecursosITM/common/css/itm.css'

//Importando globalmente bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


//Importando globalmente swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
// import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)


//Variable global
Vue.mixin({
    data: function() {
      return{
        numeroModulo: null,
        
      }
    }
})

//Importando vue carousel
import VueCarousel from 'vue-carousel';
// Install Vue Carousel
Vue.use(VueCarousel);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');