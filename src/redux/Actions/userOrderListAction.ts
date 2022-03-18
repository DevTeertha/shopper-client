import { ActionType } from "../actionTypes"

export const getUserOrderListAction = (apikey: string) => {
    const userToken = "bearer " + apikey;
    const userHeader = new Headers();
    userHeader.append("Authorization", userToken);
    return async (dispatch: any) => {
        dispatch({
            type: ActionType.GET_USER_ORDER_LIST_REQUEST
        })
        fetch('https://shopper-server-app.herokuapp.com/api/user/getOrderList', {
            method: 'GET',
            headers: userHeader
        }).then((res: any) => res.json()).then(data => {
            dispatch({
                type: ActionType.GET_USER_ORDER_LIST_SUCCESS,
                payload: data
            })
        }).catch((err: any) => {
            dispatch({
                type: ActionType.GET_USER_ORDER_LIST_ERROR
            })
        })
    }
}