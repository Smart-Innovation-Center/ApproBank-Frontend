export default {
    loggedIn(state){
        return state.isLoggedIn;
    },
    userInfos(state){
        return state.userInfos;
    },
    adminBankInfos(state){
        return state.adminBankInfos;
    },
    validatorsBankInfos(state){
        return state.validatorsBankInfos;
    }
}