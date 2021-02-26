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

      async loadSuppliesSansBforV({ commit }) {
        let response = await axios.get("supplySansBforV",);
        let suppliesSansBforV = response.data;
        commit("SET_SUPPLIES_SANS_B_FOR_V", suppliesSansBforV);
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

  rejSupplyAvec(ctx, payload){
    console.log('payload :>> ', payload)
  return new Promise((resolve, reject) => {
      axios
          .post(`rejSupplyAvecB/${payload}`,payload)
          .then(response => {
              resolve(response);
          })
          .catch((error)=>{
              reject(error);
          })
  })
},

  validSupplySans(ctx, payload){
    //console.log('payload :>> ', payload)
  return new Promise((resolve, reject) => {
      axios
          .post(`validSupplySansB/${payload}`,payload)
          .then(response => {
              console.log(response)
             resolve(response);
          })
          .catch((error)=>{
              reject(error);
          })
  })
},

rejSupplySans(ctx, payload){
  console.log('payload :>> ', payload)
return new Promise((resolve, reject) => {
    axios
        .post(`rejSupplySansB/${payload}`,payload)
        .then(response => {
            console.log(response)
           resolve(response);
        })
        .catch((error)=>{
            reject(error);
        })
})
},

async loadSuppliesForStats({ commit }) {
  let response = await axios.get("supplyThisYear",);
  let suppliesForStats = response.data;
  commit("SET_SUPPLIES_FOR_STATS", suppliesForStats);
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

