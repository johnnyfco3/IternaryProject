import { api } from './myFetch';

export function getAdventures(){ return api('adventures'); }
export function getById(id){ return api(`adventures/${id}`); }

export function createAdventure(newAdventure){
    return api('adventures', newAdventure, 'POST');
}

export function removeAdventure(id){
    return api(`adventures/${id}`, {}, 'DELETE');
}

export function updateAdventure(id, adventure){
    return api(`adventures/${id}`, adventure, 'PATCH');
}