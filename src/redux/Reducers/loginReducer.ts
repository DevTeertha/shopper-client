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
            alert(action.payload.message);
            if (action.payload.status) {
                return {
                    ...state,
                    user: action.payload,
                    loading: false,
                    error: ''
                }
            } else {
                return {
                    ...state,
                    user: {},
                    loading: false,
                    error: action.payload.message
                }
            }
        }
        case ActionType.LOGIN_ERROR: {
            alert("Authentication Failed!");
            return {
                ...state,
                user: {},
                loading: false,
                error: action.payload.message
            }
        }
        case ActionType.REGISTER_REQUEST: {
            return {
                ...state,
                loading: true,
                error: ''
            }
        }
        case ActionType.REGISTER_SUCCESS: {
            alert(action.payload.message);
            if (action.payload.status) {
                return {
                    ...state,
                    user: action.payload,
                    loading: false,
                    error: ''
                }
            } else {
                return {
                    ...state,
                    user: {},
                    loading: false,
                    error: action.payload.message
                }
            }
        }
        case ActionType.REGISTER_ERROR: {
            alert("Authentication Failed!");
            return {
                ...state,
                user: {},
                loading: false,
                error: action.payload.message
            }
        }
        case ActionType.LOGOUT: {
            return initialState;
        }
        default:
            return state;
    }
}