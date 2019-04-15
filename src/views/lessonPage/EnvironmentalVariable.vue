<template>
  <div>
    <viewer>
      <h1>環境變數與專案打包</h1>
      <h2>環境變數設置</h2>
      <ul>
        <h3>Modes</h3>
        <li>Vue CLI 內建 3 種 mode：</li>
        <li>development、test、production</li>
        <li>可於Vue ui 介面的"變量"選項內做選擇</li>
        <img :src="environmentalBuild_01" class="screenShot" />
        <li>若要使用自定義模式時(預設之外)則選擇(unset)</li>
        <img :src="environmentalBuild_02" class="screenShot" />
        <h3>建立.env檔案</h3>
        <li>.env：所有 mode 都會載入</li>
        <li>.env.local：所有 mode 都會載入，不會進 Git</li>
        <li>.env.[mode]：特定 mode 會載入</li>
        <li>.env.[mode].local：特定 mode 會載入，不會進 Git</li>
        <h3>優先級</h3>
        <li>若 key 同時存在 ".env"、".env.[mode]" 與 "env.[mode].local" 時</li>
        <li>則其載入順序為：</li>
        <li>.env → env.[mode] → env.[mode].local</li>
        <li>也就是其優先權為：</li>
        <li>env.[mode].local > env.[mode] > .env</li>
        <h3>調用參數</h3>
        <li>.env.development</li>
        <!-- eslint-disable   -->
        <highlight-code lang="xml">
          NODE_ENV=development
          VUE_APP_MODE='開發模式'
        </highlight-code>
        <!-- eslint-enable -->
        <li>NODE_ENV：指定使用 Vue CLI 內建的 3 個 mode 之一</li>
        <li>VUE_APP_API：所有變數以 VUE_APP_ 為開頭</li>
        <li>
          設定的變數可使用 process.env.VUE_APP_xxx 讀取。
        </li>
        <!-- eslint-disable   -->
        <highlight-code lang="javascript">
          export default {
            data() {
              return {
                appMode: process.env.VUE_APP_MODE
              };
            }
          }
        </highlight-code>
        <!-- eslint-enable -->
      </ul>
      <h2>專案打包</h2>
      <ul>
        <li>若需要將專案打包生成dist時</li>
        <li>請先於src同級目錄新增vue.config.js設定檔案</li>
        <li>以下為vue.config.js的基本配置</li>
        <li>
          <!-- eslint-disable   -->
          <highlight-code lang="javascript">
            module.exports = {
              publicPath: "./",
              devServer: {
              port: 9000,
              open: true,
              https: false
               }
            };
          </highlight-code>
          <!-- eslint-enable -->
        </li>
        <li>接著可於Vue ui介面進行打包</li>
        <img :src="environmentalBuild_03" class="screenShot" />
        <li>也可以直接於終端機下指令</li>
        <!-- eslint-disable   -->
        <highlight-code lang="shell">
         npm run build --[mode]
        </highlight-code>
        <!-- eslint-enable -->
      </ul>
    </viewer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      environmentalBuild_01: require("@/assets/lesson/environmentalBuild/environmentalBuild_01.png"),
      environmentalBuild_02: require("@/assets/lesson/environmentalBuild/environmentalBuild_02.png"),
      environmentalBuild_03: require("@/assets/lesson/environmentalBuild/environmentalBuild_03.png"),
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
  margin: 1vh;
}
.screenShot {
  width: 64.3vh;
  height: 28vh;
}
</style>
