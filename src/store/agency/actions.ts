import axios from "../../axios"

export default {
    async loadAgencies({ commit }) {
        let response = await axios.get("agenciesAll",);
        let agencies = response.data;
        commit("SET_AGENCIES", agencies);
      },

      async loadSoldeStructure({ commit }) {
        let response = await axios.get("soldeStructure",);
        //console.log("solde =>",response)
        let soldeStructure = response;
        commit("SET_SOLDE_STRUCTURE", soldeStructure);
      },

}
