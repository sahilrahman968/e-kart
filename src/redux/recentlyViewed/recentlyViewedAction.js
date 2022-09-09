export const UPDATE_RECENTLY_VIEWED = "UPDATE_RECENTLY_VIEWED"

export const updateRecentlyViewed = (recentlyViewedProducts) => {
    return {
        type : UPDATE_RECENTLY_VIEWED,
        payload : recentlyViewedProducts
    }
} 