import { removeStorage } from "../../components/localStorageHandler";
import { ActionType } from "../actionTypes";
import { loginUserStateI, userDetailsStateI } from "../types/_types";

const initialState: loginUserStateI = {
    loading: false,
    user: {},
    error: ''
}

const userDetailsInitialState: userDetailsStateI = {
    loading: false,
    user: {
        status: false,
        user: {
            name: "",
            email: "",
            userId: ""
        },
        message: ""
    },
    error: ""
}
export const userDetailsReducer = (state: userDetailsStateI = userDetailsInitialState, action: any) => {
    switch (action.type) {
        case ActionType.GET_USER_DETAILS_SUCCESS: {
            return {
                ...state,
                user: action.payload
            }
        }
        case ActionType.GET_USER_DETAILS_ERROR: {
            alert("Authentication failed!");
            removeStorage();
            return {
                ...state,
                error: action.payload.message
            }
        }
        default:
            return state;
    }
}

export const loginReducer = (state: loginUserStateI = initialState, action: any) => {
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
            if (action.payload.status) {
                alert('Registration Successful!');
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