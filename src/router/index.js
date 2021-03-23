import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";

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
  {
    path: "/signup",
    name: "signup",
    component: SignupPage,
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      // requiresAuth: true,
    },
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

// Nav Guard
router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        // path: "/signup",
        query: {
          // redirect: to.fullPath,
        },
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: "/dashboard",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});


export default router;
