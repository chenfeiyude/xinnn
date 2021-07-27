import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import axios from "./js/http"
import store from "./js/store"
import VueImg from "v-img"

Vue.config.productionTip = false
Vue.use(VueImg)

new Vue({
  router,
  axios,
  store,
  render: h => h(App),
}).$mount('#app')
