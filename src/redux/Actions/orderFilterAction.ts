import { ActionType } from "../actionTypes";

export const processingOrderAction = (payload: any) => {
  return {
    type: ActionType.PROCESSING,
    payload,
  };
};
export const deliveredOrderAction = (payload: any) => {
  return {
    type: ActionType.DELIVERED,
    payload,
  };
};
export const shippedOrderAction = (payload: any) => {
  return {
    type: ActionType.SHIPPED,
    payload,
  };
};
