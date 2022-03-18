import { ActionType } from "../actionTypes";

export const LoginAction = (email: string, password: string) => {
    const loginData = new FormData();
    loginData.append('email', email);
    loginData.append('password', password);

    return (dispatch: any) => {
        dispatch({
            type: ActionType.LOGIN_REQUEST
        })
        fetch('https://shopper-server-app.herokuapp.com/api/user/login', {
            method: 'POST',
            body: loginData
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: ActionType.LOGIN_SUCCESS,
                    payload: data
                })
            }).catch(err => {
                if (err) {
                    dispatch({
                        type: ActionType.LOGIN_ERROR,
                        payload: err.message
                    })
                }
            })
    }
}
export const registerAction = (name: string, email: string, password: string) => {
    const registerData = new FormData();
    registerData.append('name', name);
    registerData.append('email', email);
    registerData.append('password', password);
    return (dispatch: any) => {
        dispatch({
            type: ActionType.REGISTER_REQUEST
        })
        fetch('https://shopper-server-app.herokuapp.com/api/user/register', {
            method: 'POST',
            body: registerData
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: ActionType.REGISTER_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: ActionType.REGISTER_ERROR,
                    payload: err.message
                })
            })
    }
}
export const logoutAction = () => {
    return {
        type: ActionType.LOGOUT
    }
}
export const getUserDetailsAction = (apikey: string) => {
    const userToken = "bearer " + apikey;
    const userHeader = new Headers();
    userHeader.append("Authorization", userToken);
    return (dispatch: any) => {
        fetch("https://shopper-server-app.herokuapp.com/api/user/userDetails", {
            method: 'GET',
            headers: userHeader
        })
            .then(response => response.json())
            .then(result => {
                dispatch({
                    type: ActionType.GET_USER_DETAILS_SUCCESS,
                    payload: result
                })
            })
            .catch(error =>
                dispatch({
                    type: ActionType.GET_USER_DETAILS_ERROR,
                    payload: error,
                    error: error.message
                })
            );
    }
}