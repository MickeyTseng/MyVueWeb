<template>
  <div class="home">
    <h1>這是一個從"0"開始學習Vue的過程</h1>
    <ul v-for="item in itemList" :key="item.index">
      <li>
        <router-link :to="item.path">
          <h2>{{ item.text }}</h2>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: [
        {
          text: "軟體清單",
          path: "/softwareList"
        },
        {
          text: "學習項目",
          path: "/lesson/lessonList"
        },
        {
          text: "參考網頁",
          path: "/referenceMaterial"
        }
      ]
    };
  }
};
</script>

<style scoped>
h2 {
  font-weight: normal;
  font-size: 4vh;
  color: #42b983;
}
ul {
  padding: 0;
}
li {
  display: inline-block;
}
a {
  text-decoration: none;
  color: #2894ff;
}
</style>
