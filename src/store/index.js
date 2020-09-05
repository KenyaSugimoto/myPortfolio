import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    allCountriesInfo: null,
    asiaCountriesInfo: null,
  },

  getters: {
    allCountriesInfo: state => state.allCountriesInfo,
    asiaCountriesInfo: state => state.asiaCountriesInfo,
  },

  mutations: {
    updateAllCountriesInfo(state, allCountriesInfo) {
      state.allCountriesInfo = allCountriesInfo;
    },
    updateAsiaCountriesInfo(state, asiaCountriesInfo) {
      state.asiaCountriesInfo = asiaCountriesInfo;
    },
  },

});
