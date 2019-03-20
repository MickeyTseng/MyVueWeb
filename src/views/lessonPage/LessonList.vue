<template>
  <div id="LessonList">
    <ul>
      <li>
        <router-link to="/lesson/createProject">
          <h2>建立第一個Vue專案</h2>
        </router-link>
      </li>
    </ul>
    <ul>
      <li>
        <router-link to="/lesson/ComponentTest">
          <h2>組件練習</h2>
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  text-decoration: none;
}
</style>
