import {ADD_TO_CART} from '../constant';

const IntialState = {
    cartData = []
}

export default function cartItems(state=IntialState,action){
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cartData:action.data
            }
            break;
        default:
            return state 
    }
} 