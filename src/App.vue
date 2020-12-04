<template>
  <div id="app">
    <filmDetail></filmDetail>
    <filmComments></filmComments>
  </div>
</template>

<script>
import vheader from './components/header/header'
import spinner from './components/spinner/spinner.vue'
import search from './components/search.vue'
import filmDetail from './components/filmDetail.vue'
import filmComments from './components/filmComments'
export default {
     components: {
       vheader,
       spinner,
       search,
       filmDetail,
       filmComments
     }
}
</script>

<style scoped>

</style>>
 
</style>
