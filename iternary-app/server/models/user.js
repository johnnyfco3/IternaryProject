const users = [
    { 
        id: 1,
        firstName: "Johnny", 
        lastName: "Tejada", 
        birthday: "07-03-2000", 
        email: "example@gmail.com", 
        password: "12345", 
        quote: "Let's make today a memorable one!",
        pic: ""
    },
    { 
        id: 2,
        firstName: "John", 
        lastName: "Smith", 
        birthday: "05-10-1999", 
        email: "example1@gmail.com", 
        password: "123456", 
        quote: "Hey there, lets travel together!!",
        pic: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    { 
        id: 3,
        firstName: "Michael", 
        lastName: "Jordan", 
        birthday: "08-20-1969", 
        email: "example2@gmail.com", 
        password: "1234", 
        quote: "Make the world a better place!",
        pic: "https://randomuser.me/api/portraits/men/9.jpg"
    },
]

function get(id){
    const user = users.find(user => user.id === parseInt(id))
    if(!user){
        throw { statusCode: 404, message: 'User not Found' }
    }
    return { ...user, password: undefined }
}

function getByEmail(email){
    const user = users.find(user => user.email === email)
    if(!user){
        throw { statusCode: 404, message: 'User not Found' }
    }
    return { ...user, password: undefined }
}

function remove(id){
    const index = users.findIndex(user => user.id === parseInt(id))
    users.splice(index, 1)

    return { ...users[0], password: undefined }
}

function update(id, updatedUser){
    const index = users.findIndex(user => user.id === parseInt(id))
    const oldUser = users[index]

    updatedUser = users[index] = { ...oldUser, ...updatedUser }

    return { ...updatedUser, password: undefined }
}

function create(newUser){
    newUser.id = users.length + 1
    users.push(newUser)
    return newUser
}

async function login(email, password){
    const user = users.find(user => user.email === email)
    if(!user){
        throw { status: 404, message: 'User not Found' }
    }
    if(user.password !== password){
        throw { status: 401, message: 'Invalid Password' }
    }
    return { ...user, password: undefined }
}

module.exports = {
    get,
    remove,
    update,
    create,
    getByEmail,
    login,
    get list(){
        return users.map(user => ({ ...user, password: undefined }))
    }
}