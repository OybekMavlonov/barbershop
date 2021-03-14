import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import router from "./router";
import vuetify from "./plugins/vuetify";

import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

import Pagination from 'vue-pagination-2';
Vue.component('pagination', Pagination);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
