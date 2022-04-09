import { api } from './myFetch';

export function getFriends(){ return api('friends'); }
export function getById(id){ return api(`friends/${id}`); }
export function getByEmail(email){ return api(`friends/email/${email}`); }

export function createFriend(newFriend){
    return api('friends', newFriend, 'POST');
}

export function addFriends(id, email){
    return api(`friends/${id}`, email, 'POST');
}

export function removeIndex(id){
    return api(`friends/${id}`, null, 'DELETE');
}

export function removeFriend(id, email){
    return api(`friends/email/${id}`, email, 'DELETE');
}