import { ADD_TO_CART } from "./cartProductActions"
import { REMOVE_FROM_CART } from "./cartProductActions"

const initialState = {
    cartProducts : [],
}

const cartProductReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART : return {
            cartProducts : action.payload,
        }
        case REMOVE_FROM_CART : return {
            cartProducts : action.payload,
        }

        default : return state
    }
}

export default cartProductReducer;