<template>
  <div>
    <h1>Axios</h1>
    <div id="header">
      <qui-btn text="取得使用者資料" v-on:btnClickEvent="getUserData"></qui-btn>
    </div>
    <div id="sidebar_left"></div>
    <div id="sidebar_right"></div>
    <div id="content">
      <li>
        <img
          :src="userData.picture"
          class="circular--squareP"
          style="display:block; margin:auto;"
        />
      </li>
      <div v-show="showDetail" style="text-transform: capitalize">
        <h2 style="text-align:center">{{ userData.name }}</h2>
        <li>Email : {{ userData.email }}</li>
        <li>Bod : {{ userData.dob }}</li>
        <li>Add : {{ userData.add }}</li>
        <li>Phone : {{ userData.phone }}</li>
      </div>
    </div>
  </div>
</template>

<script>
import quiBtn from "../../components/quiButton2";
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
        picture: require("@/img/lesson/axiosTest/axiosTest_01.jpg")
      }
    };
  },
  components: {
    "qui-btn": quiBtn
  },
  methods: {
    getUserData() {
      this.$http
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
        OriginalData.name.title +
        " " +
        OriginalData.name.first +
        " " +
        OriginalData.name.last;
      this.userData.email = OriginalData.email;
      this.userData.dob = OriginalData.dob.date;
      this.userData.add =
        OriginalData.location.city + " " + OriginalData.location.street;
      this.userData.phone = OriginalData.phone;
      this.userData.picture = OriginalData.picture.large;
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
.circular--squareP {
  border-radius: 50%;
  height: 30vh;
  width: 30vh;
}
</style>
