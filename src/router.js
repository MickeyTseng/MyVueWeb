import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SoftwareList from "./views/SoftwareList.vue";
import Lesson from "./views/Lesson.vue";
import ReferenceMaterial from "./views/ReferenceMaterial.vue";
import CreateProject from "./views/lessonPage/CreateProject.vue";
import LessonList from "./views/lessonPage/LessonList.vue";
import ComponentTest from "./views/lessonPage/ComponentTest.vue";
import AxiosTest from "./views/lessonPage/AxiosTest.vue";
import EnvironmentalVariable from "./views/lessonPage/EnvironmentalVariable.vue";
import Jenkins from "./views/lessonPage/Jenkins.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: '這是一個從"0"開始學習Vue的過程'
      }
    },
    {
      path: "/softwareList",
      name: "softwareList",
      component: SoftwareList,
      meta: {
        title: "軟體清單"
      }
    },
    {
      path: "/lesson",
      name: "lesson",
      component: Lesson,
      children: [
        {
          path: "lessonList",
          component: LessonList,
          meta: {
            title: "學習項目"
          }
        },
        {
          path: "createProject",
          component: CreateProject,
          meta: {
            title: "建立第一個Vue專案"
          }
        },
        {
          path: "componentTest",
          component: ComponentTest,
          meta: {
            title: "組件練習"
          }
        },
        {
          path: "AxiosTest",
          component: AxiosTest,
          meta: {
            title: "Axios"
          }
        },
        {
          path: "EnvironmentalVariable",
          component: EnvironmentalVariable,
          meta: {
            title: "環境變數與專案打包"
          }
        },
        {
          path: "Jenkins",
          component: Jenkins,
          meta: {
            title: "Jenkins自動佈署Vue"
          }
        }
      ]
    },
    {
      path: "/referenceMaterial",
      name: "referenceMaterial",
      component: ReferenceMaterial,
      meta: {
        title: "參考網站"
      }
    }
  ]
});
