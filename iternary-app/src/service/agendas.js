import { api } from './myFetch';

export function getAgendas(){ return api('agendas'); }
export function getById(id){ return api(`agendas/${id}`); }
export function getByStopID(id){ return api(`agendas/stop/${id}`); }

export function createAgenda(newAgenda){
    return api('agendas', newAgenda, 'POST');
}

export function removeAgenda(id){
    return api(`agendas/${id}`, null, 'DELETE');
}

export function updateAgenda(id, agenda){
    return api(`agendas/${id}`, agenda, 'PATCH');
}
