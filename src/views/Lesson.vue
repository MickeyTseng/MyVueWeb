<template>
  <div id="text">
    <router-link to="/lesson/lessonList">
      <h1>學習項目</h1>
    </router-link>
    <router-view />
  </div>
</template>

<style scoped>
h1 {
  font-weight: normal;
}
a {
  color: #42b983;
  text-decoration: none;
  font-weight: normal;
}
#text {
  margin-bottom: 10vh;
  padding-right: 5vh;
  padding-bottom: 5vh;
  padding-left: 5vh;
}
</style>
