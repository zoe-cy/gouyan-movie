import Vue from 'vue'
import vueResource from 'vue-resource'
Vue.use(vueResource)

import router from './router'
import App from './App'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
