// import actions from "./actions";
// import getters from "./getters";
// import mutations from "./mutations";
// import state from "./state";

// export default {
//     namespaced: true,
//     state,
//     getters,
//     mutations,
//     actions
// }

// VUEX STORE
import axios from "../../axios";

export default {
namespaced: true,

//*******STATE*******//
state: {
   agencies: []
},

//*********MUTATIONS**********//
mutations: {
  SET_AGENCIES(state, agencies) {
  state.agencies = agencies;
},
},

//********ACTIONS******//
actions: {
  async loadAgencies({ commit }) {
    let response = await axios.get("agenciesAll",);
    let agencies = response.data;
    commit("SET_AGENCIES", agencies);
  },
 }
};