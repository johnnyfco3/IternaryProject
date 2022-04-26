const StopModel = require('./stop')
const con = require('./db_connect')

con.connect(function(err) {
    if (err) throw err;
    let sql = `CREATE TABLE IF NOT EXISTS agendas (
        agendaID INT NOT NULL AUTO_INCREMENT,
        text VARCHAR(255) NOT NULL,
        completed BOOLEAN NOT NULL,
        stopID INT NOT NULL,
        CONSTRAINT agenda_pk PRIMARY KEY (agendaID),
        CONSTRAINT agenda_fk FOREIGN KEY (stopID) REFERENCES stops(stopID))`;
    
    con.query(sql, function (err, result) {
        if (err) throw err;
    });
});

const itinerary = [
    {
        id: 1,
        text: "Go to the park",
        completed: true,
        stopID: 1
    },
    {
        id: 2,
        text: "Go eat at the restaurant",
        completed: false,
        stopID: 1
    },
    {
        id: 3,
        text: "Check out the museum",
        completed: false,
        stopID: 1
    },
    {
        id: 4,
        text: "Check out the museum",
        completed: true,
        stopID: 2
    },
    {
        id: 5,
        text: "Check out the attraction",
        completed: false,
        stopID: 2
    },
    {
        id: 6,
        text: "Eat at the restaurant",
        completed: true,
        stopID: 3
    }
]

const includeStop = (plan) => ({ ...plan, stop: StopModel.get(plan.id)})

function get(id){
    const plan = itinerary.find(plan => plan.id === parseInt(id))
    if(!plan){
        throw { status: 404, msg: 'Plan not found' }
    }
    return includeStop(plan)
}

function getByStopID(id){
    const plans = itinerary.filter(plan => plan.stopID === parseInt(id))
    if(!plans){
        throw { status: 404, msg: 'Plan not found' }
    }
    return plans.map(includeStop)
}

function remove(id){
    const index = itinerary.findIndex(plan => plan.id === parseInt(id))
    itinerary.splice(index, 1)
    return includeStop(itinerary[0])
}

function update(id, updatedPlan){
    const index = itinerary.findIndex(plan => plan.id === parseInt(id))
    const oldPlan = itinerary[index]

    updatedPlan = itinerary[index] = { ...oldPlan, ...updatedPlan }

    return includeStop(updatedPlan)
}

function create(newPlan){
    newPlan.id = itinerary.length + 1
    newPlan.completed = false
    itinerary.push(newPlan)
    return newPlan
}

module.exports = {
    get,
    remove,
    update,
    create,
    getByStopID
}

module.exports.itinerary = itinerary;