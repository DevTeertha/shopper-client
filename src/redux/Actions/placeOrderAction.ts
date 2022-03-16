import { UserI } from "../../interfaces/ProductsInterface";
import { ActionType } from "../actionTypes";

export const placeOrderAction = (user: UserI, totalPrice: number, OrderList: [], orderStatus: string) => {
    const placeOrderData = new FormData();
    placeOrderData.append('name', user.name);
    placeOrderData.append('email', user.email);
    placeOrderData.append('totalPrice', totalPrice.toString());
    placeOrderData.append('OrderList', JSON.stringify(OrderList));
    placeOrderData.append('orderStatus', orderStatus);
    placeOrderData.append('date', (new Date()).toString());
    return (dispatch: any) => {
        dispatch({
            type: ActionType.PLACE_ORDER_REQUEST
        })
        fetch('https://shopper-server-app.herokuapp.com/api/user/placeOrder', {
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