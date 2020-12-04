<template>
    <div class="details">
        <div class="header">
            <a class="iconfont icon-arrow-left1"></a>
            <span>流浪地球</span>
        </div>
        <div class="intro">
            <div class="ins">
                <img src="../assets/logo.png">
            </div>
            <div class="infos">
                <h2>流浪地球</h2>
                <div class="mark">
                    <span class="iconfont icon-start"></span>
                    <span class="iconfont icon-start"></span>
                    <span class="iconfont icon-start"></span>
                    <span class="iconfont icon-start"></span>
                    <span class="iconfont icon-start"></span>
                </div>
                <p>8.6(23456评分)</p>
                <p>2019年</p>
                <p>剧情、科幻</p>
                <p>中国</p>
            </div>
        </div>
        <div class="datas">
            <span>3983458想看</span>
            <span>9845看过</span>
        </div>
        <p class="outline">
           人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人
        </p>
        <p class="subtitle">演职人员</p>
        <ul>
            <li>
                 <img src="../assets/logo.png">
                 <p>吴京</p>
            </li>
             <li>
                 <img src="../assets/logo.png">
                 <p>吴京</p>
            </li>
             <li>
                 <img src="../assets/logo.png">
                 <p>吴京</p>
            </li>
             <li>
                 <img src="../assets/logo.png">
                 <p>吴京</p>
            </li>
             <li>
                 <img src="../assets/logo.png">
                 <p>吴京</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            msg:'1'
        }
    }
}
</script>
<style scoped>
.header {
    background: var(--gcolor);
    height: 60px;
    color: white;
    font-size: 22px;
    letter-spacing: 2px;
    text-align: center;
}
.header a {
     position: absolute;
     left: 3%;
     line-height: 60px;
}
.header a::before {
     font-size: 34px;
}
.header span {
     line-height: 60px;
}
.intro {
    height: 250px;
    background: #bec0c7;
    box-shadow: 0 0 3px #cfd0d4;
    position: relative;
}
.intro .ins {
     display: table-cell;
     vertical-align: middle;
     width: 180px;
      height: 100%;
}
.intro .ins img {
    width: 150px;
    height: 200px;
  
}
.intro .infos {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 180px;
}
</style>