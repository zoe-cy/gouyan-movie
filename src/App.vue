<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
     created:function(){
        this.$router.push({name:'indexFilms'})
     }
}
</script>

<style scoped>

</style>
