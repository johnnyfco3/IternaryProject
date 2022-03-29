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

function get(id){
    return friends.find(friend => friend.id === parseInt(id))
}

function remove(id){
    const index = friends.findIndex(friend => friend.id === parseInt(id))
    friends.splice(index, 1)
    return friends[0]
}

function removeFriend(id, friend){
    const index = friends.findIndex(friend => friend.id === parseInt(id))
    const friendIndex = friends[index].friends.findIndex(f => f === friend)
    friends[index].friends.splice(friendIndex, 1)
    return friends[0]
}

function create(newFriend){
    newFriend.id = friends.length + 1
    friends.push(newFriend)
    return newFriend
}

export default friends;