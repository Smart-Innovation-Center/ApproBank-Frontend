import axios from "../../axios"

export default {
    registerUser(ctx, payload){
        return new Promise((resolve, reject) => {
            axios
                .post('register', payload)
                .then(response => {
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    },
    loginUser(ctx, payload){
        return new Promise((resolve, reject) => {
            axios
                .post('login', payload)
                .then((response) => {
                    if(response.data){
                        localStorage.setItem('token', response.data.success.token);
                        ctx.commit('setLoggedIn', true);
                        resolve(response);
                    }
                    else{
                        reject(response);
                    }
                })
                .catch((error)=>{
                    reject(error);
                })
                
        })
    },
    logoutUser(ctx){
        return new Promise((resolve) => {
            localStorage.removeItem('token');
            ctx.commit('setLoggedIn', false);
            resolve(true)
        })
    },
    setLoggedInState(ctx){
        return new Promise((resolve)=>{
            if (localStorage.getItem('token')){
                ctx.commit('setLoggedIn', true);
                resolve(true);
            }
            else{
                ctx.commit('setLoggedIn', false);
                resolve(false);
            }
                
        });
    },
    forgotPassword(ctx, payload){
        return new Promise((resolve, reject) => {
            axios
                .post('forgotPassword', payload)
                .then(response => {
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    },
    resetPassword(ctx, payload){
        return new Promise((resolve, reject) => {
            axios
                .post('resetPassword', payload)
                .then(response => {
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    },
    userInfos(ctx){
        return new Promise((resolve, reject) => {
            axios
                .get('userInfos')
                .then(response => {
                    ctx.commit('setUserInfos', response.data.data);
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    }
}
