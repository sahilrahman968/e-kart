import {store} from "../store"

export const ADD_TO_LIKED = "ADD_TO_LIKED"
export const REMOVE_FROM_LIKED = "REMOVE_FROM_LIKED"


export const addToLiked = (products) => {
    return {
        type : ADD_TO_LIKED,
        payload : products
    }
}

export const removeFromLiked = (products) => {
    return {
        type : REMOVE_FROM_LIKED,
        payload : products
    }
}


export const selectLikedAction = (item) => {
    let likedProducts = store.getState()?.likedProducts?.likedProducts;
    const index = likedProducts.findIndex(e => e?.id === item?.id)
    if(index === -1){
        //likedProducts.push(item);
        likedProducts = [item , ...likedProducts];
        store.dispatch(addToLiked(likedProducts));   
    }
    else{
        likedProducts.splice(index,1);
        store.dispatch(removeFromLiked(likedProducts));   
    }
}