import { api } from './myFetch';

export function getUsers(){ return api('users'); }
export function getById(id){ return api(`users/${id}`); }
export function getByEmail(email){ return api(`users/email/${email}`); }

export function createUser(newUser){ 
    return api('users', newUser, 'POST'); 
}

export function login(email, password){
    return api('users/login', { email, password }, 'POST');
}

export function logout(){
    return api('users/logout', null, 'POST');
}

export function removeUser(id){
    return api(`users/${id}`, null, 'DELETE');
}

export function updateUser(id, updatedUser){
    return api(`users/${id}`, updatedUser, 'PATCH');
}