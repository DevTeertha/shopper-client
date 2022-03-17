import { getOrdersI } from "../../interfaces/ProductsInterface";
import { ActionType } from "./../actionTypes";

export const getOrderListActions = () => {
    return async (dispatch: any) => {
        dispatch({
            type: ActionType.GET_ORDERS_REQUEST
        })
        fetch('https://shopper-server-app.herokuapp.com/api/orders/getAllOrders')
            .then(res => res.json())
            .then((data: getOrdersI[]) => {
                console.log("data: ", data);
                dispatch({
                    type: ActionType.GET_ORDERS_SUCCESS,
                    payload: data
                })
            }).catch((err: any) => {
                dispatch({
                    type: ActionType.GET_ORDERS_ERROR
                })
            })
    }
}