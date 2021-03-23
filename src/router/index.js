import Vue from "vue";
import VueRouter from "vue-router";

// import store from "../store/store";

import Home from "@/components/Home.vue";
import PriceList from "@/components/PriceList.vue";
import Market from "@/components/Market/Market.vue";
import SingleProduct from "@/components/Market/SingleProduct.vue";
import SignupPage from "@/components/auth/signup.vue";
import Dashboard from "@/components/dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/signup", name: "signup", component: SignupPage },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    // beforeEnter(to, from, next) {
    //   if (store.state.idToken) {
    //     next();
    //   } else {
    //     next("/signup");
    //   }
    // },
  },

  {
    path: "/price",
    name: "PriceList",
    component: PriceList,
  },
  {
    path: "/market",
    name: "Market",
    component: Market,
  },
  {
    path: "/market/:id",
    name: "SingleProduct",
    component: SingleProduct,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
