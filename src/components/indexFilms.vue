<template>
  <div class="films">
    <vheader></vheader>
    <div class="nav">
      <div @click="checkList(1)">正在热映</div>
      <div @click="checkList(2)">即将上映</div>
    </div>
    <spinner v-if="transit"></spinner>
    <div v-else>
      <h2 class="subtitle">"{{ name }}"的搜索结果 共有{{ 5 }}条信息</h2>
      <div
        class="filmList"
        v-for="item in arr"
        :key="item"
        @click="goFilms(item.filmId)"
      >
        <div class="box">
          <div class="ins">
            <img src="../assets/logo.png" />
          </div>
          <div class="infos">
            <h2>{{ item.filmName }}</h2>
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
            <p>{{ item.date | dateFormat }}</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>
<script>
import vheader from "./header/header";
import spinner from "./spinner/spinner";
export default {
  data: function () {
    return {
      name: $route.params.ipt,
      transit: false,
      arr: [
        {
          filmId: 1,
          filmName: "1",
          date: "1999/1",
          ratingNum: 9.3,
          ratingUser: 999,
        },
      ],
    };
  },
  methods: {
    checkList(val) {
      this.$http.get("search", { params: { name: this.name } }).then(
        function (res) {
          this.transit = true;
          if (res.status === 200) {
            this.arr = res.data;
            this.transit = false;
          } else {
            console.log(res.status);
          }
        },
        function () {
          console.log("failed");
        }
      );
    },
    goFilms(id) {
      this.$router.push({ name: "filmDetail", params: { id } });
    },
    run() {
      this.$http.get("search", { params: { name: $route.params.ipt } }).then(
        function (res) {
          this.transit = true;
          if (res.status === 200) {
            this.arr = res.data;
            this.transit = false;
          } else {
            console.log(res.status);
          }
        },
        function () {
          console.log("failed");
        }
      );
    },
  },
  components: {
    vheader,
    spinner,
  },
  mounted: function () {},
};
</script>
<style scoped>
.nav {
  width: 100%;
  line-height: 50px;
  background-color: var(--gcolor);
  display: flex;
}
.nav div {
  flex: 1;
  text-align: center;
  color: white;
  letter-spacing: 4px;
  font-size: 22px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.subtitle {
  text-align: center;
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