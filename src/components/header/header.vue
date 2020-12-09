<template>
   <div>
      <div class="header">
          <img src="../../assets/logo.png">
          <div class="cons">
            <p>狗眼电影</p>
            <p>查最新资讯，上狗眼电影就够了！</p>
          </div>
          <div class="ipt" @click="searching">
              请输入电影名
          </div>
      </div>
   </div>
</template>

<script>
export default {
   methods:{
       searching(){
           this.$router.push({name:'searchs'})
       }
   }
}
</script>

<style scoped>
 .header {
     display: flex;
     height: 70px;
     justify-content: center;
     align-items: center;
 }
 .header img {
     width: 40px;
     height: 40px;
     padding-left: 4%;
     margin: auto 0;
 }
 .header .cons {
     padding-left: 3%;
     flex:3;
      margin: auto 0;
 }
  .header .cons p:first-child{
      line-height: 30px;
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 4px;
  }
   .header .cons p:last-child{
      line-height: 20px;
      font-size: 14px;
      color: var(--font-color);
  }

 .header .ipt {
     flex:1;
     flex-basis: 18px;
     min-width: 60px;
     border-radius: 15px;
      margin: auto 4%;
     border: 0;
     width: 100%;
     box-shadow: 0 0 2px 2px rgba(235, 221, 221, 0.4) inset;
     line-height: 40px;
     height: 40px;
     text-align: center;
     font-size: 16px;
     color: var(--font-color);
     background: white;
 }
 

</style>
