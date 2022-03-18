import { getOrdersI } from "../../interfaces/ProductsInterface";
import { ActionType } from "./../actionTypes";

export const getOrderListActions = () => {
    return async (dispatch: any) => {
        dispatch({
            type: ActionType.GET_ORDERS_REQUEST
        })
        fetch('http://localhost:5000/api/orders/getAllOrders')
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

export const changeOrderStatusActions = (orderId: string, user: string, orderList: any, orderStatus: string) => {
    const changeOrderData = new FormData();
    changeOrderData.append('orderId', orderId);
    changeOrderData.append('orderList', JSON.stringify(orderList));
    changeOrderData.append('orderStatus', orderStatus);
    return (dispatch: any) => {
        dispatch({
            type: ActionType.CHANGE_ORDER_STATUS_REQUEST
        })
        fetch('http://localhost:5000/api/orders/changeStatus', {
            method: 'PUT',
            body: changeOrderData
        }).then(res => res.json()).then(data => {
            dispatch({
                type: ActionType.CHANGE_ORDER_STATUS_SUCCESS,
                payload: data
            })
        }).catch(err => {
            dispatch({
                type: ActionType.CHANGE_ORDER_STATUS_ERROR,
                error: err
            })
        })
    }
}