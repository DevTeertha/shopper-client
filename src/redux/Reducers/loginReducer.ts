import { setStorage } from "../../components/localStorageHandler";
import { ActionType } from "../actionTypes";
import { useRouter } from 'next/router';

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
            setStorage('userToken', action.payload.token);
            setStorage('userName', action.payload.data.name);
            setStorage('userEmail', action.payload.data.email);
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