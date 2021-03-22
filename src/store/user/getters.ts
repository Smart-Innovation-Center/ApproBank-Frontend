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
    usersGeles(state){
        return state.usersGeles;
    },
    adminBankInfos(state){
        return state.adminBankInfos;
    },
    validatorsBankInfos(state){
        return state.validatorsBankInfos;
    },
    myNotifications(state){
        return state.myNotifications;
    }
}