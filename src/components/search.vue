<template>
    <div class="search">
        <div class="header">
            <input type="text">
            <p>取消</p>
        </div>
        <p>热门搜索</p>
        <div class="nav">
            <span>流浪地球</span>
            <span>流浪地球33333333</span>
            <span>流浪地球</span>
            <span>流浪地球</span>
            <span>流浪地球</span>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            mdg:''
        }
    }
}
</script>
<style scoped>
.search {
    margin: 0 3%;
}
.header {
    display: flex;
    height: 60px;
    align-items: center;
    margin-bottom: 16px;
}
.header input {
     flex:1;
     border-radius: 30px;
     border: 0;
     box-shadow: 0 0 2px 2px rgba(218, 215, 215, 0.4) inset;
     height: 40px;
     margin: auto 0;
     font-size: 16px;
     color: var(--font-color);
 }
 .header p {
     margin-left: 2%;
     font-size: 18px;
      color: var(--sub-color);
 }

 p{
     font-size: 22px;
     color: var(--sub-color);
     line-height: 40px;
 }
 .nav {
     margin-top: 12px;
     display: flex;
     flex-wrap: wrap;
 }
 .nav span {
     padding: 10px;
     height: 22px;
     display: inline-block;
     vertical-align: middle;
     margin-right: 6px;
     margin-bottom: 6px;
     background: white;
     border-radius: 14px;
     box-shadow: 0 0 2px 1px rgba(214, 213, 213, 0.4) inset;
     font-size: 16px;
     letter-spacing: 2px;
     color: var(--gcolor);
 }
</style>