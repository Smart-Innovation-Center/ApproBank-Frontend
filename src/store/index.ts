import Vue from "vue";
import Vuex from "vuex";

//modules
import user from "./user/index";
import role from "./role/index";
import application from "./application/index";
import agency from "./agency/index";
import bank from "./bank/index";
import rib from "./rib/index";
import supply from "./supply/index";
import validatorBank from "./validatorBank/index";
import validatorOM from "./validatorOM/index";
import structure from "./structure/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    role,
    application,
    agency,
    bank,
    rib,
    supply,
    validatorBank,
    validatorOM,
    structure
  }
});
