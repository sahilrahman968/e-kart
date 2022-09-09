import { GET_ALL_PRODUCTS_REQUEST, GET_FILTERED_PRODUCTS } from "./allProductActions"
import { GET_ALL_PRODUCTS_SUCCESS } from "./allProductActions"
import { GET_ALL_PRODUCTS_FAILURE } from "./allProductActions"

const initialState = {
    loading : false,
    products : [],
    error : "",
    filteredProducts : []
}

const allProductsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_PRODUCTS_REQUEST : return {
            ...state,
            loading : true,
        }
        case GET_ALL_PRODUCTS_SUCCESS : return {
            loading : false,
            products : action.payload,
            error : ""
        }
        case GET_ALL_PRODUCTS_FAILURE : return {
            loading : false,
            products : [],
            error : action.payload
        }
        case GET_FILTERED_PRODUCTS : return {
            ...state,
            filteredProducts : action.payload,
        }

        default : return state
    }
}

export default allProductsReducer;