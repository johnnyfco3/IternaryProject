const UserModel = require('./user')

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

const includeUser = (friend) => ({ ...friend, user: UserModel.getByEmail(friend.user)})

function get(id){
    const friend = friends.find(friend => friend.id === parseInt(id))
    if(!friend){
        throw { status: 404, msg: 'Friend not found' }
    }
    return includeUser(friend)
}

function getByUser(user){
    const friend = friends.find(friend => friend.user === user)
    if(!friend){
        throw { status: 404, msg: 'Friend not found' }
    }
    return includeUser(friend)
}

function remove(id){
    const index = friends.findIndex(friend => friend.id === parseInt(id))
    friends.splice(index, 1)
    return includeUser(friends[0])
}

function removeFriend(user, friend){
    const index = friends.findIndex(friend => friend.user === user)
    const friendIndex = friends[index].friends.findIndex(f => f === friend)
    friends[index].friends.splice(friendIndex, 1)
    return friends
}

function addFriends(user, friend){
    const index = friends.findIndex(friend => friend.user === user)
    friends[index].friends.push(friend)
    return includeUser(friends[0])
}

function create(newFriend){
    newFriend.id = friends.length + 1
    newFriend.friends = []
    friends.push(newFriend)
    return newFriend
}

module.exports = {
    get,
    getByUser,
    remove,
    removeFriend,
    create,
    addFriends
}

module.exports.friends = friends;