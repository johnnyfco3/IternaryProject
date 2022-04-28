const con = require('./db_connect')

async function createTable(){
    const sql = `CREATE TABLE IF NOT EXISTS flights (
        flightID INT NOT NULL AUTO_INCREMENT,
        flightNumber VARCHAR(255) NOT NULL,
        departFrom VARCHAR(255) NOT NULL,
        arriveAt VARCHAR(255) NOT NULL,
        depart TIMESTAMP NOT NULL,
        arrive TIMESTAMP NOT NULL,
        adventureID INT NOT NULL,
        CONSTRAINT flight_pk PRIMARY KEY (flightID),
        CONSTRAINT flight_fk FOREIGN KEY (adventureID) REFERENCES adventures(adventureID))`;
    await con.query(sql)
}
createTable()

const flightInfo = [
    {
        id: 1,
        number: "BA2540",
        from: "JFK",
        to: "LGA",
        depart: "07:00am",
        arrival: "10:30am",
        adventureID: 1
    },
    {
        id: 2,
        number: "AA2540",
        from: "ALB",
        to: "GTR",
        depart: "03:00pm",
        arrival: "6:30pm",
        adventureID: 2
    },
]

async function get(id){
    const flight = await con.query(`SELECT * FROM flights WHERE flightID = ${id}`)
    if(!flight[0]){
        throw { status: 404, message: `Flight with id ${id} not Found` }
    }
    return { ...flight[0] }
}

async function getByAdventure(adventureID){
    const flights = await con.query(`SELECT * FROM flights WHERE adventureID = ${adventureID}`)
    if(!flights[0]){
        throw { status: 404, message: `Flight with adventureID ${adventureID} not Found` }
    }
    return { ...flights[0] }
}

async function remove(id){
    const result = await con.query(`DELETE FROM flights WHERE flightID = ${id}`)
    if(!result.affectedRows){
        throw { status: 404, message: `Flight with id ${id} not Found` }
    }
    return { message: `Flight with id ${id} deleted` }
}

async function update(id, updatedFlight){
    const flight = await con.query(`UPDATE flights SET 
        flightNumber = '${updatedFlight.number}',
        departFrom = '${updatedFlight.from}',
        arriveAt = '${updatedFlight.to}',
        depart = '${updatedFlight.depart}',
        arrive = '${updatedFlight.arrival}',
        adventureID = ${updatedFlight.adventureID}
        WHERE flightID = ${id}`)

    return { message: `Flight with id ${id} updated` }
}

async function create(newFlight){
    const flight = await con.query(`INSERT INTO flights 
        (flightNumber, departFrom, arriveAt, depart, arrive, adventureID) 
        VALUES ('${newFlight.number}', '${newFlight.from}', '${newFlight.to}', '${newFlight.depart}', '${newFlight.arrival}', ${newFlight.adventureID})`)

    return { ...newFlight, id: flight.insertId }
}

module.exports = {
    get,
    remove,
    update,
    create,
    getByAdventure,
    async getList(){
        const flights = await con.query(`SELECT * FROM flights`)
        return flights.map(flight => ({ ...flight }))
    }
}