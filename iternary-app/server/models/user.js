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
    return users.find(u => u.id === parseInt(id))
}

function remove(id){
    const index = users.findIndex(u => u.id === parseInt(id))
    users.splice(index, 1)
    return users[0]
}

function update(id, updatedUser){
    const index = users.findIndex(u => u.id === parseInt(id))
    const oldUser = users[index]

    updatedUser = users[index] = { ...oldUser, ...updatedUser }

    return updatedUser
}

function create(newUser){
    newUser.id = users.length + 1
    users.push(newUser)
    return newUser
}

module.exports = {
    get,
    remove,
    update,
    create
}

module.exports.users = users