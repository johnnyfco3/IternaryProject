import { api } from './myFetch';

export function getFriends(){ return api('friends'); }
export function getById(id){ return api(`friends/${id}`); }
export function getByUser(id){ return api(`friends/user/${id}`); }

export function createFriend(newFriend){
    return api('friends', newFriend, 'POST');
}

export function removeFriend(friend, userID){
    return api(`friends/${friend}/${userID}`, {}, 'DELETE');
}