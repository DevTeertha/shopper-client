import { ActionType } from "./../actionTypes";

export const addToCart = (payload: any) => {
  return {
    type: ActionType.ADD_TO_CART,
    payload,
  };
};

export const removeToCart = (payload: any) => {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload,
  };
}
export const removeAllCart = () => {
  return {
    type: ActionType.REMOVE_ALL_CART
  };
}
