import axios from "../../axios"

export default {
      addValidatorBank(ctx, payload){
          console.log('payload :>> ', payload);
          
        return new Promise((resolve, reject) => {
            axios
                .post('validatorBankAdd', payload)
                .then(response => {
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
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

