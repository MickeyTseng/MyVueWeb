<template>
  <div>
    <h1>軟體清單</h1>
    <h2>必要類 :</h2>
    <ul v-for="necessary in necessaryList" :key="necessary.index">
      <li>
        <img :src="necessary.logo" />&nbsp;
        <a :href="necessary.path" target="_blank">
          {{ necessary.text }}
        </a>
      </li>
    </ul>
    <h2>插件類 :</h2>
    <ul v-for="plugin in pluginList" :key="plugin.index">
      <li>
        <img :src="plugin.logo" />&nbsp;{{ plugin.text }} :
        {{ plugin.depiction }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      necessaryList: [
        {
          logo: require("@/img/icon/Visual_Studio _Code_icon.png"),
          text: "Visual Studio Code",
          path: "https://code.visualstudio.com/Download"
        },
        {
          logo: require("@/img/icon/Node.js_icon.png"),
          text: "Node.js",
          path: "https://nodejs.org/en/"
        }
      ],
      pluginList: [
        {
          logo: require("@/img/icon/Visual_Studio _Code_icon.png"),
          text: "ESLint",
          depiction: "VSCode代碼中提示錯誤。"
        },
        {
          logo: require("@/img/icon/Visual_Studio _Code_icon.png"),
          text: "Vuetur",
          depiction: "Vue開發的神器，格式化、代碼段等。"
        },
        {
          logo: require("@/img/icon/Visual_Studio _Code_icon.png"),
          text: "Prettier",
          depiction: "Code formatter，代碼格式化插件，可以自定義格式化的配置。"
        },
        {
          logo: require("@/img/icon/Visual_Studio _Code_icon.png"),
          text: "Auto Close Tag",
          depiction: "在打開標簽並且鍵入 </ 的時候，能自動補全要閉合的標簽。"
        },
        {
          logo: require("@/img/icon/Visual_Studio _Code_icon.png"),
          text: "Auto Rename Tag",
          depiction: "在修改開始（結束）標籤的時候修改對應的標籤。"
        },
        {
          logo: require("@/img/icon/Visual_Studio _Code_icon.png"),
          text: "IntelliSense for CSS class names ",
          depiction: "CSS 類名補全。"
        },
        {
          logo: require("@/img/icon/Google_Chrome_icon.png"),
          text: "Vue.js devtools",
          path:
            "https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd",
          depiction: "Chrome開發vue的套件，可以檢查組件的資料及事件與資料變化。"
        }
      ]
    };
  }
};
</script>

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
