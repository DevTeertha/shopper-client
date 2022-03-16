import { ActionType } from "../actionTypes"

const initialState = {
    loading: false,
    data: {},
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
                error: action.error
            }
        }
    }
}