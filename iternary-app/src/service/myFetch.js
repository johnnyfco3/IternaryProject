import session from './session';

const API_ROOT = process.env.REACT_APP_API_ROOT ?? 'http://localhost:3000/api/';

export async function api(url, data = null, method = null) {
    try{
        let response;
        if(data){
            response = await fetch(API_ROOT + url, {
                method: method ?? 'POST',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
        }else{
            response = await fetch(API_ROOT + url);
        }
        if(response.status === 401){
            throw await response.json();
        }
        return await response.json();
    }catch(err){
        if(err.status === 401){
            session.logout();
        }
        throw err;
    }
}