export default {
    setLoggedIn(state:any, payload:any){
        state.isLoggedIn = payload; 
    },
    setUserInfos(state, payload){
        state.userInfos = payload;
    },
    setUsers(state, payload){
        state.users = payload;
    },
    setUsersGeles(state, payload){
        state.usersGeles = payload;
    },
    setAdminBankInfo(state, payload){
        state.adminBankInfos = payload;
    },
    setValidatorsBankInfo(state, payload){
        state.validatorsBankInfos = payload;
    }
}