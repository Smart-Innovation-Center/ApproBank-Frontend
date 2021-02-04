import axios from "../../axios"

export default {
    async loadSupplies({ commit }) {
        let response = await axios.get("supplyAll",);
        let supplies = response.data;
        commit("SET_SUPPLIES", supplies);
      },

    addSupply(ctx, payload){
          //console.log('payload :>> ', payload);
          
        return new Promise((resolve, reject) => {
            axios
                .post('supplyAdd', payload)
                .then(response => {
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    },

    addSupply2(ctx, payload){
        //console.log('payload :>> ', payload);
        
      return new Promise((resolve, reject) => {
          axios
              .post('supplyAdd2', payload)
              .then(response => {
                  resolve(response);
              })
              .catch((error)=>{
                  reject(error);
              })
      })
  },

    // editRib(ctx, payload){
    //     //console.log('payload :>> ', payload);
        
    //   return new Promise((resolve, reject) => {
    //       axios
    //           .post('ribEdit', payload)
    //           .then(response => {
    //               resolve(response);
    //           })
    //           .catch((error)=>{
    //               reject(error);
    //           })
    //   })
    //},

//   updateRib(ctx, payload){
//       payload.bank_id = payload.bankID.id;
//     return new Promise((resolve, reject) => {
//         axios
//             .post(`ribUpdate/${payload.id}`,payload)
//             .then(response => {
//                 resolve(response);
//             })
//             .catch((error)=>{
//                 reject(error);
//             })
//     })
//   },

//   deleteRib(ctx, payload){
//   return new Promise((resolve, reject) => {
//       axios
//           .delete(`ribDelete/${payload}`)
//           .then(response => {
//               resolve(response);
//           })
//           .catch((error)=>{
//               reject(error);
//           })
//   })
//},

}

