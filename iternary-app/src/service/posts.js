import { api } from './myFetch';

export function getPosts(){ return api('posts'); }
export function getById(id){ return api(`posts/${id}`); }

export function createPost(newPost){ 
    return api('posts', newPost, 'POST'); 
}

export function removePost(id){
    return api(`posts/${id}`, {}, 'DELETE');
}

export function updatePost(id, updatedPost){
    return api(`posts/${id}`, updatedPost, 'PATCH');
}