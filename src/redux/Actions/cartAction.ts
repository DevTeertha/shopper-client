import { IProduct } from "../types/_types";
import { ActionType } from "./../actionTypes";

export const addToCart = (payload: IProduct) => {
  return {
    type: ActionType.ADD_TO_CART,
    payload,
  };
};
