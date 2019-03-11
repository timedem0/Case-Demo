import ActionTypes from '../actions/ActionTypes';

//Define initial states of reducer
export const initialState = {
    isLoading: false,
    categoryList: [],
    category: [],
    categoryRnd: [],
    // categoryIdsFound: null,
    // categoryCurrent: null,
};

export default function categories(state=initialState, action) {
    switch (action.type) {

        // SHOW ALL
        case ActionTypes.CATEGORIES_ALL_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.CATEGORIES_ALL_OK:
            return {
                ...state,
                categoryList: action.categoryList,
                isLoading: false,
            };
        case ActionTypes.CATEGORIES_ALL_X:
            return {
                ...state,
                isLoading: false,
            };
        
        // ADD
        case ActionTypes.CATEGORY_ADD_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.CATEGORY_ADD_OK:
            return {
                ...state,
                isLoading: false,
            };
        case ActionTypes.CATEGORY_ADD_X:
            return {
                ...state,
                isLoading: false,
            };
        
        // RETURN RANDOM
        case ActionTypes.CATEGORY_RND_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.CATEGORY_RND_OK:
            return {
                ...state,
                categoryRnd: action.categoryRnd,
                isLoading: false,
            };
        case ActionTypes.CATEGORY_RND_X:
            return {
                ...state,
                categoryRnd: action.categoryRnd,
                isLoading: false,
            };
        
        // DELETE
        case ActionTypes.CATEGORY_DEL_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.CATEGORY_DEL_OK:
            return {
                ...state,
                isLoading: false,
            };
        case ActionTypes.CATEGORY_DEL_X:
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
}