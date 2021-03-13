import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { categories, products } from "../db";

export const store = new Vuex.Store({
  state: {
    categories: categories,
    products: products,
    categoryId: NaN,
    manufacturersId: [],
    productDetails: {}
  },
  getters: {
    categoryId: (state) => {
      return state.categoryId;
    },
    manufacturersId: (state) => {
      return state.manufacturersId;
    },
    getProduct: (state) => {
      return state.productDetails
    }
  },
  mutations: {
    getCategoryId(state, categoryId) {
      state.categoryId = categoryId;
    },
    sendManufacturersId(state, payload) {
      state.manufacturersId = payload;
    },
    sendProduct(state,payload) {
      state.productDetails = payload
    }
  },
  actions: {
    getCategoryId: (context, CategoryId) => {
      context.commit("getCategoryId", CategoryId);
    },
    sendManufacturersId: (context, payload) => {
      context.commit("sendManufacturersId", payload);
    },
    sendProduct: (context, payload) => {
      context.commit("sendProduct", payload);
    },
  },
});
