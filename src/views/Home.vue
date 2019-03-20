<template>
  <div class="home">
    <h1>這是一個從"0"開始學習Vue的過程</h1>
    <ul>
      <li>
        <router-link to="/softwareList">
          <h2>軟體清單</h2>
        </router-link>
      </li>
    </ul>
    <ul>
      <li>
        <router-link to="/lesson/lessonList">
          <h2>學習項目</h2>
        </router-link>
      </li>
    </ul>
    <ul>
      <li>
        <router-link to="/referenceMaterial">
          <h2>參考網頁</h2>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: normal;
  font-size: 4vh;
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0.1vh;
}
a {
  text-decoration: none;
  color: #2894ff;
}
</style>
