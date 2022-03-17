import { ActionType } from "../actionTypes"
import { PlaceOrderAction, placeOrderStateI } from "../types/_types";

const initialState: placeOrderStateI = {
    loading: false,
    data: {
        status: false,
        message: ""
    },
    error: ''
}

export const placeOrderReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ActionType.PLACE_ORDER_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case ActionType.PLACE_ORDER_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        }
        case ActionType.PLACE_ORDER_ERROR: {
            return {
                ...state,
                loading: false,
                data: {},
                error: action.payload.message
            }
        }
        default:
            return state;
    }
}