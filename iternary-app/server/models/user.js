const con = require('./db_connect')

async function createTable(){
    const sql = `CREATE TABLE IF NOT EXISTS users (
        userID INT NOT NULL AUTO_INCREMENT,
        firstName VARCHAR(255) NOT NULL,
        lastName VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        birthday VARCHAR(255) NOT NULL,
        quote VARCHAR(255),
        profilePic VARCHAR(255),
        CONSTRAINT user_pk PRIMARY KEY (userID))`
    await con.query(sql)
}
createTable()

const users = [
    { 
        id: 1,
        firstName: "Johnny", 
        lastName: "Tejada", 
        birthday: "07-03-2000", 
        email: "example@gmail.com", 
        password: "12345", 
        quote: "Let's make today a memorable one!",
        profilePic: ""
    },
    { 
        id: 2,
        firstName: "John", 
        lastName: "Smith", 
        birthday: "05-10-1999", 
        email: "example1@gmail.com", 
        password: "123456", 
        quote: "Hey there, lets travel together!!",
        profilePic: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    { 
        id: 3,
        firstName: "Michael", 
        lastName: "Jordan", 
        birthday: "08-20-1969", 
        email: "example2@gmail.com", 
        password: "1234", 
        quote: "Make the world a better place!",
        profilePic: "https://randomuser.me/api/portraits/men/9.jpg"
    }
]

async function get(id){
    const user = await con.query(`SELECT * FROM users WHERE userID = ${id}`)
    if(!user[0]){
        throw { status: 404, message: 'User not Found' }
    }
    return { ...user[0], password: undefined }
}

async function getByEmail(email){
    const user = await con.query(`SELECT * FROM users WHERE email = '${email}'`)
    if(!user[0]){
        throw { status: 404, message: `User with email ${email} not Found` }
    }
    return { ...user[0], password: undefined }
}

async function remove(id){
    const result = await con.query(`DELETE FROM users WHERE userID = ${id}`)
    if(!result.affectedRows){
        throw { status: 404, message: 'User not Found' }
    }
    return { message: `User with id ${id} deleted` }
}

async function update(id, updatedUser){
    const user = await con.query(`UPDATE users SET 
    firstName = '${updatedUser.firstName}', 
    lastName = '${updatedUser.lastName}', 
    birthday = '${updatedUser.birthday}', 
    email = '${updatedUser.email}', 
    password = '${updatedUser.password}', 
    quote = '${updatedUser.quote}', 
    profilePic = '${updatedUser.profilePic}'
    WHERE userID = ${id}`)

    return { message: `User with id ${id} updated` }
}

async function create(newUser){
    const user = await con.query(`INSERT INTO users 
    (firstName, lastName, birthday, email, password, quote, profilePic) 
    VALUES ('${newUser.firstName}', '${newUser.lastName}', '${newUser.birthday}', '${newUser.email}', '${newUser.password}', '${newUser.quote}', '${newUser.profilePic}')`)

    return { ...newUser, id: user.insertId, password: undefined }
    
}

 async function login(email, password){
    const user = await con.query(`SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`)
    if(!user[0]){
        throw { status: 404, message: 'User not Found' }
    }
    return { ...user[0], password: undefined }
}

module.exports = {
    get,
    remove,
    update,
    create,
    getByEmail,
    login,
    async getList(){
        const users = await con.query(`SELECT * FROM users`)
        return users.map(user => ({ ...user, password: undefined }))
    }
}