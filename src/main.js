import Vue from 'vue'
import vueResource from 'vue-resource'
Vue.use(vueResource)
Vue.http.options.root = "http://39.104.159.177:8888"

import router from './router'
import App from './App'
Vue.config.productionTip = false

Vue.filter('rateFormat',function(val){
    if(Math.floor(val) === val){
      return val+".0"
    }
})

Vue.filter('dateFormat',function(val){
     const arr = String(val).split('/');
     if(arr.length<3){
        return arr[0]+"年"+arr[1]+"月" 
     } else {
        return arr[0]+"-"+arr[1]+"-"+arr[2]
     }
     
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
