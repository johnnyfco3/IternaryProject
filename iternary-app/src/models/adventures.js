const adventures = [
    { 
        id: 1, 
        location: "New York",  
        startD: "2022-06-11", 
        endD: "2022-07-03", 
        background: "https://images.unsplash.com/photo-1543716091-a840c05249ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
        description: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.",
        link: "https://goo.gl/maps/Dsd9XgPXUDoFBR9F8", 
        user: "example@gmail.com" 
    },
    { 
        id: 2, 
        location: "Australia", 
        startD: "2021-02-20", 
        endD: "2021-03-03", 
        background: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", 
        description: "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbour front Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby.",
        link: "https://goo.gl/maps/qc9N74ZiEbnoL8mVA",
        user: "example@gmail.com" 
    },
    { 
        id: 3, 
        location: "Italy", 
        startD: "2022-02-25", 
        endD: "2022-03-05", 
        background: "https://images.unsplash.com/photo-1480548004877-593316be2bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
        description: "Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces. The central square, Piazza San Marco, contains St. Mark’s Basilica, which is tiled with Byzantine mosaics, and the Campanile bell tower offering views of the city’s red roofs.",
        link: "https://goo.gl/maps/jdAxNDCYgBXoLdY69",
        user: "example@gmail.com" 
    },
    { 
        id: 4, 
        location: "Europe", 
        startD: "2022-02-26", 
        endD: "2022-02-26", 
        background: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
        description: "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history.",
        link: "https://goo.gl/maps/Y6z271kWarFVRdG17",
        user: "example1@gmail.com" 
    }
]

function get(id){
    return adventures.find(location => location.id === parseInt(id))
}

function remove(id){
    const index = adventures.findIndex(location => location.id === parseInt(id))
    adventures.splice(index, 1)
    return adventures[0]
}

function update(id, updatedLocation){
    const index = adventures.findIndex(location => location.id === parseInt(id))
    const oldLocation = adventures[index]

    updatedLocation = adventures[index] = { ...oldLocation, ...updatedLocation }

    return updatedLocation
}

function create(newLocation){
    newLocation.id = adventures.length + 1
    adventures.push(newLocation)
    return newLocation
}

export default adventures;