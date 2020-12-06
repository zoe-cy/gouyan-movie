<template>
  <div class="films">
    <vheader></vheader>
    <spinner v-if="transit"></spinner>
    <div v-else>
      <div v-if="flag">
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
      flag: true,
      arr: [
        {
          name: 1,
          info: 1,
        },
      ],
    };
  },
  components: {
    vheader,
    spinner,
  },
  mounted: function () {
   
  },
};
</script>
<style scoped>
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