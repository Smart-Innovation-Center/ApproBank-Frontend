import axios from "../../axios"

export default {
    structures(ctx){
        return new Promise((resolve, reject) => {
            axios
                .get('structures')
                .then(response => {
                    ctx.commit('SET_STRUCTURES', response.data);
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    },

    addStructure(ctx, payload){
          console.log('payload :>> ', payload);
          
        return new Promise((resolve, reject) => {
            axios
                .post('structureAdd', payload)
                .then(response => {
                    console.log(response);
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    },

    gelStructure(ctx, payload){
        //console.log(payload)
        return new Promise((resolve, reject) => {
            axios
                .post(`gelStructure/${payload}`)
                .then(response => {
                    console.log(response);
                    resolve(response);
                })
                .catch((error)=>{
                    console.log(error);
                    reject(error);
                })
        })
      }

}

