import axios from "../../axios"

export default {
  async loadRoles({ commit }) {
    let response = await axios.get("rolesAll",);
    let roles = response.data;
    commit("SET_ROLES", roles);
  },
  
    async loadRolesForUsers({ commit }) {
        let response = await axios.get("rolesForUsers",);
        let rolesForUsers = response.data;
        commit("SET_ROLES_FOR_USERS", rolesForUsers);
      }
}
