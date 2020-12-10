<template>
  <div class="search">
    <div class="header">
      <input type="text" @keyup.enter="searching" v-model="ipt" />
      <span @click="goback">取消</span>
    </div>
    <p>热门搜索</p>
    <div class="nav">
      <span v-for="item in arr" :key="item.id">{{ item.name }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      ipt: "",
      id: "",
      arr: [],
      flag: true,
    };
  },
  methods: {
    searching() {
       this.$router.push({name:"indexFilms",params:{name:this.ipt}})
    },
    goback() {
      window.history.go(-1);
    },
  },
  mounted:function(){
      this.$http
        .get('search')
        .then(
          function (res) {
            if (res.status === 200) {
              this.arr = res.data;
              this.flag = false;
            } else {
              console.log(res.status);
            }
          },
          function (res) {
            console.log("failed", res.status);
          }
        );
    
  }
};
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
  flex: 1;
  border-radius: 30px;
  border: 0;
  box-shadow: 0 0 2px 2px rgba(218, 215, 215, 0.4) inset;
  height: 40px;
  margin: auto 0;
  font-size: 16px;
  color: var(--font-color);
}
.header span {
  margin-left: 2%;
  font-size: 18px;
  color: var(--sub-color);
}

p {
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