const UserModel = require('./user')

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

function get(id){
    const comment = comments.find(comment => comment.id === parseInt(id))
    if(!comment){
        throw { status: 404, msg: 'Comment not found' }
    }
    return includeUser(comment)
}

function remove(id){
    const index = comments.findIndex(comment => comment.id === parseInt(id))
    comments.splice(index, 1)
    return includeUser(comments[0])
}

function update(id, updatedComment){
    const index = comments.findIndex(comment => comment.id === parseInt(id))
    const oldComment = comments[index]

    updatedComment = comments[index] = { ...oldComment, ...updatedComment }

    return includeUser(updatedComment)
}

function create(newComment){
    newComment.id = comments.length + 1
    comments.push(newComment)
    return newComment
}

module.exports = {
    get,
    remove,
    update,
    create
}

module.exports.comments = comments;