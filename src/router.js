import Vue from "vue";
import Router from "vue-router";

const MyPage = () => import("./components/MyPage.vue");

//Vue Routerの利用宣言
Vue.use(Router)

export default new Router({
  mode: "history",
  routes:[
    {
      path: "/mypage",
      components: {
        default: MyPage,
      }
    },
    {path: "*", redirect: "/"}
  ]
})