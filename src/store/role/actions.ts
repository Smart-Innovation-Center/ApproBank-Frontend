import axios from "../../axios"

export default {
    async loadRoles({ commit }) {
        let response = await axios.get("rolesAll",);
        let roles = response.data;
        commit("SET_ROLES", roles);
      }
}
