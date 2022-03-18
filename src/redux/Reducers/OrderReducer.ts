import { orderState } from "../../interfaces/ProductsInterface";
import { ActionType } from "../actionTypes";

const initialState: orderState = {
  loading: false,
  data: [],
};
const changeInitialState: any = {
  loading: false,
  data: {},
  error: "",
};
export const getOrderReducer = (
  state: orderState = initialState,
  action: any
) => {
  switch (action.type) {
    case ActionType.GET_ORDERS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ActionType.GET_ORDERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.reverse(),
      };
    }
    case ActionType.GET_ORDERS_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export const changeOrderStatusReducer = async (
  state: any = changeInitialState,
  action: any
) => {
  switch (action.type) {
    case ActionType.CHANGE_ORDER_STATUS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ActionType.CHANGE_ORDER_STATUS_SUCCESS: {
      alert(action.payload.message);
      return {
        ...state,
        loading: false,
        data: action.payload.message,
      };
    }
    case ActionType.CHANGE_ORDER_STATUS_ERROR: {
      alert(action.payload.message);
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    }
    default:
      return state;
  }
};
