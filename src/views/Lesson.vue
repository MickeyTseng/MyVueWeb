<template>
  <div class="Text">
    <router-link to="/lesson/lessonList">
      <h1>學習項目</h1>
    </router-link>
    <router-view />
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
a {
  color: #42b983;
  text-decoration: none;
  font-weight: normal;
}
</style>
