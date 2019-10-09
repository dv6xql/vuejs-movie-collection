import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from "./router"
import { store } from "./store/store"
import App from './App.vue'
import './assets/scss/main.scss'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')