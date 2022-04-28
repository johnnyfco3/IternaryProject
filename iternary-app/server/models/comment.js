const UserModel = require('./user')
const con = require('./db_connect')

async function createTable(){
    const sql = `CREATE TABLE IF NOT EXISTS comments (
        commentID INT NOT NULL AUTO_INCREMENT,
        text VARCHAR(255) NOT NULL,
        userID INT NOT NULL,
        adventureID INT NOT NULL,
        CONSTRAINT comment_pk PRIMARY KEY (commentID),
        CONSTRAINT comment_fk FOREIGN KEY (userID) REFERENCES users(userID),
        CONSTRAINT comment_fk2 FOREIGN KEY (adventureID) REFERENCES adventures(adventureID))`;
    await con.query(sql)
}
createTable()

const comments = [
    { 
        id: 1,
        text: "jkrnknr rkfn rfkn rfknrf erkfn rfner fknferfnkf eknf", 
        user: 2, 
        adventureID: 1
    },
    { 
        id: 2,
        text: "kjrnfk jnf rfkjnf", 
        user: 2, 
        adventureID: 1
    },
    { 
        id: 3,
        text: "lqeljwrl rlwrern lrlrn lrlr fslafj flasjfk saflsfasfkkas flsfakslfjkasfas fl", 
        user: 2, 
        adventureID: 2
    },
    { 
        id: 4,
        text: "fkjsfnd fsdlfnsdfnsdf sdfn sflnffn fn f,nfn fk fln ffdfldfn sdsd dsn ksd ", 
        user: 3, 
        adventureID: 3
    },
  
]

const includeUser = (comment) => ({ ...comment, user: UserModel.get(comment.user)})

async function get(id){
     const comment = await con.query(`SELECT * FROM comments WHERE commentID = ${id}`)
    if(!comment[0]){
        throw { status: 404, message: `Comment with id ${id} not Found` }
    }
    return includeUser(comment[0])
}

async function remove(id){
    const result = await con.query(`DELETE FROM comments WHERE commentID = ${id}`)
    if(!result.affectedRows){
        throw { status: 404, message: `Comment with id ${id} not Found` }
    }
    return { message: `Comment with id ${id} deleted` }
}

async function update(id, updatedComment){
    const comment = await con.query(`UPDATE comments SET 
    text = '${updatedComment.text}' ,
    userID = ${updatedComment.userID} ,
    adventureID = ${updatedComment.adventureID}
    WHERE commentID = ${id}`)

    return { message: `Comment with id ${id} updated` }
}

async function create(newComment){
    const result = await con.query(`INSERT INTO comments
    (text, userID, adventureID) 
    VALUES ('${newComment.text}', ${newComment.userID}, ${newComment.adventureID})`)

    return { ...newComment, id: result.insertId }
}

module.exports = {
    get,
    remove,
    update,
    create,
    async getList(){
        const comments = await con.query(`SELECT * FROM comments`)
        return comments.map(includeUser)
    }
}