import Vue from "vue";
import Router from "vue-router";

const TopPage = () => import("./components/TopPage");
const MyPage = () => import("./components/MyPage");
const Develop = () => import("./components/Develop");
const MyStudy = () => import("./components/MyStudy");
const SchoolDays = () => import("./components/SchoolDays.vue");

//Vue Routerの利用宣言
Vue.use(Router)

export default new Router({
  mode: "history",
  routes:[
    {
      path: "/",
      components: {
        default: TopPage
      }
    },
    {
      path: "/mypage",
      components: {
        default: MyPage,
      }
    },
    {
      path: "/devs",
      components: {
        default: Develop,
      }
    },
    {
      path: "/mystudy",
      components: {
        default: MyStudy,
      }
    },
    {
      path: "/schoolDays",
      components: {
        default: SchoolDays,
      }
    },

    {path: "*", redirect: "/"}
  ]
})