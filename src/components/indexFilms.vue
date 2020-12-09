<template>
  <div class="films">
    <vheader></vheader>
    <div class="nav">
      <div @click="checkList(1)">正在热映</div>
      <div @click="checkList(2)">即将上映</div>
    </div>
    <spinner v-if="transit"></spinner>
    <div v-else>
      <div
        class="intro"
        v-for="item in arr"
        :key="item.id"
        @click="gohead(item.id)"
      >
        <div class="box">
          <div class="ins">
            <img src="../assets/logo.png" />
          </div>
          <div class="infos">
            <h2>{{ item.name }}</h2>
            <p>{{ item.info }}</p>
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
import Spinner from "./spinner/spinner.vue";
export default {
  data: function () {
    return {
      transit: true,
      arr: [],
    };
  },
  methods: {
    checkList(val) {
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
    gohead(id) {
      this.$router.push({ name: "filmDetail", params: { id } });
    },
  },
  components: {
    vheader,
    spinner,
  },
  mounted: function () {
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
.intro {
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 10px;
  overflow: hidden;
}
.intro .box {
  overflow: hidden;
}
.intro .ins {
  float: left;
  margin-right: 10px;
}
.infos p {
  height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>