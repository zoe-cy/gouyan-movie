import Vue from 'vue'
import vueResource from 'vue-resource'
Vue.use(vueResource)

import router from './router'
import App from './App'
Vue.config.productionTip = false

Vue.filter('rateFormat',function(val){
    if(Math.floor(val) === val){
      return val+".0"
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
