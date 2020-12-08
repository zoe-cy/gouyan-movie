<template>
  <div class="details">
    <div>
      <div class="header">
        <span class="iconfont icon-arrow-left" @click="goback"></span>
        <span>{{ obj.name }}</span>
      </div>
      <div class="intro">
        <div class="ins">
          <img src="../assets/logo.png" />
        </div>
        <div class="infos">
          <h2>{{ obj.name }}</h2>
          <div class="mark">
            <span class="star"></span>
            <span class="grade" :style="{ '--swidth': widths }"></span>
          </div>
          <p>{{ ratingNum | rateFormat }}({{ obj.ratingUser }}人评分)</p>
          <p>{{ obj.date | dateFormat }}</p>
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
        <h3>演职人员</h3>
        <div class="msgsrc nullist" v-if="listFlag">
          <div class="tips">暂无资料</div>
        </div>
        <div v-else>
          <div class="msgsrc">
            <div class="listsrc" v-for="item in obj.directorList" :key="item">
              <div class="imgs">
                <img src="../assets/logo.png" />
              </div>
              <div class="names">{{ item.name }} [导演]</div>
            </div>
            <div v-if="actorFlag">
              <div class="listsrc tips">暂无演员资料</div>
            </div>
            <div
              v-else
              class="listsrc"
              v-for="item in obj.actorList"
              :key="item"
            >
              <div class="imgs">
                <img src="../assets/logo.png" />
              </div>
              <div class="names">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cmts">
      <h3>热门短评</h3>
      <div v-if="cmtFlag">
        <div class="tips">这里空空如也</div>
      </div>
      <div v-else>
        <div>
          <div class="shortcom" v-for="item in arr" :key="item">
            <div class="opin">
              <div class="mark">
                <span class="star"></span>
                <span class="grade" :style="{ '--cwidth': widthc }"></span>
              </div>
              <div class="times">{{ item.dateTime | dateFormat }}</div>
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
          <div class="btn" @click="goShort($route.params.id, obj.name)">
            查看全部短评
          </div>
          <hr />
          <div class="btn">查看全部影评</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      obj: {},
      ratingNum: 0,
      widths: "0%",
      arr: [],
      widthc: 0,
      ratingLevel: 1,
      listFlag: true,
      actorFlag: true,
      cmtFlag: true,
    };
  },
  methods: {
    goback() {
      this.$router.push({ name: "searchs" });
    },
    goShort(id, name) {
      this.$router.push({ name: "shortComments", params: { id, name } });
    },
  },
  mounted: function () {
    this.$http
      .post("movieInfo", {
        id: this.$route.params.id,
      })
      .then(
        function (res) {
          this.ratingNum = 0;
          this.listFlag = true;
          this.actorFlag = true;
          if (res.status === 200) {
            this.obj = res.data;
            if (this.obj.ratingNum) {
              this.ratingNum = this.obj.ratingNum;
            }
            this.widths = this.ratingNum * 10 + "%";
            if (this.obj.directorList && this.obj.directorList !== []) {
              this.listFlag = false;
              if (this.obj.actorList && this.obj.actorList !== []) {
                this.actorFlag = false;
              }
            }
          } else {
            console.log(res.status);
          }
        },
        function (res) {
          console.log("failed");
        }
      );
    this.$http
      .post("rtating", {
        ratingLevel: this.ratingLevel,
        movieId: this.$route.params.id,
      })
      .then(
        function (res) {
          this.cmtFlag = true;
          if (res.status === 200) {
            if (res.data && res.data.length !== 0) {
              this.arr = res.data;
              this.cmtFlag = false;
            }
          } else {
            console.log(res.status);
          }
        },
        function (res) {
          console.log(res.status);
        }
      );
  },
  beforeUpdate: function () {},
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
  width: var(--swidth);
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
  text-align: justify;
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
  overflow-x: auto;
  height: 120px;
  align-items: center;
}
.msgsrc .listsrc {
  width: 100px;
  margin-left: 8px;
  text-align: center;
}

.msgsrc .tips {
  margin: auto 28px;
  width: 100px;
}
.actors .nullist {
  height: 30px;
}
.actors .nullist .tips {
  margin-left: 0;
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
.cmts {
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 22px;
  overflow: hidden;
}
.tips {
  font-style: italic;
}
.shortcom .opin {
  margin-top: -5px;
  overflow: hidden;
}
.shortcom .opin .mark {
  float: left;
}
.opin .mark .grade {
  width: var(--widthc);
}
.shortcom .opin .times {
  float: left;
  margin-left: 10px;
  line-height: 34px;
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