<template>
  <div>
    <h1>參考網頁</h1>
    <h2>官方網站：</h2>
    <ul>
      <li>
        <img :src="vueIcon" />
        <a :href="vueWebUrl" target="_blank">
          Vue.js
        </a>
      </li>
    </ul>
    <h2>部落格：</h2>
    <ul>
      <li>
        包學會之淺入淺出Vue.js：
        <a
          href="https://cloud.tencent.com/developer/article/1020337"
          target="_blank"
        >
          開學篇
        </a>
        <a
          href="https://cloud.tencent.com/developer/article/1020338"
          target="_blank"
        >
          升學篇
        </a>
        <a
          href="https://cloud.tencent.com/developer/article/1020416"
          target="_blank"
        >
          結業篇
        </a>
      </li>
      <li>
        <a
          href="https://ithelp.ithome.com.tw/users/20103396/ironman/1030"
          target="_blank"
        >
          30天學會Vue.js 系列
        </a>
      </li>
      <li>
        <a
          href="https://blog.csdn.net/qq_24147051/article/details/76997838"
          target="_blank"
        >
          使用vue-router設置每個頁面的title
        </a>
      </li>
      <h2>插件使用教學：</h2>
      <li>
        <a href="https://www.jianshu.com/p/5df4ea081fcc" target="_blank">
          VSCode配合ESLint自動修復格式化
        </a>
      </li>
      <li>
        <a href="https://www.jianshu.com/p/b5febde4b823" target="_blank">
          配置eslint提升代碼質量
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vueIcon: require("@/assets/icon/Vue_icon.png"),
      vueWebUrl: "https://cn.vuejs.org/"
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
