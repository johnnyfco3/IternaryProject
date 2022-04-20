import { api } from './myFetch';

export function getFriends(){ return api('friends'); }
export function getById(id){ return api(`friends/${id}`); }
export function getByUser(email){ return api(`friends/email/${email}`); }

export function createFriend(newFriend){
    return api('friends', newFriend, 'POST');
}

export function addFriends(user, email){
    return api(`friends/${user}/${email}`, null, 'POST');
}

export function removeIndex(id){
    return api(`friends/${id}`, {}, 'DELETE');
}

export function removeFriend(user, email){
    return api(`friends/email/${user}/${email}`, {}, 'DELETE');
}