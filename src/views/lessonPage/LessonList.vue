<template>
  <div>
    <ul>
      <li v-for="lesson in lessonList" :key="lesson.index">
        <router-link :to="lesson.path">
          <h2>{{ lesson.text }}</h2>
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      lessonList: [
        {
          text: "建立第一個Vue專案",
          path: "/lesson/createProject"
        },
        {
          text: "組件練習",
          path: "/lesson/componentTest"
        },
        {
          text: "Axios",
          path: "/lesson/AxiosTest"
        },
        {
          text: "環境變數與專案打包",
          path: "/lesson/EnvironmentalVariable"
        },
        {
          text: "Jenkins自動佈署Vue",
          path: "/lesson/Jenkins"
        }
      ]
    };
  }
};
</script>
<style scoped>
h2 {
  font-weight: normal;
  color: #509e9e;
}
ul {
  padding: 0;
  text-align: left;
}
a {
  color: #42b983;
  text-decoration: none;
  font-weight: normal;
}
</style>
