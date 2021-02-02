import axios from "../../axios"

export default {
    async loadBanks({ commit }) {
        let response = await axios.get("banksAll",);
        let banks = response.data;
        commit("SET_BANKS", banks);
      }
}
