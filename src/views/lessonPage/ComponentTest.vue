<template>
  <div>
    <h1>組件練習</h1>
    <ul>
      <h2>建立一個按鈕</h2>
      <li>一般將需要使用的到組件都放於components內</li>
      <img src="../../img/lesson/componentTest/componentTest_01.png" />
      <li>以quiButton.vue為範例</li>
      <li>class="qui-btn" 表示之後在調用建立這個按鈕時所需的標籤名</li>
      <li>當按鈕組件被初始化的時候，text自定義屬性會被綁定到span標籤中</li>
      <img src="../../img/lesson/componentTest/componentTest_02.png" />
    </ul>
    <ul>
      <h2>如何調用?</h2>
      <li>首先我們必須在頁面中import組件</li>
      <img src="../../img/lesson/componentTest/componentTest_03.png" />
      <li>之後只要在頁面上使用註冊的自定義標籤就可以得到一個</li>
      <qui-btn1></qui-btn1>
      <li>透過覆寫text的值改變顯示的文字</li>
      <li>
        <img src="../../img/lesson/componentTest/componentTest_04.png" />
      </li>
      <qui-btn1 text="打什麼就顯示什麼"></qui-btn1>
      <h2>按鈕事件</h2>
      <li>先在按鈕組件設定預設事件</li>
      <img src="../../img/lesson/componentTest/componentTest_05.png" />
      <li>之後在建立一個按鈕時就會預設自帶一個彈出的事件</li>
      <qui-btn1></qui-btn1>
      <li>同樣的可以透過覆寫來客製出需要的按鈕以及文字</li>
      <li><img src="../../img/lesson/componentTest/componentTest_06.png" /></li>
      <qui-btn1 text="我可以彈出別的字" msg="msg=什麼我就彈出什麼"></qui-btn1>
      <li>也可以在頁面創建一個自定義的方法來讓按鈕進行綁定</li>
      <li>
        此時若需要觸發父組件的自定義事件則須寫上<font class="highlight"
          >this.$emit ('方法名稱')</font
        >
      </li>
      <img src="../../img/lesson/componentTest/componentTest_07.png" />
      <qui-btn2 text="父組件自定義方法1" v-on:btnClickEvent="doSth1"></qui-btn2>
      <qui-btn2 text="父組件自定義方法2" v-on:btnClickEvent="doSth2"></qui-btn2>
      <li>也可以給按鈕加圖標</li>
      <qui-btn2 text="我有圖標">
        <img
          slot="icon"
          class="ico"
          src="http://qzonestyle.gtimg.cn/aoi/sola/20170214175951_TA6qW1X7ob.png"
        />
      </qui-btn2>
    </ul>
  </div>
</template>

<script>
import quiBtn1 from "../../components/quiButton1";
import quiBtn2 from "../../components/quiButton2";

export default {
  components: {
    "qui-btn1": quiBtn1,
    "qui-btn2": quiBtn2
  },
  methods: {
    doSth1: function() {
      alert("自定義方法1");
    },
    doSth2: function() {
      alert("自定義方法2");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  line-height: 4vh;
}
.highlight {
  color: red;
  font-weight: bold;
}
.ico {
  display: inline-block;
  background-size: 100% 100%;
  position: relative;
  margin-right: 3px;
  width: 20px;
  height: 20px;
  vertical-align: -4px;
}
</style>
