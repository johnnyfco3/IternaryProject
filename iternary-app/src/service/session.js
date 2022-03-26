const session = {
    userID: null,
    Login(user){
        this.userID = user
    },
    Logout(){
        this.userID = null
    }
}

export default session;