<template>
  <div class="detail">
    <div class="header">
      <span class="iconfont icon-arrow-left" @click="goback"></span>
      <span>{{ obj.name }}</span>
    </div>
    <div class="intro">
      <div class="ins">
        <img src="../assets/logo.png" />
      </div>
      <div class="infos">
        <h1>影星资料</h1>
        <h2>{{ obj.name }}</h2>
      </div>
    </div>
    <div v-if="obj.gender === '男'"><h2 class="subtitle">他的代表作品</h2></div>
    <div v-else><h2 class="subtitle">她的代表作品</h2></div>
    <div
      class="filmList"
      v-for="item in obj.films"
      :key="item.id"
      @click="goFilms(item.filmId)"
    >
      <div class="box">
        <div class="ins">
          <img src="../assets/logo.png" />
        </div>
        <div class="infos">
          <h3>{{ item.filmName }}</h3>
          <div v-if="item.derectors">
            <p>导演：{{ item.derectors }}</p>
          </div>
          <div v-else>
            <p>
              主演：<span v-for="i in item.actors" :key="i">{{ i }} </span>
            </p>
          </div>
          <p>{{ item.date | dateFormat }}</p>
          <div class="mark">
            <span class="star"></span>
            <span
              class="grade"
              :style="{ '--swidth': item.ratingNum * 10 + '%' }"
            ></span>
          </div>
          <p>
            {{ item.ratingNum | rateFormat }}分 ({{ item.ratingUser }}人评价)
          </p>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      obj: {
        id: 1,
        name: "default",
        gender: "n",
        films: [
          {
            filmId: 1,
            filmName: "1",
            actors: ["lp", "lt"],
            date: "1999/1",
            ratingNum: 9.3,
            ratingUser: 999,
          },
        ],
      },
    };
  },
  methods: {
    goback() {
      window.history.goback();
    },
    goFilms(id) {
      this.$router.push({ name: "filmDetail", params: { id } });
    },
  },
  mounted: function () {
    this.$http.post("personInfo", { id: $route.params.id }).then(
      function (res) {
        if (res.status === 200) {
          this.obj = res.data;
        } else {
          console.log(res.status);
        }
      },
      function () {
        console.log("failed");
      }
    );
  },
};
</script>
<style scoped>
.detail {
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
.intro {
  height: 250px;
  color: white;
  background: #bec0c7;
  box-shadow: 0 0 3px #cfd0d4;
  position: relative;
}
.intro .ins {
  display: table-cell;
  vertical-align: middle;
  width: 180px;
  height: 250px;
  text-align: center;
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
.intro .infos h2 {
  letter-spacing: 4px;
}

.subtitle {
  margin-left: 2%;
  margin-top: 20px;
  margin-bottom: 20px;
  color: var(--sub-color);
}
.filmList {
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 10px;
  overflow: hidden;
}
.filmList .box {
  overflow: hidden;
}
.filmList .ins {
  float: left;
  margin-right: 10px;
}
.filmList .infos {
  margin-left: 20%;
}
.filmList .infos p {
  height: 30px;
  line-height: 30px;
}
.mark {
  margin-top: 6px;
  height: 26px;
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
  width: var(--swidth);
  background: url(../assets/start1.png);
  background-repeat: repeat-x;
  background-size: 20px;
}
</style>