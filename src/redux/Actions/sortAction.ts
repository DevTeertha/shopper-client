import { ActionType } from "./../actionTypes";
export const lowToHigSortAction = (payload: any) => {
  return {
    type: ActionType.LOW_TO_HIGH,
    payload,
  };
};

export const highToSortAction = (payload: any) => {
  return {
    type: ActionType.HIGH_TO_LOW,
    payload,
  };
};

export const resetSort = (payload: any) => {
  return {
    type: ActionType.RESET_SORT,
    payload,
  };
};
