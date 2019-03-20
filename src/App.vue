<template>
  <div id="app">
    <div id="header">
      <router-link to="/">
        <img src="@/img/icon/Vue_icon.png" style="height: 30vh; width: 30vh;" />
      </router-link>
    </div>
    <div id="sidebar_left"></div>
    <div id="sidebar_right"></div>
    <div id="content">
      <router-view />
    </div>
    <div id="footer"></div>
  </div>
</template>

<style>
#header {
  text-align: center;
}
#app {
  width: 70%;
  margin: 0 auto;
}
#sidebar_left {
  width: 15%;
  text-align: center;
  float: left;
}
#sidebar_right {
  width: 15%;
  text-align: center;
  float: right;
}
#content {
  font-family: Avenir, "微軟正黑體", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  margin-top: 5vh;
  margin-bottom: 10vh;
  background-color: #cddbe93b;
  border-width: 1px;
  border-color: rgb(177, 226, 206);
  border-style: solid;
  font-size: 2vh;
  padding: 5vh;
}
#footer {
  clear: both;
  text-align: center;
  line-height: 200px;
}
li {
  text-align: left;
  line-height: 4vh;
}
</style>
