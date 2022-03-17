import { ActionType } from "../actionTypes";

const initialState = {
    loading: false,
    data: [],
    error: ''
}
export const getProductsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ActionType.GET_PRODUCTS_REQUEST: {
            return {
                ...state,
                loading: true,
                error: ''
            }
        }
        case ActionType.GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        }
        case ActionType.GET_PRODUCTS_ERROR: {
            return {
                ...state,
                loading: false,
                data: [],
                error: action.error
            }
        }
        default:
            return state;
    }
}