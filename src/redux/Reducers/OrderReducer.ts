import { orderState } from "../../interfaces/ProductsInterface";
import { ActionType } from "../actionTypes";

const initialState: orderState = {
    loading: false,
    data: []
}
export const getOrderReducer = (state: orderState = initialState, action: any) => {
    switch (action.type) {
        case ActionType.GET_ORDERS_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case ActionType.GET_ORDERS_SUCCESS: {
            console.log("action.payload: ", action.payload);
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        }
        case ActionType.GET_ORDERS_ERROR: {
            return {
                ...state,
                loading: false
            }
        }
        default:
            return state
    }
}