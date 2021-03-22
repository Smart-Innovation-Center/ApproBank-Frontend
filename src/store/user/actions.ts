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
                    console.log(error)
                    reject(error);
                })
        })
    },
    gelUser(ctx, payload){
        console.log(payload)
        return new Promise((resolve, reject) => {
            axios
                .post(`gelUser/${payload.id}`,payload)
                .then(response => {
                    console.log(response);
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
    },
    users(ctx){
        return new Promise((resolve, reject) => {
            axios
                .get('usersWithRoles')
                .then(response => {
                    //console.log(response.data)
                    ctx.commit('setUsers', response.data);
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    },
    usersGeles(ctx){
        return new Promise((resolve, reject) => {
            axios
                .get('usersGeles')
                .then(response => {
                    ctx.commit('setUsersGeles', response.data);
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    },
    adminBankInfos(ctx){
        return new Promise((resolve, reject) => {
            axios
                .get('adminBank')
                .then(response => {
                    ctx.commit('setAdminBankInfo', response.data);
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    },

    validatorsBankInfos(ctx){
        return new Promise((resolve, reject) => {
            axios
                .get('validatorsBankbyAdmin')
                .then(response => {
                    ctx.commit('setValidatorsBankInfo', response.data);
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    },
    updateInfos(ctx, payload){
        console.log("update infos => ",payload)
        return new Promise((resolve, reject) => {
            axios
                .post('updateInfos', payload)
                .then(response => {
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    },
    updatePwd(ctx, payload){
        console.log("update pwd => ",payload)
    return new Promise((resolve, reject) => {
        axios
            .post(`updatePwd/${payload.id}`,payload)
            .then(response => {
                resolve(response);
                console.log(response)
            })
            .catch((error)=>{
                reject(error);
            })
    })
    },

    async loadmyNotifications({ commit }) {
        let response = await axios.get("myNotifications",);
        let myNotifications = response.data;
        commit("SET_MY_NOTIFICATIONS", myNotifications);
      },

}
