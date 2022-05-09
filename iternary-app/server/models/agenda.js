const con = require('./db_connect')

async function createTable(){
    const sql = `CREATE TABLE IF NOT EXISTS agendas (
        agendaID INT NOT NULL AUTO_INCREMENT,
        text VARCHAR(255) NOT NULL,
        completed BOOLEAN NOT NULL,
        stopID INT NOT NULL,
        CONSTRAINT agenda_pk PRIMARY KEY (agendaID),
        CONSTRAINT agenda_fk FOREIGN KEY (stopID) REFERENCES stops(stopID))`;
    await con.query(sql)
}
createTable()

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

async function get(id){
    const plan = await con.query(`SELECT * FROM agendas WHERE agendaID = ${id}`)
    if(!plan[0]){
        throw { status: 404, message: `Plan with id ${id} not Found` }
    }
    return { ...plan[0] }
}

async function getByStopID(id){
    const plans = await con.query(`SELECT * FROM agendas WHERE stopID = ${id}`)
    if(!plans[0]){
        throw { status: 404, message: `Plan with stopID ${id} not Found` }
    }
    return plans.map(plan => ({ ...plan }))
}

async function remove(id){
    const result = await con.query(`DELETE FROM agendas WHERE agendaID = ${id}`)
    if(!result.affectedRows){
        throw { status: 404, message: `Plan with id ${id} not Found` }
    }
    return { message: `Plan with id ${id} deleted` }
}

async function update(id, updatedPlan){
    const plan = await con.query(`UPDATE agendas SET 
        text = '${updatedPlan.text}',
        completed = ${updatedPlan.completed},
        stopID = ${updatedPlan.stopID}
        WHERE agendaID = ${id}`)

    return { message: `Plan with id ${id} updated` }
}

async function create(newPlan){
    const plan = await con.query(`INSERT INTO agendas 
        (text, completed, stopID) 
        VALUES ('${newPlan.text}', ${newPlan.completed}, ${newPlan.stopID})`)

    return { ...newPlan, agendaID: plan.insertId }
}

module.exports = {
    get,
    remove,
    update,
    create,
    getByStopID,
    async getList(){
        const plans = await con.query(`SELECT * FROM agendas`)
        return plans.map(plan => ({ ...plan }))
    }
}