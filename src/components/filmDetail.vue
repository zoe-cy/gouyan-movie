<template>
  <div class="details">
    <div>
      <div class="header">
        <span class="iconfont icon-arrow-left" @click="goback"></span>
        <span>{{ obj.name}}</span>
      </div>
      <div class="intro">
        <div class="ins">
          <img src="../assets/logo.png" />
        </div>
        <div class="infos">
          <h2>{{ obj.name }}</h2>
          <div class="mark">
            <span class="star"></span>
            <span class="grade"></span>
          </div>
          <p>{{ obj.ratingNum | rateFormat }}({{ obj.ratingUser }}人评分)</p>
          <p>{{ obj.date }}</p>
          <p>{{ obj.type }}</p>
          <p>{{ obj.adress }}</p>
        </div>
      </div>
      <div class="datas">
        <div>{{ obj.think_sen }}人想看</div>
        <div>{{ obj.have_sen }}人看过</div>
      </div>
      <p class="outline">
        {{ obj.info }}
      </p>
      <div class="actors">
        <h3 class="subtitle">演职人员</h3>
        <div class="msgsrc">
          <div class="listsrc" v-for="item in obj.directorList" :key="item">
            <div class="imgs">
              <img src="../assets/logo.png" />
            </div>
            <div class="names">{{ item.name }}&nbsp导演</div>
          </div>
          <div class="listsrc" v-for="item in obj.actorList" :key="item">
            <div class="imgs">
              <img src="../assets/logo.png" />
            </div>
            <div class="names">{{ item.name }}</div>
          </div>
           <div class="listsrc" v-for="item in obj.actorList" :key="item">
            <div class="imgs">
              <img src="../assets/logo.png" />
            </div>
            <div class="names">{{ item.name }}</div>
          </div>
           <div class="listsrc" v-for="item in obj.actorList" :key="item">
            <div class="imgs">
              <img src="../assets/logo.png" />
            </div>
            <div class="names">{{ item.name }}</div>
          </div>
           <div class="listsrc" v-for="item in obj.actorList" :key="item">
            <div class="imgs">
              <img src="../assets/logo.png" />
            </div>
            <div class="names">{{ item.name }}</div>
          </div>
           <div class="listsrc" v-for="item in obj.actorList" :key="item">
            <div class="imgs">
              <img src="../assets/logo.png" />
            </div>
            <div class="names">{{ item.name }}</div>
          </div>
           <div class="listsrc" v-for="item in obj.actorList" :key="item">
            <div class="imgs">
              <img src="../assets/logo.png" />
            </div>
            <div class="names">{{ item.name }}</div>
          </div>
           <div class="listsrc" v-for="item in obj.actorList" :key="item">
            <div class="imgs">
              <img src="../assets/logo.png" />
            </div>
            <div class="names">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="shortcom">
      <h3>热门短评</h3>
      <div class="opin">
        <div class="mark shmark">
          <span class="star"></span>
          <span class="grade"></span>
        </div>
        <span class="times">2019</span>
      </div>
      <p>rrrrrrrrrrrrrrrrrrrr</p>
      <div class="users">
         
        <div class="imgs">
          <img src="../assets/logo.png" />
        </div>
         
        <div class="names">dfg</div>
      </div>
      <hr />
    </div>
    <div class="btn">查看全部短评</div>
    <hr />
    <div class="btn">查看全部影评</div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      obj: {},
      swidth:0
    };
  },
  methods:{
     goback(){
       window.history.go(-1)
     }
  },
  created: function () {
  
  },
  mounted: function () {
    this.$http
        .post("http://192.168.0.103:8888/movieInfo", {
          id: this.$route.params.id,
        })
        .then(
          function (res) {
            if (res.status === 200) {
              this.obj = res.data;
              // this.swidth = (this.obj.ratingNum*100+'%')-
              console.log(this.obj)
            } else {
              console.log(res.status);
            }
          },
          function (res) {
            console.log("failed");
          }
        );
  },
};
</script>
<style scoped>
.details {
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
  width: 86%;
  background: url(../assets/start1.png);
  background-repeat: repeat-x;
  background-size: 20px;
}
.intro .infos p {
  line-height: 30px;
}
.datas {
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.datas div {
  margin-left: 20px;
  margin-right: 20px;
  float: left;
  height: 40px;
  line-height: 40px;
  background-color: var(--gcolor);
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
}
.datas span:first-child {
  margin-right: 10%;
}
.outline {
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 5px;
  margin-bottom: 20px;
}
.actors {
  margin-left: 2%;
  margin-right: 2%;
  overflow: hidden;
}
h3 {
  line-height: 30px;
  margin-bottom: 10px;
}
.actors .msgsrc {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  border: 1px solid #000;
}
.msgsrc .listsrc {
  width: 70px;
  margin-left: 8px;
}
.msgsrc .listsrc .imgs {
  overflow: hidden;
}
.msgsrc .listsrc .names {
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-decoration: ellipsis;
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
.btn {
  height: 30px;
  text-align: center;
  font-size: 20px;
  color: var(--gcolor);
  letter-spacing: 2px;
}
</style>