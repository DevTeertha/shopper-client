import { ActionType } from "../actionTypes";

export const LoginAction = (email: string, password: string) => {
    const loginData = new FormData();
    loginData.append('email', email);
    loginData.append('password', password);

    return (dispatch: any) => {
        dispatch({
            type: ActionType.LOGIN_REQUEST
        })
        fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
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
export const logoutAction = () => {
    return {
        type: ActionType.LOGOUT
    }
}