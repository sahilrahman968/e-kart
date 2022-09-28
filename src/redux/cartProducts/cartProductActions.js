import {store} from "../store"

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"


export const addToCart = (products) => {
    return {
        type : ADD_TO_CART,
        payload : products
    }
}

export const removeFromCart = (products) => {
    return {
        type : REMOVE_FROM_CART,
        payload : products
    }
}


export const selectCartAction = (item) => {
    let cartProducts = store.getState()?.cartProducts?.cartProducts;
    const index = cartProducts.findIndex(e => e?.id == item?.id)
    if(index == -1){
        //cartProducts.push(item);
        cartProducts = [item , ...cartProducts];
        store.dispatch(addToCart(cartProducts));   
    }
    else{
        cartProducts.splice(index,1);
        store.dispatch(removeFromCart(cartProducts));   
    }
}