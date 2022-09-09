import { Action } from "history";
import { SET_APPLIED, UPDATE_CATEGORY_FILTER,UPDATE_PRICE_FILTER } from "./filterActions";

const initialState = {
    category : [],
    price : [0,0],
    isApplied : false
}

const filterReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_CATEGORY_FILTER : return {
            ...state,
            category : action.payload
        }

        case UPDATE_PRICE_FILTER : return {
            ...state,
            price : action.payload
        }

        case SET_APPLIED : return {
            ...state,
            isApplied : action.payload
        }

        default: return state
    }
}

export default filterReducer


