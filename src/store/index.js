import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    liste: ['lien1', 'lien2']
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    countLinks: state => {
      return state.liste.length
    }
  },
  mutations: {
    increment: state => {
      state.counter++;
    },
    decrement: state => {
      state.counter--;
    },
    ADD_LINK: (state, value) => {
      state.liste.push(value)
    },
    REMOVE_LINK: (state, value) => {
      state.liste.splice(value, 1)
    },
    REMOVE_ALL: (state) => {
      state.liste = [];
    }
  },
  actions: {
    removeLink: (context, value) => {
      context.commit("REMOVE_LINK", value)
    },
    removeAll({commit}) {
      return new Promise((resolve) => {
          commit('REMOVE_ALL')
          resolve()
      })
    }
  },
  modules: {}
});
