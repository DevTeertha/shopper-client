import { ActionType } from "../actionTypes";
import { IProduct } from "../types/_types";

export const cartReducer = (state: IProduct[] = [], action: any) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
