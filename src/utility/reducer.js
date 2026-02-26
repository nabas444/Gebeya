import {Type} from './action.type'
export const reducer={state,action}=>{
backet:[]
}
export const reducer=(state,action)={
switch(action.type) {
    case Type.ADD_TO_BASKET:
        return( ...state,
            basket:[...state.basket,action.item])

           
        
        
        break;

    default:

        return state
        
}
}

const [state,dispatch]=useReducer(reducer,initialState)