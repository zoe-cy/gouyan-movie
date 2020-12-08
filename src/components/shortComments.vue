<template>
  <div class="comments">
    <div class="header">
      <span class="iconfont icon-arrow-left" @click="goback"></span>
      <span>短评--{{ $route.params.name }}</span>
    </div>
    <div class="shortcom" v-for="item in arr" :key="item">
      <div class="opin">
        <div class="mark">
          <span class="star"></span>
          <span class="grade" :style="{ '--cwidth': item.level*10+'%' }"></span>
        </div>
        <span class="times">{{ item.dateTime | dateFormat }}</span>
      </div>
      <p>{{ item.info }}</p>
      <div class="users">
        <div class="imgs">
          <img src="../assets/logo.png" />
        </div> 
        <div class="names">{{ item.userName }}</div>
      </div>
      <hr />
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      id:this.$route.params.id,
      arr: [],
      ratingLevel: 0,
    };
  },
  methods:{
     goback(){
         this.$router.push({name:'filmDetail',params:{id:this.id}})
     }
  },
  mounted: function () {
    this.$http
      .post("rtating", {
        ratingLevel: this.ratingLevel,
        movieId: this.id
      })
      .then(
        function (res) {
          if (res.status === 200) {
            this.arr = res.data;
            
          } else {
            console.log(res.status);
          }
        },
        function (res) {
          console.log(res.status);
        }
      );
  },
};
</script>
<style scoped>
.comments {
  color: var(--sub-color);
}
.header {
  background: var(--gcolor);
  height: 60px;
  color: white;
  font-size: 22px;
  letter-spacing: 2px;
  text-align: center;
}
.header .iconfont {
  position: absolute;
  left: 3%;
  line-height: 60px;
}
.header .iconfont::before {
  font-size: 34px;
}
.header span {
  line-height: 60px;
}
.shortcom {
  margin-top: 20px;
  margin-left: 2%;
  margin-right: 2%;
}
.shortcom .opin {
  overflow: hidden;
}
.shortcom .opin .mark {
  float: left;
}
.shortcom .opin .times {
  display: inline-block;
  line-height: 36px;
}
.shortcom p {
  margin-bottom: 10px;
}
.shortcom .users {
  height: 30px;
}
.shortcom .users .imgs {
  float: left;
}
.shortcom .users .imgs img {
  height: 30px;
}
.shortcom .users .names {
  float: left;
  margin-left: 10px;
  line-height: 30px;
}
.mark {
  margin-top: 6px;
  height: 30px;
  width: 100px;
  position: relative;
}

.mark .star {
  display: inline-block;
  height: 30px;
  width: 100%;
  background: url(../assets/start.png);
  background-repeat: repeat-x;
  background-size: 20px;
}
.mark .grade {
  left: 0;
  top: 0;
  position: absolute;
  display: inline-block;
  height: 30px;
  width: var(--cwidth);
  background: url(../assets/start1.png);
  background-repeat: repeat-x;
  background-size: 20px;
}
</style>