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

function get(id){
    return itinerary.find(plan => plan.id === parseInt(id))
}

function remove(id){
    const index = itinerary.findIndex(plan => plan.id === parseInt(id))
    itinerary.splice(index, 1)
    return itinerary[0]
}

function update(id, updatedPlan){
    const index = itinerary.findIndex(plan => plan.id === parseInt(id))
    const oldPlan = itinerary[index]

    updatedPlan = itinerary[index] = { ...oldPlan, ...updatedPlan }

    return updatedPlan
}

function create(newPlan){
    newPlan.id = itinerary.length + 1
    newPlan.completed = false
    itinerary.push(newPlan)
    return newPlan
}

export default itinerary;