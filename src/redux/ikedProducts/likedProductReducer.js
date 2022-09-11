import { ADD_TO_LIKED } from "./likedProductActions"
import { REMOVE_FROM_LIKED } from "./likedProductActions"

const initialState = {
    likedProducts : [],
}

const likedProductReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_LIKED : return {
            likedProducts : action.payload,
        }
        case REMOVE_FROM_LIKED : return {
            likedProducts : action.payload,
        }

        default : return state
    }
}

export default likedProductReducer;