const stops = [
    { 
        id: 1,
        location: "World Trade Center", 
        img: "https://images.unsplash.com/photo-1582436416930-f533b50a7cd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",  
        adventureID: 1 
    },
    { 
        id: 2, 
        location: "Little Island", 
        img: "https://images.unsplash.com/photo-1622491088758-364f7e4908fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80", 
        adventureID: 1 
    },
    { 
        id: 3, 
        location: "The Vessel", 
        img: "https://images.unsplash.com/photo-1559613527-817fdce54129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80", 
        adventureID: 1 
    },
    { 
        id: 4, 
        location: "Time Square", 
        img: "https://images.unsplash.com/photo-1595901688281-9cef114adb0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
        adventureID: 1 
    },
    { 
        id: 5, 
        location: "Central Park", 
        img: "https://images.unsplash.com/photo-1558385953-d50e6afd94c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
        adventureID: 1 
    },
    { 
        id: 6, 
        location: "Rialto Bridge", 
        img: "https://images.unsplash.com/photo-1562967967-edb2915098dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmlhbHRvJTIwYnJpZGdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", 
        adventureID: 3 
    },
    { 
        id: 7, 
        location: "Doge's Palace", 
        img: "https://images.unsplash.com/photo-1567012198973-b8843811d618?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",  
        adventureID: 3 
    },
    { 
        id: 8, 
        location: "St. Marks Square", 
        img: "https://images.unsplash.com/photo-1628106913234-9cdfddbf6b81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80", 
        adventureID: 3 
    },
  
]

function get(id){
    const stop = stops.find(stop => stop.id === parseInt(id))
    if(!stop){
        throw { status: 404, msg: 'Stop not found' }
    }
    return { ...stop }
}

function remove(id){
    const index = stops.findIndex(stop => stop.id === parseInt(id))
    stops.splice(index, 1)
    return { ...stops[0] }
}

function update(id, updatedStop){
    const index = stops.findIndex(stop => stop.id === parseInt(id))
    const oldStop = stops[index]

    updatedStop = stops[index] = { ...oldStop, ...updatedStop }

    return { ...updatedStop }
}

function create(newStop){
    newStop.id = stops.length + 1
    stops.push(newStop)
    return newStop
}

module.exports = {
    get,
    remove,
    update,
    create
}

module.exports.stops = stops;