import axios from "../../axios"

export default {
    async loadAgencies({ commit }) {
        let response = await axios.get("agenciesAll",);
        let agencies = response.data;
        commit("SET_AGENCIES", agencies);
      },

      async loadAgenciesAll({ commit }) {
        let response = await axios.get("agenciesTotal",);
        let agenciesAll = response.data;
        commit("SET_AGENCIES_ALL", agenciesAll);
      },

      async loadSoldeStructure({ commit }) {
        let response = await axios.get("soldeStructure",);
        //console.log("solde =>",response)
        let soldeStructure = response;
        commit("SET_SOLDE_STRUCTURE", soldeStructure);
      },

      addAgency(ctx, payload){
      console.log('payload :>> ', payload);
        
      return new Promise((resolve, reject) => {
          axios
              .post('agencyAdd', payload)
              .then(response => {
                  resolve(response);
              })
              .catch((error)=>{
                  reject(error);
              })
      })
  },

updAgency(ctx, payload){
  console.log('payload :>> ', payload);
  return new Promise((resolve, reject) => {
      axios
          .post(`agencyUpdate/${payload.id}`,payload)
          .then(response => {
              resolve(response);
          })
          .catch((error)=>{
              reject(error) ;
          })
  })
},

delAgency(ctx, payload){
  console.log('payload :>> ', payload);
  return new Promise((resolve, reject) => {
      axios
          .delete(`agencyDelete/${payload}`)
          .then(response => {
            console.log('reponse :>> ', response);
              resolve(response);
          })
          .catch((error)=>{
            console.log('erreur :>> ', error);
              reject(error);
          })
  })
  },
}
