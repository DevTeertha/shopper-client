import { ActionType } from "../actionTypes"

const initialState = {
    loading: false,
    data: [],
    error: ''
}

export const addProductReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ActionType.ADD_PRODUCT_REQUEST: {
            return {
                ...state,
                loading: true,
                error: ''
            }
        }
        case ActionType.ADD_PRODUCT_SUCCESS: {
            alert("Product Added Successfully");
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        }
        case ActionType.ADD_PRODUCT_ERROR: {
            alert(action.error);
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
            alert(action.error);
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