export const GET_ALL_PRODUCTS_REQUEST = "GET_ALL_PRODUCTS_REQUEST"
export const GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS"
export const GET_ALL_PRODUCTS_FAILURE = "GET_ALL_PRODUCTS_FAILURE"
export const GET_FILTERED_PRODUCTS = "GET_FILTERED_PRODUCTS"


export const getAllProductsRequest = () => {
    return {
        type : GET_ALL_PRODUCTS_REQUEST
    }
}

export const getAllProductsSuccess = (products) => {
    return {
        type : GET_ALL_PRODUCTS_SUCCESS,
        payload : products
    }
}

export const getAllProductsFailure = (error) => {
    return {
        type : GET_ALL_PRODUCTS_FAILURE,
        payload : error
    }
}

export const getFilteredProducts = (products) => {
    return {
        type : GET_FILTERED_PRODUCTS,
        payload : products
    }
}