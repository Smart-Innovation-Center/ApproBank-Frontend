import axios from "../../axios"

export default {
    async loadSupplies({ commit }) {
        let response = await axios.get("supplyAll",);
        let supplies = response.data;
        commit("SET_SUPPLIES", supplies);
      },

      async loadmySupplies({ commit }) {
        let response = await axios.get("supply",);
        let mySupplies = response.data;
        commit("SET_MY_SUPPLIES", mySupplies);
      },

      async loadSuppliesSansB({ commit }) {
        let response = await axios.get("supplySansB",);
        let suppliesSansB = response.data;
        commit("SET_SUPPLIES_SANS_B", suppliesSansB);
      },

      async loadSuppliesAvecB({ commit }) {
        let response = await axios.get("supplyAvecB",);
        let suppliesAvecB = response.data;
        commit("SET_SUPPLIES_AVEC_B", suppliesAvecB);
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

    validSupplyAvec(ctx, payload){
      //console.log('payload :>> ', payload)
    return new Promise((resolve, reject) => {
        axios
            .post(`validSupplyAvecB/${payload}`,payload)
            .then(response => {
                resolve(response);
            })
            .catch((error)=>{
                reject(error);
            })
    })
  },

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

