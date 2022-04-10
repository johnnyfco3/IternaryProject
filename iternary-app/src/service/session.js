import { login } from './users'

const session = {
    user: null,
    async Login(user){
        try{
            const response = await login(user.email, user.password)
            session.user = response.data
            return response
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