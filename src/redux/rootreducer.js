import { combineReducers } from "redux";
import allProductsReducer from "./allProducts/allProductReducer";
import cartProductReducer from "./cartProducts/cartProductReducer";
import filterReducer from "../redux/filter/filterReducer"
import recentlyViewedReducer from "./recentlyViewed/recentlyViewedReducer";
import likedProductReducer from "./ikedProducts/likedProductReducer";

const rootReducer = combineReducers({
    allproducts : allProductsReducer,
    cartProducts : cartProductReducer,
    likedProducts : likedProductReducer,
    filter : filterReducer,
    recentlyViewed : recentlyViewedReducer
})

export default rootReducer