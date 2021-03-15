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

  gelValidatorBank(ctx, payload){
    //console.log(payload)
    return new Promise((resolve, reject) => {
        axios
            .post(`gelValidatorBank/${payload}`)
            .then(response => {
                console.log(response);
                resolve(response);
            })
            .catch((error)=>{
                console.log(error);
                reject(error);
            })
    })
  },

}

