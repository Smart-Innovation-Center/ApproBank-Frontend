import axios from "../../axios"

export default {
    async loadAgencies({ commit }) {
        let response = await axios.get("agenciesAll",);
        let agencies = response.data;
        commit("SET_AGENCIES", agencies);
      },
}
