import { ActionType } from "../actionTypes";
const initialState = {
    loading: false,
    data: {},
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
            alert(action.payload.message);
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        }
        case ActionType.ADD_PRODUCT_ERROR: {
            alert(action.payload.message);
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
export const editProductReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ActionType.EDIT_PRODUCT_REQUEST: {
            return {
                ...state,
                loading: true,
                error: ''
            }
        }
        case ActionType.EDIT_PRODUCT_SUCCESS: {
            alert(action.payload.message);
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        }
        case ActionType.EDIT_PRODUCT_ERROR: {
            alert(action.payload.message);
            return {
                ...state,
                loading: false,
                data: {},
                error: action.error
            }
        }
        default:
            return state;
    }
}
export const deleteProductReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ActionType.DELETE_PRODUCT_REQUEST: {
            return {
                ...state,
                loading: true,
                error: ''
            }
        }
        case ActionType.DELETE_PRODUCT_SUCCESS: {
            alert("Deleted Successfully");
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        }
        case ActionType.DELETE_PRODUCT_ERROR: {
            alert(action.payload.message);
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