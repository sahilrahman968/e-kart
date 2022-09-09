import { UPDATE_RECENTLY_VIEWED } from "./recentlyViewedAction";

const initialState = {
    products : []
}

const recentlyViewedReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_RECENTLY_VIEWED : return {
            products : action.payload
        }
        default : return state
    }
}

export default recentlyViewedReducer;