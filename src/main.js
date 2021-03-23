import Vue from "vue";
import App from "./App.vue";

import { store } from "./store/store";
import router from "./router";
import vuetify from "./plugins/vuetify";

import firebase from "firebase";
import "./components/firebaseInit";

import Paginate from "vuejs-paginate";
Vue.component("paginate", Paginate);

import Pagination from "vue-pagination-2";
Vue.component("pagination", Pagination);

Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: (h) => h(App),
// }).$mount("#app");

Vue.config.productionTip = false;
let app;
firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    console.log(user);

    app = new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
