<template>
  <div>
    <h1>軟體清單</h1>
    <h2>必要類 :</h2>
    <ul>
      <li>
        <img :src="vsCodeIcon" />
        <a href="https://code.visualstudio.com/Download" target="_blank">
          Visual Studio Code
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <img :src="nodeJsIcon" />
        <a href="https://nodejs.org/en/" target="_blank">
          Node.js
        </a>
      </li>
    </ul>
    <h2>插件類 :</h2>
    <ul>
      <li><img :src="vsCodeIcon" /> ESLint{{ esList }}</li>
      <li><img :src="vsCodeIcon" /> Vuetur{{ vuetur }}</li>
      <li><img :src="vsCodeIcon" /> Prettier{{ prettier }}</li>
      <li><img :src="vsCodeIcon" /> Auto Close Tag{{ autoCloseTag }}</li>
      <li><img :src="vsCodeIcon" /> Auto Rename Tag{{ autoRenameTag }}</li>
      <li>
        <img :src="vsCodeIcon" /> IntelliSense for CSS class names
        {{ intelliSenseforCSS }}
      </li>
      <li>
        <img :src="chromeIcon" /><a
          href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd"
          target="_blank"
        >
          Vue.js devtools
        </a>
        {{ vueJsdevTools }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vsCodeIcon: require("@/img/icon/Visual_Studio _Code_icon.png"),
      chromeIcon: require("@/img/icon/Google_Chrome_icon.png"),
      nodeJsIcon: require("@/img/icon/Node.js_icon.png"),
      esList: "：VSCode代碼中提示錯誤。",
      vuetur: "：Vue開發的神器，格式化、代碼段等。",
      prettier: "：Code formatter，代碼格式化插件，可以自定義格式化的配置。",
      autoCloseTag: "：在打開標簽並且鍵入 </ 的時候，能自動補全要閉合的標簽。",
      autoRenameTag: "：在修改開始（結束）標籤的時候修改對應的標籤。",
      vueJsdevTools:
        "：Chrome開發vue的套件，可以檢查組件的資料及事件與資料變化。",
      intelliSenseforCSS: "：CSS 类名补全。"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  color: #42b983;
}
h2 {
  font-weight: normal;
  text-align: left;
  color: #509e9e;
}
ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
}
a {
  color: #2894ff;
  text-decoration: none;
}
img {
  width: 2vh;
  height: 2vh;
}
</style>
