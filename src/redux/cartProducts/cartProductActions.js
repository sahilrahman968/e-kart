import store from "../store"

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
    console.log("id=",item)
    console.log("id=",store.getState()?.cartProducts?.cartProducts)
    let cartProducts = store.getState()?.cartProducts?.cartProducts;
    const index = cartProducts.findIndex(e => e?.id == item?.id)
    console.log(cartProducts.findIndex(e => e?.id == item?.id)/* .filter(product => product?.id === item?.id).length */)
    if(index == -1){
        cartProducts.push(item);
        store.dispatch(addToCart(cartProducts));   
    }
    else{
        cartProducts.splice(index,1);
        store.dispatch(removeFromCart(cartProducts));   
    }
}