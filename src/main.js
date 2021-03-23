import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

import { store } from "./store/store";
import router from "./router";
import vuetify from "./plugins/vuetify";

import Paginate from "vuejs-paginate";
Vue.component("paginate", Paginate);

axios.defaults.baseURL = "https://barbershop-31b3b-default-rtdb.firebaseio.com";
// axios.defaults.headers.common['Authorization'] = 'faa'
axios.defaults.headers.get["Accepts"] = "application/json";

const reqInterceptor = axios.interceptors.request.use((config) => {
  console.log("Request Interceptor", config);
  return config;
});

const resInterceptor = axios.interceptors.response.use((res) => {
  console.log("Response Interceptor", res);
  return res;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

import Pagination from "vue-pagination-2";
Vue.component("pagination", Pagination);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
