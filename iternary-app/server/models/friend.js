const UserModel = require('./user')

const friends = [
    {
        id: 1,
        userID: 1,
        friends: ["example1@gmail.com"]
    },
    {
        id: 2,
        userID: 2,
        friends: ["example@gmail.com"]
    }
]

const includeUser = (friend) => ({ ...friend, user: UserModel.get(friend.userID)})

function get(id){
    const friend = friends.find(friend => friend.id === parseInt(id))
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

function removeFriend(id, friend){
    const index = friends.findIndex(friend => friend.id === parseInt(id))
    const friendIndex = friends[index].friends.findIndex(f => f === friend)
    friends[index].friends.splice(friendIndex, 1)
    return includeUser(friends[0])
}

function addFriends(id, friend){
    const index = friends.findIndex(friend => friend.id === parseInt(id))
    friends[index].friends.push(friend)
    return includeUser(friends[0])
}

function create(newFriend){
    newFriend.id = friends.length + 1
    newFriend.userID = friends.length + 1
    friends.push(newFriend)
    return newFriend
}

module.exports = {
    get,
    remove,
    removeFriend,
    create,
    addFriends
}

module.exports.friends = friends;