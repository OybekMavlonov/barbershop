import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios-auth.js";
import globalAxios from "axios";

Vue.use(Vuex);

import { categories, products } from "../db";

export const store = new Vuex.Store({
  state: {
    categories: categories,
    products: products,
    categoryId: NaN,
    manufacturersId: [],
    productDetails: {},
    selectedProducts: [],
    idToken: null,
    userId: null,
    user: null,
    // registeredUser: null,
  },
  mutations: {
    getCategoryId(state, categoryId) {
      state.categoryId = categoryId;
    },
    sendManufacturersId(state, payload) {
      state.manufacturersId = payload;
    },
    sendProduct(state, payload) {
      state.productDetails = payload;
    },
    selected(state, payload) {
      state.selectedProducts = payload;
    },
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user;
    },
    // registeredUserId(state, user) {
    //   state.registeredUser = user;
    // },
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
    selected: (context, payload) => {
      context.commit("selected", payload);
    },
    signup({ commit, dispatch }, authData) {
      axios
        .post(":signUp?key=AIzaSyC6ZHAsqS18QLFUY3ROt9A4LooP7Gf0jqY", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((res) => {
          console.log(res);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId,
          });
          dispatch("storeUser", authData);
        })
        .catch((error) => console.log(error.response));
    },
    login({ commit }, authData) {
      axios
        .post(
          ":signInWithPassword?key=AIzaSyC6ZHAsqS18QLFUY3ROt9A4LooP7Gf0jqY",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          }
        )
        .then((res) => {
          console.log(res);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId,
          });
        })
        .catch((error) => console.log(error.response));
    },
    storeUser({ state }, userData) {
      if (!state.idToken) {
        return;
      }
      globalAxios
        .post("/users.json" + "?auth=" + state.idToken, userData)
        .then((res) => {
          console.log(res);
          console.log(res.data.name);
        })
        .catch((error) => console.log(error));
    },
    fetchUser({ commit, state }) {
      if (!state.idToken) {
        return;
      }
      globalAxios
        .get("/users.json" + "?auth=" + state.idToken)
        .then((res) => {
          console.log(res);
          const data = res.data;
          console.log(data);
          const users = [];
          for (let key in data) {
            const user = data[key];
            user.id = key;
            console.log(user.id);
            users.push(user);
          }
          console.log(users);
          commit("storeUser", users[users.length - 1]);
        })
        .catch((error) => console.log(error));
    },
  },
  getters: {
    categoryId: (state) => {
      return state.categoryId;
    },
    manufacturersId: (state) => {
      return state.manufacturersId;
    },
    getProduct: (state) => {
      return state.productDetails;
    },
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    },
  },
});
