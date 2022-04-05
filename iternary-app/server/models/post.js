const posts = [
    { 
        id: 1,
        img: "https://images.unsplash.com/photo-1582436416930-f533b50a7cd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80", 
        caption: "One World NYC", 
        adventureID: 1 
    },
    { 
        id: 2,  
        img: "https://images.unsplash.com/photo-1622491088758-364f7e4908fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80", 
        caption: "Such a beautiful park!", 
        adventureID: 1 
    },
    { 
        id: 3, 
        img: "https://images.unsplash.com/photo-1559613527-817fdce54129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80", 
        caption: "Spending a Sunday Afternoon at the vessel.", 
        adventureID: 1 
    },
    { 
        id: 4, 
        img: "https://images.unsplash.com/photo-1595901688281-9cef114adb0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
        caption: "Too many people!", 
        adventureID: 1 
    },
    { 
        id: 5, 
        img: "https://images.unsplash.com/photo-1558385953-d50e6afd94c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
        caption: "Finally a space to breathe", 
        adventureID: 1 
    },
    { 
        id: 6, 
        img: "https://images.unsplash.com/photo-1562967967-edb2915098dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmlhbHRvJTIwYnJpZGdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", 
        caption: "Venice couldn't be more beautiful!", 
        adventureID: 3 
    },
    { 
        id: 7, 
        img: "https://images.unsplash.com/photo-1567012198973-b8843811d618?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", 
        caption: "Beautiful Museum", 
        adventureID: 3 
    },
    { 
        id: 8, 
        img: "https://images.unsplash.com/photo-1628106913234-9cdfddbf6b81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80", 
        caption: "Great Location for photos!", 
        adventureID: 3 
    },
  
]

function get(id){
    const post = posts.find(post => post.id === parseInt(id))
    if(!post){
        throw { statusCode: 404, msg: 'Post not found' }
    }
    return { ...post }
}

function remove(id){
    const index = posts.findIndex(post => post.id === parseInt(id))
    posts.splice(index, 1)
    return { ...posts[0] }
}

function update(id, updatedPost){
    const index = posts.findIndex(post => post.id === parseInt(id))
    const oldPost = posts[index]

    updatedPost = posts[index] = { ...oldPost, ...updatedPost }

    return { ...updatedPost }
}

function create(newPost){
    newPost.id = posts.length + 1
    posts.push(newPost)
    return newPost
}

module.exports = {
    get,
    remove,
    update,
    create
}

module.exports.posts = posts;