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
  },

  addRole(ctx, payload){
    //console.log('payload :>> ', payload);
    
    return new Promise((resolve, reject) => {
        axios
            .post('roleAdd', payload)
            .then(response => {
              console.log(response)
              resolve(response);
            })
            .catch((error)=>{
              console.log(error)
              reject(error);
            })
    })
  },

  updateRole(ctx, payload){
    //console.log('payload :>> ', payload);
    return new Promise((resolve, reject) => {
      axios
        .post(`roleUpdate/${payload.id}`,payload)
        .then(response => {
          console.log(response)  
          resolve(response);
        })
        .catch((error)=>{
          console.log(error)
          reject(error);
        })
    })
  },

  deleteRole(ctx, payload){
    //console.log('payload :>> ', payload);
    return new Promise((resolve, reject) => {
      axios
        .delete(`roleDelete/${payload}`)
        .then(response => {
          console.log(response)  
          resolve(response);
        })
        .catch((error)=>{
          console.log(error)
          reject(error);
        })
    })
  },

}
