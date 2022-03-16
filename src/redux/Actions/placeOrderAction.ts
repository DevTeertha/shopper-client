import { ActionType } from "../actionTypes";

export const placeOrderAction = (userToken: string, totalPrice: number, OrderList: [], orderStatus: string) => {
    const placeOrderData = new FormData();
    placeOrderData.append('userToken', userToken);
    placeOrderData.append('totalPrice', totalPrice.toString());
    placeOrderData.append('OrderList', JSON.stringify(OrderList));
    placeOrderData.append('orderStatus', orderStatus);
    return (dispatch: any) => {
        dispatch({
            type: ActionType.PLACE_ORDER_REQUEST
        })
        fetch('http://localhost:5000/api/user/placeOrder', {
            method: 'POST',
            body: placeOrderData
        }).then(res => res.json()).then(data => {
            if (data.status) {
                alert(data.message);
                dispatch({
                    type: ActionType.PLACE_ORDER_SUCCESS,
                    payload: data.message
                })
            } else {
                alert(data.message);
                dispatch({
                    type: ActionType.PLACE_ORDER_ERROR,
                    payload: data.message
                })
            }
        }).catch((err: any) => {
            dispatch({
                type: ActionType.PLACE_ORDER_ERROR,
                error: err
            })
        })
    }
}