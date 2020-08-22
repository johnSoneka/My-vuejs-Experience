import './firebase'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import './assets/styles/app.scss'
import VueFire from 'vuefire'

Vue.config.productionTip = false
//Vue.use( VueFire );

new Vue({
  router,
  store,
  VueFire,
  render: h => h(App)
}).$mount('#app')
