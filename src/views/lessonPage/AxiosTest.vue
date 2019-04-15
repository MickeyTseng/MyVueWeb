<template>
  <div>
    <h1>Axios</h1>
    <div id="text">
      <ul>
        <h2>介紹</h2>
        <li>
          Axios 是一個基於 Promise 的 HTTP 客戶端
        </li>
        <li>
          專門為瀏覽器和 node.js 服務 Vue 2.0 官方推薦使用 axios 來代替原來的
          Vue request
        </li>
      </ul>
      <ul>
        <h2>功能</h2>
        <li>
          1.在瀏覽器中傳送 XMLHttpRequests 請求 在 node.js 中傳送 http 請求
        </li>
        <li>2.支援 Promise API</li>
        <li>3.攔截請求和響應</li>
        <li>4.轉換請求</li>
        <li>5.和響應資料</li>
        <li>6.取消請求</li>
        <li>7.自動轉換 JSON 資料格式</li>
        <li>8.客戶端支援防範 XSRF 攻擊</li>
      </ul>
      <ul>
        <h2>安裝</h2>
        <li>開啟終端機輸入</li>
        <highlight-code lang="shell">
          npm install axios
        </highlight-code>
        <li>安裝 axios 之後，需要在 main.js 檔案中引用 package</li>
        <highlight-code lang="javascript">
          <!-- eslint-disable   -->
          import axios from "axios"; //載入 axios
          import vueAxios from "vue-axios"; //載入 vue-axios
          <!-- eslint-enable -->
        </highlight-code>
      </ul>
      <ul>
        <h2>使用</h2>
        <li>完成之後便可以在需要用到的vue檔案中使用，使用axios</li>
        <li>以GET來說可以這麼寫</li>
        <highlight-code lang="javascript">
          <!-- eslint-disable   -->
          this.axios.get('/user?ID=12345')
          .then(response=>{
          console.log(response);
          })
          .catch(function (error) {
          console.log(error);
          });
          <!-- eslint-enable -->
        </highlight-code>
        <li>或者是</li>
        <highlight-code lang="javascript">
          <!-- eslint-disable   -->
          this.axios.get('/user', {
          params: {
          ID: 12345
          }
          })
          .then(response=>{
          console.log(response);
          })
          .catch(function (error) {
          console.log(error);
          });
          <!-- eslint-enable -->
        </highlight-code>
        <li>POST請求</li>
        <highlight-code lang="javascript">
          <!-- eslint-disable   -->
          this.axios.post('/user', {
          firstName: 'Fred',
          lastName: 'Flintstone'
          })
          .then(response=>{
          console.log(response);
          })
          .catch(function (error) {
          console.log(error);
          });
          <!-- eslint-enable -->
        </highlight-code>
        <li>執行多個發送請求</li>
        <li>
          <highlight-code lang="javascript">
            <!-- eslint-disable   -->
            function getUserAccount() {
            return this.axios.get('/user/12345');
            }
            function getUserPermissions() {
            return this.axios.get('/user/12345/permissions');
            }
            this.axios.all([getUserAccount(), getUserPermissions()])
            .then(axios.spread(function (acct, perms) {
            }));
            <!-- eslint-enable -->
          </highlight-code>
        </li>
      </ul>
      <ul>
        <h2>實例</h2>
      </ul>
    </div>
    <div id="sidebar_left"></div>
    <div id="sidebar_right"></div>
    <div id="content">
      <btn
        text="取得使用者資料"
        v-on:btnClickEvent="getUserData"
        style="margin-bottom: 4vh;"
      ></btn>
      <img
        :src="userData.picture"
        class="circular--squareP"
        style="display:block; margin:auto;"
      />
      <div v-show="showDetail">
        <h6>Hi, My name is</h6>
        <h3>{{ userData.name }}</h3>
        <h6>My email address is</h6>
        <h3>{{ userData.email }}</h3>
        <h6>My birthday is</h6>
        <h3>{{ userData.dob }}</h3>
        <h6>My address is</h6>
        <h3>{{ userData.add }}</h3>
        <h6>My phone number is</h6>
        <h3>{{ userData.phone }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../components/myButton";
export default {
  data() {
    return {
      showDetail: false,
      userData: {
        gender: null,
        name: null,
        add: null,
        email: null,
        dob: null,
        phone: null,
        picture: require("@/assets/lesson/axiosTest/axiosTest_01.jpg")
      }
    };
  },
  components: {
    btn: Button
  },
  methods: {
    getUserData() {
      this.axios
        .get("https://randomuser.me/api/")
        .then(response => {
          this.dataMerge(response);
          this.showDetail = true;
        })
        .catch(function(error) {
          alert(error.toString());
        });
    },
    dataMerge(response) {
      var OriginalData = response.data.results[0];
      this.userData.name =
        OriginalData.name.first + " " + OriginalData.name.last;
      this.userData.email = OriginalData.email;
      this.userData.dob = OriginalData.dob.date.substring(0, 10);
      this.userData.add =
        OriginalData.location.city + " " + OriginalData.location.street;
      this.userData.phone = OriginalData.phone;
      this.userData.picture = OriginalData.picture.large;
    }
  }
};
</script>

<style scoped>
#content {
  color: #2c3e50;
  margin-top: 1vh;
  margin-bottom: 5vh;
  background-color: #cddbe93b;
  border-width: 1px;
  border-color: rgb(177, 226, 206);
  border-style: solid;
  font-size: 2.5vh;
  padding-top: 2vh;
}
h1 {
  font-weight: normal;
  text-align: left;
  color: #509e9e;
}
h2 {
  text-align: left;
}
h3 {
  text-transform: capitalize;
  margin-bottom: 0.5vh;
  margin-top: 1vh;
  color: #00bcd4ed;
}
h6 {
  margin-bottom: 0.5vh;
  margin-top: 1vh;
  color: #d69d85e6;
}
ul {
  list-style-type: none;
  text-align: left;
}
li {
  list-style: none;
}
.circular--squareP {
  border-radius: 50%;
  height: 30vh;
  width: 30vh;
}
</style>
