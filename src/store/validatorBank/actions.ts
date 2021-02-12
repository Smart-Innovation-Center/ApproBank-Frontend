import axios from "../../axios"

export default {
    loadValidatorsBank({ commit, state }, payload){
        console.log('payload => ',payload)
        return new Promise((resolve, reject) => {
                axios
                    .get(`validatorsByBank/${payload}`,payload)
                    .then(response => {
                        resolve(response);
                        console.log(response)
                        commit("SET_VALIDATORS_BANK", response);
                    })
                    .catch((error)=>{
                        reject(error);
                    })
            })
        
      },

      addValidatorBank(ctx, payload){
          //console.log('payload :>> ', payload);
          
        // return new Promise((resolve, reject) => {
        //     axios
        //         .post('validatorBankAdd', payload)
        //         .then(response => {
        //             resolve(response);
        //         })
        //         .catch((error)=>{
        //             reject(error);
        //         })
        // })
    },

    editValidatorBank(ctx, payload){
        //console.log('payload :>> ', payload);
        
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
  },

  updateValidatorBank(ctx, payload){
    //   payload.bank_id = payload.bankID.id;
    // return new Promise((resolve, reject) => {
    //     axios
    //         .post(`ribUpdate/${payload.id}`,payload)
    //         .then(response => {
    //             resolve(response);
    //         })
    //         .catch((error)=>{
    //             reject(error);
    //         })
    // })
  },

  deleteValidatorBank(ctx, payload){
        // return new Promise((resolve, reject) => {
        //     axios
        //         .delete(`ribDelete/${payload}`)
        //         .then(response => {
        //             resolve(response);
        //         })
        //         .catch((error)=>{
        //             reject(error);
        //         })
        // })
    },

}

