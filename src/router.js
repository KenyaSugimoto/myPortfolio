import Vue from "vue";
import Router from "vue-router";

const TopPage = () => import("./components/TopPage");
const MyPage = () => import("./components/MyPage");

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
    {path: "*", redirect: "/"}
  ]
})