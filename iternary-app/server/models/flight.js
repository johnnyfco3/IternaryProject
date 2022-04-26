const con = require('./db_connect')

con.connect(function(err) {
    if (err) throw err;
    let sql = `CREATE TABLE IF NOT EXISTS flights (
        flightID INT NOT NULL AUTO_INCREMENT,
        flightNumber VARCHAR(255) NOT NULL,
        departFrom VARCHAR(255) NOT NULL,
        arriveAt VARCHAR(255) NOT NULL,
        depart TIMESTAMP NOT NULL,
        arrive TIMESTAMP NOT NULL,
        adventureID INT NOT NULL,
        CONSTRAINT flight_pk PRIMARY KEY (flightID),
        CONSTRAINT flight_fk FOREIGN KEY (adventureID) REFERENCES adventures(adventureID))`;
    
    con.query(sql, function (err, result) {
        if (err) throw err;
    });
});

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

function get(id){
    const flight = flightInfo.find(flight => flight.id === parseInt(id))
    if(!flight){
        throw { status: 404, msg: 'Flight not found' }
    }
    return { ...flight }
}

function getByAdventure(adventureID){
    const flights = flightInfo.filter(flight => flight.adventureID === parseInt(adventureID))
    if(!flights){
        throw { status: 404, msg: 'Flights not found' }
    }
    return flights
}

function remove(id){
    const index = flightInfo.findIndex(flight => flight.id === parseInt(id))
    flightInfo.splice(index, 1)
    return { ...flightInfo[0] }
}

function update(id, updatedFlight){
    const index = flightInfo.findIndex(flight => flight.id === parseInt(id))
    const oldFlight = flightInfo[index]

    updatedFlight = flightInfo[index] = { ...oldFlight, ...updatedFlight }

    return { ...updatedFlight }
}

function create(newFlight){
    newFlight.id = flightInfo.length + 1
    flightInfo.push(newFlight)
    return newFlight
}

module.exports = {
    get,
    remove,
    update,
    create,
    getByAdventure
}

module.exports.flightInfo = flightInfo;