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
  },
  getters: {
    categoryId: (state) => {
      return state.categoryId;
    },
    manufacturersId: (state) => {
      return state.manufacturersId;
    },
  },
  mutations: {
    getCategoryId(state, categoryId) {
      state.categoryId = categoryId;
    },
    sendManufacturersId(state, payload) {
      state.manufacturersId = payload;
    },
    
    addTodo(state, payload) {
      if (payload.title != "") {
        state.todos.push(payload);
      }
    },
    completedTodo(state, todoId) {
      const index = state.todos.findIndex((task) => task.id === todoId);
      state.todos[index].done = true;
    },
    editTodo(state, todoId) {
      const index = state.todos.findIndex((task) => task.id === todoId);
      state.todos[index].edit = true;
    },
    updateTodo(state, payload) {
      const index = state.todos.findIndex((task) => task.id === payload.id);

      if (payload.title != "") {
        state.todos[index].title = payload.title;
        state.todos[index].edit = false;
      }
    },
  },
  actions: {
    getCategoryId: (context, CategoryId) => {
      context.commit("getCategoryId", CategoryId);
    },
    sendManufacturersId: (context, payload) => {
      context.commit("sendManufacturersId", payload);
    },
    addTodo: (context, payload) => {
      context.commit("addTodo", payload);
    },
    completedTodo: (context, todoId) => {
      context.commit("completedTodo", todoId);
    },
    editTodo: (context, todoId) => {
      context.commit("editTodo", todoId);
    },
    updateTodo: (context, payload) => {
      context.commit("updateTodo", payload);
    },
  },
});
