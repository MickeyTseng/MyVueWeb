import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
import VueHighlightJS from "vue-highlight.js";

// 將需要用到的語言包載入進來
import html from "highlight.js/lib/languages/xml"; //因語言包沒有html以xml代替
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import shell from "highlight.js/lib/languages/shell";
import vue from "vue-highlight.js/lib/languages/vue";

//選擇要使用的程式碼主題
// Find more: https://highlightjs.org/static/demo/

import "@/css/vs2015.css";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  //路由發生變化修改頁面Title
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

//圖片燈箱瀏覽套件
Vue.use(viewer, {
  defaultOptions: {
    zIndex: 9999 //圖片數量上限
  }
});

Vue.use(VueHighlightJS, {
  // 填入需要的語言類型
  languages: {
    html,
    css,
    javascript,
    vue,
    shell
  }
});
