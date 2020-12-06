<template>
   <div>
      <div class="header">
          <img src="../../assets/logo.png">
          <div>
            <p>狗眼电影</p>
            <p>查资讯，上狗眼电影就够了！</p>
          </div>
          <input type="text" placeholder="请输入电影名" @click="searching">
      </div>
      <div class="nav">
          <a href="#">正在热映</a>
          <a href="#">即将上映</a>
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
     padding-left: 5%;
     margin: auto 0;
 }
 .header div {
     padding-left: 8px;
     flex:1;
      margin: auto 0;
 }
  .header div p:first-child{
      line-height: 30px;
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 4px;
  }
   .header div p:last-child{
      line-height: 20px;
      font-size: 14px;
      color: var(--font-color);
  }
 .header input {
     flex:1;
     padding-left: 8px;
     border-radius: 15px;
     border: 0;
     box-shadow: 0 0 2px 2px rgba(218, 215, 215, 0.4) inset;
     height: 50px;
     margin: auto 3%;
     font-size: 16px;
     color: var(--font-color);
     background: white;
 }
  .header input::-webkit-input-placeholder{
      color: var(--font-color);
  }
  .header input:-moz-placeholder{
      color: var(--font-color);
  }
  .header input::-moz-placeholder{
      color: var(--font-color);
  }
  .header input:-ms-input-placeholder{
      color: var(--font-color);
  }
  .nav {
      width: 100%;
      line-height: 50px;
      background-color: var(--gcolor);
      display: flex;
      
  }
  .nav a{
       flex:1;
       text-align: center;
       color: white;
       letter-spacing: 4px;
       font-size: 22px;
       -webkit-font-smoothing:antialiased;
       -moz-osx-font-smoothing: grayscale;
  }
</style>
