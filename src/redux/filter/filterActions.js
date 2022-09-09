export const UPDATE_CATEGORY_FILTER = "UPDATE_CATEGORY_FILTER"
export const UPDATE_PRICE_FILTER = "UPDATE_PRICE_FILTER"
export const SET_APPLIED = "SET_APPLIED"


export const updateCategoryFilter = (categories) => {
    return {
        type : UPDATE_CATEGORY_FILTER,
        payload : categories
    }
}

export const updatePriceFilter = (price) => {
    return {
        type : UPDATE_PRICE_FILTER,
        payload : price
    }
}

export const setApplied = (isApplied) => {
    return {
        type : SET_APPLIED,
        payload : isApplied
    }
}
