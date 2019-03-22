<template>
  <div>
    <H1>Axios</H1>
    <qui-btn text="取得使用者資料" v-on:btnClickEvent="getUserData"></qui-btn>
    <ui
      ><li>{{ userData }}</li></ui
    >
  </div>
</template>

<script>
import quiBtn from "../../components/quiButton2";

export default {
  data() {
    return {
      userData: null
    };
  },
  components: {
    "qui-btn": quiBtn
  },
  methods: {
    getUserData() {
      this.$http.get("https://randomuser.me/api/").then(response => {
        this.userData = response.data.results;
      });
    }
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
  list-style-type: none;
}
</style>
