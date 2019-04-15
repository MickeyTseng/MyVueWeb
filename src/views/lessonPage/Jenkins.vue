<template>
  <div>
    <viewer>
      <h1>Jenkins自動佈署Vue</h1>
      <h2>安裝 NodeJS Plugin</h2>
      <ul>
        <h3>在主選單選擇”管理 Jenkins”</h3>
        <img :src="Jenkins_01" />
        <h3>進入後選擇”管理外掛程式”</h3>
        <img :src="Jenkins_02" class="screenShot" />
        <h3>在子標籤”可用的”選取”NodeJS Plugin” 並安裝</h3>
        <img :src="Jenkins_03" class="screenShot" />
      </ul>
      <h2>設定可用 Node.JS 版本</h2>
      <ul>
        <h3>進入 Global Tool Configuration</h3>
        <img :src="Jenkins_04" class="screenShot" />
        <h3>點擊”NodeJS 安裝…”</h3>
        <img :src="Jenkins_05" class="screenShot" />
        <h3>設定所需 Node.js 版本</h3>
        <img :src="Jenkins_06" class="screen" />
      </ul>
      <h2>新增 Jenkins 作業</h2>
      <ul>
        <h3>新增作業</h3>
        <img :src="Jenkins_07" />
        <h3>相關參考配置</h3>
        <li><img :src="Jenkins_08" class="screen" /></li>
        <li><img :src="Jenkins_09" class="webScreen" /></li>
      </ul>
    </viewer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Jenkins_01: require("@/assets/lesson/jenkins/Jenkins_01.png"),
      Jenkins_02: require("@/assets/lesson/jenkins/Jenkins_02.png"),
      Jenkins_03: require("@/assets/lesson/jenkins/Jenkins_03.png"),
      Jenkins_04: require("@/assets/lesson/jenkins/Jenkins_04.png"),
      Jenkins_05: require("@/assets/lesson/jenkins/Jenkins_05.png"),
      Jenkins_06: require("@/assets/lesson/jenkins/Jenkins_06.png"),
      Jenkins_07: require("@/assets/lesson/jenkins/Jenkins_07.png"),
      Jenkins_08: require("@/assets/lesson/jenkins/Jenkins_08.png"),
      Jenkins_09: require("@/assets/lesson/jenkins/Jenkins_09.png"),
      appMode: process.env.VUE_APP_MODE
    };
  },
  components: {},
  methods: {}
};
</script>

<style scoped>
#content {
  color: #2c3e50;
  margin-top: 1vh;
  margin-bottom: 5vh;
  background-color: #cddbe93b;
  border-width: 1px;
  border-color: rgb(177, 226, 206);
  border-style: solid;
  font-size: 2.5vh;
  padding-top: 2vh;
}
h1 {
  font-weight: normal;
  text-align: left;
  color: #509e9e;
}
h2 {
  text-align: left;
}
h3 {
  text-align: left;
  color: #00bcd4ed;
}
ul {
  list-style-type: none;
  text-align: left;
}
li {
  list-style: none;
  margin: 4px;
}
.screen {
  width: 64.3vh;
  height: 70vh;
}
.screenShot {
  width: 64.3vh;
  height: 10.5vh;
}
.webScreen {
  width: 64.3vh;
  height: 142vh;
}
</style>
