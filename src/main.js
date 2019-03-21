import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import viewer from "v-viewer";
import "viewerjs/dist/viewer.css";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  //路由發生變化修改頁面title
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
