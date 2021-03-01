import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";
import CoinDetail from "@/views/CoinDetail";

Vue.use(Router);

export default new Router({
  mode: "history", //USA EL HISTORY MODE DE HTML

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/coin/:id", // CON LOS : HAGO REFERENCIA A UN ID DINAMICO
      name: "coin-detail",
      component: CoinDetail,
    },
    {
      path: "*",
      name: "Error",
      component: Error,
    },
  ],
});
