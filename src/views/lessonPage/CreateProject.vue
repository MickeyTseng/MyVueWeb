<template>
  <div>
    <viewer>
      <h1>建立第一個Vue專案</h1>
      <h2>搭建環境</h2>
      <ul>
        <li>
          請先安裝
          <a :href="NodeJsUrl" target="_blank"> Node.js </a
          >（建議下載最多人使用版本）
        </li>
        <li>
          打開終端機輸入命令安裝
          <a :href="vueCliUrl" target="_blank">
            Vue CLI
          </a>
        </li>
        <highlight-code lang="shell">
          npm install -g @vue/cli
        </highlight-code>
      </ul>
      <h2>建立專案</h2>
      <ul>
        <li>在終端機輸入命令</li>
        <highlight-code lang="vue">
          vue ui
        </highlight-code>
        <li>
          此時<a :href="vueCliUrl"> Vue CLI </a>將會在瀏覽器開啟Vue項目管理器
        </li>
        <img :src="createProject_01" class="Screenshot" />
        <li>點選創建並選擇要建立專案的資料夾</li>
        <img :src="createProject_02" class="Screenshot" />
        <li>接著就是設定一些專案的基本資訊</li>
        <li><img :src="createProject_03" class="Screenshot" /></li>
        <li><img :src="createProject_04" class="Screenshot" /></li>
        <li>完成後等待專案建立</li>
        <li><img :src="createProject_05" class="Screenshot" /></li>
        <li>專案管理介面</li>
        <li><img :src="createProject_06" class="Screenshot" /></li>
        <li>也可以在@vue/cli-ui選擇多個項目</li>
        <li><img :src="createProject_07" class="Screenshot" /></li>
      </ul>
      <h2>運行專案</h2>
      <ul>
        <li>在Vue cli service serve 頁面中 點擊運行</li>
        <li>Service起成功後即可啟動app</li>
        <li><img :src="createProject_08" class="Screenshot" /></li>
        <li><img :src="createProject_09" class="Screenshot" /></li>
      </ul>
    </viewer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      NodeJsUrl: "https://nodejs.org/en/",
      vueCliUrl:
        "https://cli.vuejs.org/zh/guide/#%E8%AF%A5%E7%B3%BB%E7%BB%9F%E7%9A%84%E7%BB%84%E4%BB%B6",
      createProject_01: require("@/img/lesson/createProject/createProject_01.png"),
      createProject_02: require("@/img/lesson/createProject/createProject_02.png"),
      createProject_03: require("@/img/lesson/createProject/createProject_03.png"),
      createProject_04: require("@/img/lesson/createProject/createProject_04.png"),
      createProject_05: require("@/img/lesson/createProject/createProject_05.png"),
      createProject_06: require("@/img/lesson/createProject/createProject_06.png"),
      createProject_07: require("@/img/lesson/createProject/createProject_07.png"),
      createProject_08: require("@/img/lesson/createProject/createProject_08.png"),
      createProject_09: require("@/img/lesson/createProject/createProject_09.png")
    };
  }
};
</script>

<style scoped>
h1 {
  font-weight: normal;
  text-align: left;
  color: #509e9e;
}
h2 {
  font-weight: normal;
  text-align: left;
}
ul {
  list-style-type: none;
  text-align: left;
}
a {
  color: #2894ff;
  text-decoration: none;
}
.icon {
  width: 2vh;
  height: 2vh;
}
.Screenshot {
  width: 64.3vh;
  height: 36vh;
}
</style>
