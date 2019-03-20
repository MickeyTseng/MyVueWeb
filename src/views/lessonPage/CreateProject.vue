<template>
  <div>
    <h1>建立第一個Vue專案</h1>
    <h2>搭建環境</h2>
    <ul>
      <li>
        請先安裝
        <img :src="nodeJsIcon" />
        <a href="https://nodejs.org/en/" target="_blank"> Node.js </a
        >（建議下載最多人使用版本）
      </li>
      <li>
        打開終端機輸入命令下載
        <a
          href="https://cli.vuejs.org/zh/guide/#%E8%AF%A5%E7%B3%BB%E7%BB%9F%E7%9A%84%E7%BB%84%E4%BB%B6"
          target="_blank"
        >
          Vue CLI
        </a>
      </li>
      <h3>npm install -g @vue/cli</h3>
      <li>完成之後輸入</li>
      <h3>vue ui</h3>
      <li>
        此時<a
          href="https://cli.vuejs.org/zh/guide/#%E8%AF%A5%E7%B3%BB%E7%BB%9F%E7%9A%84%E7%BB%84%E4%BB%B6"
          target="_blank"
        >
          Vue CLI </a
        >將會在瀏覽器開啟Vue項目管理器
      </li>
      <h3>npm install</h3>
      <li>這將會安裝專案所需要的依賴</li>
      <li>之後每一次需要將專案跑起來之需要執行</li>
      <h3>npm run dev</h3>
      <li>專案網址預設為http://localhost:8080</li>
    </ul>
  </div>
</template>

<script>
import nodeJsIconimgUrl from "../../img/icon/Node.js_icon.png";
export default {
  name: "Des",
  data() {
    return {
      nodeJsIcon: nodeJsIconimgUrl
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
li {
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
