import { api } from './myFetch';

export function getFlights(){ return api('flights'); }
export function getById(id){ return api(`flights/${id}`); }
export function getByAdventure(id){ return api(`flights/adventure/${id}`); }

export function createFlight(newFlight){
    return api('flights', newFlight, 'POST');
}

export function removeFlight(id){
    return api(`flights/${id}`, {}, 'DELETE');
}

export function updateFlight(id, flight){
    return api(`flights/${id}`, flight, 'PATCH');
}