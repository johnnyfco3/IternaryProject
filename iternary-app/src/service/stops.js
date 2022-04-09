import { api } from './myFetch';

export function getStops(){ return api('stops'); }
export function getById(id){ return api(`stops/${id}`); }

export function createStop(newStop){ 
    return api('stops', newStop, 'POST'); 
}

export function removeStop(id){
    return api(`stops/${id}`, null, 'DELETE');
}

export function updateStop(id, updatedStop){
    return api(`stops/${id}`, updatedStop, 'PATCH');
}