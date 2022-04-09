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
    const flight = flightInfo.find(flight => flight.adventureID === parseInt(adventureID))
    if(!flight){
        throw { status: 404, msg: 'Flight not found' }
    }
    return { ...flight }
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