import { api } from './myFetch';

export function getComments(){ return api('comments'); }
export function getById(id){ return api(`comments/${id}`); }

export function createComment(newComment){
    return api('comments', newComment, 'POST');
}

export function removeComment(id){
    return api(`comments/${id}`, null, 'DELETE');
}

export function updateComment(id, comment){
    return api(`comments/${id}`, comment, 'PATCH');
}