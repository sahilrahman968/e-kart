import { combineReducers } from "redux";
import allProductsReducer from "./allProducts/allProductReducer";
import cartProductReducer from "./cartProducts/cartProductReducer";
import filterReducer from "../redux/filter/filterReducer"
import recentlyViewedReducer from "./recentlyViewed/recentlyViewedReducer";

const rootReducer = combineReducers({
    allproducts : allProductsReducer,
    cartProducts : cartProductReducer,
    filter : filterReducer,
    recentlyViewed : recentlyViewedReducer
})

export default rootReducer