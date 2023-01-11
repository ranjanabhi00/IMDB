export const ADD_ACTOR='add_actor';
export const ADD_PRODUCER='add_producer';
export const ADD_MOVIE='add_movie';
export const LOGIN='Login';
export const LOGOUT='Logout';

const addActor=(data)=>{
    return{
        type:ADD_ACTOR,
        payload:data
    }
}
const addProducer=(data)=>{
    return{
        type:ADD_PRODUCER,
        payload:data
    }
}

const addMovie=(data)=>{
    return{
        type:ADD_MOVIE,
        payload:data
    }
}
const login=(user)=>{
    return{
        type:LOGIN,
        payload:user
    }
}

const logout=()=>{
    return{
        type:LOGOUT
    }
}

export {addActor,addMovie,addProducer,login,logout}