import { ADD_ACTOR, ADD_MOVIE, ADD_PRODUCER, LOGIN, LOGOUT } from "./action"

const initState={
    Movies:[],
    Actors:[],
    Producers:[],
    user:""
}

export const reducer=(state=initState,{type,payload})=>{

switch(type){

    case ADD_ACTOR:{
          return {
            ...state,Actors:payload
          }
    }
    case ADD_PRODUCER:{
         return {
            ...state,Producers:payload
         }

    }
    case ADD_MOVIE:{
           return {
            ...state,Movies:payload
           }
    }

    case LOGIN:{
            return {
                ...state,user:payload
            }
    }
     case LOGOUT:{
        return {
            ...state,user:""
        }

     }
     default :{
              return state
     }
}

}