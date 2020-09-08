import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    targetCountriesInfo: null,
    originalInfo: null,
    allCountriesInfo: null,
    asiaCountriesInfo: null,
    continents: null,
  },

  getters: {
    targetCountriesInfo: state => state.targetCountriesInfo,
    originalInfo: state => state.originalInfo,
    allCountriesInfo: state => state.allCountriesInfo,
    asiaCountriesInfo: state => state.asiaCountriesInfo,
    continents: state => state.continents,
  },

  mutations: {
    updateTargetCountriesInfo(state, targetCountriesInfo) {
      state.targetCountriesInfo = targetCountriesInfo;
    },
    updateOriginalInfo(state, originalInfo) {
      state.originalInfo = originalInfo;
    },
    updateAllCountriesInfo(state, allCountriesInfo) {
      state.allCountriesInfo = allCountriesInfo;
    },
    updateAsiaCountriesInfo(state, asiaCountriesInfo) {
      state.asiaCountriesInfo = asiaCountriesInfo;
    },
    updateContinents(state, continents) {
      state.continents = continents;
    },
  },
});
