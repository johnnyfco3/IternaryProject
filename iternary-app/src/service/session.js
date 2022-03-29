const session = {
    user: null,
    Login(user){
        this.user = user
    },
    Logout(){
        this.user = null
    }
}

export default session;