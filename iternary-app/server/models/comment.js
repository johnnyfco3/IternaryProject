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

function get(id){
    return comments.find(comment => comment.id === parseInt(id))
}

function remove(id){
    const index = comments.findIndex(comment => comment.id === parseInt(id))
    comments.splice(index, 1)
    return comments[0]
}

function update(id, updatedComment){
    const index = comments.findIndex(comment => comment.id === parseInt(id))
    const oldComment = comments[index]

    updatedComment = comments[index] = { ...oldComment, ...updatedComment }

    return updatedComment
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