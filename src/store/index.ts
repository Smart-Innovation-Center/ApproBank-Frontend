import Vue from "vue";
import Vuex from "vuex";

//modules
import user from "./user/index";
import application from "./application/index";
import agency from "./agency/index";
import bank from "./bank/index";
import rib from "./rib/index";
import supply from "./supply/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    application,
    agency,
    bank,
    rib,
    supply
  }
});
