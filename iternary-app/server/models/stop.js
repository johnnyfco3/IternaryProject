const con = require('./db_connect')

async function createTable(){
    const sql = `CREATE TABLE IF NOT EXISTS stops (
        stopID INT NOT NULL AUTO_INCREMENT,
        location VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        adventureID INT NOT NULL,
        CONSTRAINT stopID_pk PRIMARY KEY (stopID),
        CONSTRAINT fk_adventureID FOREIGN KEY (adventureID) REFERENCES adventures(adventureID))`
    await con.query(sql)
}
createTable()

const stops = [
    { 
        id: 1,
        location: "World Trade Center", 
        img: "https://images.unsplash.com/photo-1582436416930-f533b50a7cd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",  
        adventureID: 6
    },
    { 
        id: 2, 
        location: "Little Island", 
        img: "https://images.unsplash.com/photo-1622491088758-364f7e4908fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80", 
        adventureID: 6 
    },
    { 
        id: 3, 
        location: "The Vessel", 
        img: "https://images.unsplash.com/photo-1559613527-817fdce54129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80", 
        adventureID: 6 
    },
    { 
        id: 4, 
        location: "Time Square", 
        img: "https://images.unsplash.com/photo-1595901688281-9cef114adb0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
        adventureID: 6 
    },
    { 
        id: 5, 
        location: "Central Park", 
        img: "https://images.unsplash.com/photo-1558385953-d50e6afd94c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
        adventureID: 6 
    },
    { 
        id: 6, 
        location: "Rialto Bridge", 
        img: "https://images.unsplash.com/photo-1562967967-edb2915098dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmlhbHRvJTIwYnJpZGdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", 
        adventureID: 8 
    },
    { 
        id: 7, 
        location: "Doge's Palace", 
        img: "https://images.unsplash.com/photo-1567012198973-b8843811d618?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",  
        adventureID: 8 
    },
    { 
        id: 8, 
        location: "St. Marks Square", 
        img: "https://images.unsplash.com/photo-1628106913234-9cdfddbf6b81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80", 
        adventureID: 3 
    },
  
]

async function get(id){
    const stop = await con.query(`SELECT * FROM stops WHERE stopID = ${id}`)
    if(!stop[0]){
        throw { status: 404, message: `Stop with id ${id} does not exist` }
    }

    return { ...stop[0] }
}

async function remove(id){
    const result = await con.query(`DELETE FROM stops WHERE stopID = ${id}`)
    if(result.affectedRows === 0){
        throw { status: 404, message: `Stop with id ${id} does not exist` }
    }

    return { message: `Post with id ${id} deleted` }
}

async function update(id, updatedStop){
    const stop = await con.query(`UPDATE stops SET 
    location = '${updatedStop.location}', 
    image = '${updatedStop.image}' 
    WHERE stopID = ${id}`)

    return { message: `Stop with id ${id} updated` }
}

async function create(newStop){
    const result = await con.query(`INSERT INTO stops (location, image, adventureID) 
    VALUES ('${newStop.location}', '${newStop.img}', ${newStop.adventureID})`)
    
    return { ...newStop, stopID: result.insertId }
}

module.exports = {
    get,
    remove,
    update,
    create,
    async getList(){
        const stops = await con.query(`SELECT * FROM stops`)
        return stops.map(stop => ({ ...stop }))
    }
}