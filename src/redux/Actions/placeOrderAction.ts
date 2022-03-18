import { ActionType } from "../actionTypes";

export const placeOrderAction = (
  userToken: string,
  totalPrice: number,
  OrderList: [],
  orderStatus: string
) => {
  const placeOrderData = new FormData();
  placeOrderData.append("userToken", userToken);
  placeOrderData.append("totalPrice", totalPrice.toString());
  placeOrderData.append("OrderList", JSON.stringify(OrderList));
  placeOrderData.append("orderStatus", orderStatus);
  placeOrderData.append("date", new Date().toString());
  return (dispatch: any) => {
    dispatch({
      type: ActionType.PLACE_ORDER_REQUEST,
    });
    fetch("https://shopper-server-app.herokuapp.com/api/user/placeOrder", {
      method: "POST",
      body: placeOrderData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          dispatch({
            type: ActionType.PLACE_ORDER_SUCCESS,
            payload: data,
          });
        } else {
          dispatch({
            type: ActionType.PLACE_ORDER_ERROR,
            payload: data,
          });
        }
      })
      .catch((err: any) => {
        dispatch({
          type: ActionType.PLACE_ORDER_ERROR,
          error: err,
        });
      });
  };
};
