const UserModel = require('./user')
const con = require('./db_connect')

async function createTable(){
    const sql = `CREATE TABLE IF NOT EXISTS friendList (
        id INT NOT NULL AUTO_INCREMENT,
        newFriend VARCHAR(255) NOT NULL,
        userID INT NOT NULL,
        CONSTRAINT friendList_pk PRIMARY KEY (id),
        CONSTRAINT friendList_user_fk FOREIGN KEY (userID) REFERENCES users(userID));`
    await con.query(sql)
}
createTable()

const friends = [
    {
        id: 1,
        user: "example@gmail.com",
        friends: ["example1@gmail.com"]
    },
    {
        id: 2,
        user: "example1@gmail.com",
        friends: ["example@gmail.com"]
    }
]

const includeUser = (friend) => ({ ...friend, user: UserModel.get(friend.userID)})

async function get(id){
    const friend = await con.query(`SELECT * FROM friendList WHERE id = ${id}`)
    if(!friend[0]){
        throw { status: 404, message: `Friend with id ${id} not Found` }
    }
    return includeUser(friend[0])
}

async function getByUser(userID){
    const friends = await con.query(`SELECT * FROM friendList WHERE userID = ${userID}`)
    if(!friends[0]){
        throw { status: 404, message: `Friend with userID ${userID} not Found` }
    }
    return friends.map(includeUser)
}

async function remove(id){
    const result = await con.query(`DELETE FROM friendList WHERE id = ${id}`)
    if(!result.affectedRows){
        throw { status: 404, message: `Friend with id ${id} not Found` }
    }
    return { message: `Friend with id ${id} deleted` }
}

async function create(newFriend){
    const result = await con.query(`INSERT INTO friendList
    (newFriend, userID) VALUES ('${newFriend.newFriend}', ${newFriend.userID})`)

    return { ...newFriend, id: result.insertId }
}

module.exports = {
    get,
    getByUser,
    remove,
    create,
    async getList(){
        const friends = await con.query(`SELECT * FROM friendList`)
        return friends.map(includeUser)
    }
}