export default {
    setLoggedIn(state:any, payload:any){
        state.isLoggedIn = payload; 
    },
    setUserInfos(state, payload){
        state.userInfos = payload;
    }
}