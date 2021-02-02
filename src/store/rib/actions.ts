import axios from "../../axios"

export default {
    async loadRibs({ commit }) {
        let response = await axios.get("ribsAll",);
        let ribs = response.data;
        commit("SET_RIBS", ribs);
      },

      addRib(ctx, payload){
          //console.log('payload :>> ', payload);
          
        return new Promise((resolve, reject) => {
            axios
                .post('ribAdd', payload)
                .then(response => {
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    },

    editRib(ctx, payload){
        //console.log('payload :>> ', payload);
        
      return new Promise((resolve, reject) => {
          axios
              .post('ribEdit', payload)
              .then(response => {
                  resolve(response);
              })
              .catch((error)=>{
                  reject(error);
              })
      })
  },

  updateRib(ctx, payload){
      payload.bank_id = payload.bankID.id;
    return new Promise((resolve, reject) => {
        axios
            .post(`ribUpdate/${payload.id}`,payload)
            .then(response => {
                resolve(response);
            })
            .catch((error)=>{
                reject(error);
            })
    })
  },

  deleteRib(ctx, payload){
  return new Promise((resolve, reject) => {
      axios
          .delete(`ribDelete/${payload}`)
          .then(response => {
              resolve(response);
          })
          .catch((error)=>{
              reject(error);
          })
  })
},

}

