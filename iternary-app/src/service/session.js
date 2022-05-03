import { login } from './users'

const session = {
    user: JSON.parse(localStorage.getItem('user')),
    message: null,
    async Login(user){
        try{
            const response = await login(user.email, user.password)
            if(response.errors){
                this.message = response.errors[0]
                return this.message
            }
            else{
                localStorage.setItem('user', JSON.stringify(response.data))
                return true
            }
        }
        catch(err){
            console.log(err)
        }
    },
    Logout(){
        localStorage.removeItem('user')
    }
}

export default session;