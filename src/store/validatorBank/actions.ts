import axios from "../../axios"

export default {
      addValidatorBank(ctx, payload){
          console.log('payload :>> ', payload);
          
        return new Promise((resolve, reject) => {
            axios
                .post('validatorBankAdd', payload)
                .then(response => {
                    console.log(response);
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    },

  updateValidatorBank(ctx, payload){
    console.log(payload)
    return new Promise((resolve, reject) => {
        axios
            .post(`validatorBankUpdate/${payload.id}`,payload)
            .then(response => {
                console.log(response);
                resolve(response);
            })
            .catch((error)=>{
                reject(error);
            })
    })
  },

  deleteValidatorBank(ctx, payload){
        return new Promise((resolve, reject) => {
            axios
                .delete(`validatorBankDelete/${payload}`)
                .then(response => {
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    },

}

