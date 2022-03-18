import { ActionType } from "../actionTypes";

const initialState = {
  laoding: false,
  data: [],
  error: "",
};
export const getUserOrderListReducer = (
  state: any = initialState,
  action: any
) => {
  switch (action.type) {
    case ActionType.GET_USER_ORDER_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ActionType.GET_USER_ORDER_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.reverse(),
      };
    }
    case ActionType.GET_USER_ORDER_LIST_ERROR: {
      return {
        ...state,
        loading: false,
        data: [],
        error: "Something Went Error! Please Refresh",
      };
    }
    default:
      return state;
  }
};
