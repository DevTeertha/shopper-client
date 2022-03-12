import { ActionType } from "../actionTypes";

const initialState = {
    loading: false,
    user: {},
    error: ''
}

export const loginReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ActionType.LOGIN_REQUEST: {
            return {
                ...state,
                loading: true,
                error: ''
            }
        }
        case ActionType.LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: ''
            }
        }
        case ActionType.LOGIN_ERROR: {
            return {
                ...state,
                user: {},
                loading: false,
                error: 'Email/Password Wrong!'
            }
        }
        case ActionType.LOGOUT: {
            return initialState;
        }
        default:
            return state;
    }
}