import {ADD_TO_CART,REMOVE_FROM_CART} from '../constant';

const IntialState = {
    cartData : []
}

export default function cartItems(state=[],action){
    switch(action.type){
        case ADD_TO_CART:
            return [
                ...state,
                {cartData:action.data}
            ]
            break;
        case REMOVE_FROM_CART:
            console.log("State   :",state)
            state.pop();
            return [
                ...state
            ]
            break;
        default:
            return state 
    }
} 