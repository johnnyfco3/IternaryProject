import { login } from './users'

const session = {
    user: null,
    message: null,
    async Login(user){
        try{
            const response = await login(user.email, user.password)
            if(response.errors){
                this.message = response.errors[0]
                return this.message
            }
            else{
                session.user = response
                return true
            }
        }
        catch(err){
            console.log(err)
        }
    },
    Logout(){
        this.user = null
    }
}

export default session;