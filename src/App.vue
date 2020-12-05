<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import vheader from './components/header/header'
import spinner from './components/spinner/spinner.vue'
import searchs from './components/searchs.vue'
import filmDetail from './components/filmDetail.vue'
import filmComments from './components/filmComments'
export default {
     components: {
      //  vheader,
      //  spinner,
      //  searchs,
      //  filmDetail,
      //  filmComments
     },
     created:function(){
        this.$router.push({name:'searchs'})
     }
}
</script>

<style scoped>

</style>>
 
</style>
