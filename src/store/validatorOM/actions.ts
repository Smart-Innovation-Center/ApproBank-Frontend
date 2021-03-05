import axios from "../../axios"

export default {
    validatorsOM(ctx){
        return new Promise((resolve, reject) => {
            axios
                .get('validatorsOM')
                .then(response => {
                    ctx.commit('SET_VALIDATORS_OM', response.data);
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    },

    addvalidatorsOM(ctx, payload){
          console.log('payload :>> ', payload);
          
        return new Promise((resolve, reject) => {
            axios
                .post('validatorOMAdd', payload)
                .then(response => {
                    console.log(response);
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    },

    gelValidatorsOM(ctx, payload){
        console.log(payload)
        return new Promise((resolve, reject) => {
            axios
                .post(`gelValidatorOM/${payload}`)
                .then(response => {
                    console.log(response);
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
      }

}

