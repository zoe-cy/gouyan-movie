<template>
  <div class="comments">
    <div class="header">
      <a class="iconfont icon-arrow-left"></a>
      <span>短评--{{ $route.params.name }}</span>
    </div>
    <div class="shortcom" v-for="item in arr" :key="item">
      <div class="opin">
        <div class="mark">
          <span class="star"></span>
          <span class="grade" :style="{ '--cwidth': item.level*10+'%' }"></span>
        </div>
        <span class="times">{{ item.dateTime | dateFormate }}</span>
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
      arr: [],
      ratingLevel: 0,
    };
  },
  mounted: function () {
    this.$http
      .post("http://192.168.0.103:8888/rtating", {
        ratingLevel: this.ratingLevel,
        movieId: this.$route.params.id
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