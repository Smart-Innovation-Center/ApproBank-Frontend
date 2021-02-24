export default {
    loggedIn(state){
        return state.isLoggedIn;
    },
    userInfos(state){
        return state.userInfos;
    },
    users(state){
        return state.users;
    },
    adminBankInfos(state){
        return state.adminBankInfos;
    },
    validatorsBankInfos(state){
        return state.validatorsBankInfos;
    }
}