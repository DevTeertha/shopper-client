import { ActionType } from "../actionTypes";
const initialState: any[] = [];

export const sortReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ActionType.LOW_TO_HIGH: {
      const lowToHighProducts = action.payload.sort((n1: any, n2: any) => {
        const price1 = parseInt(n1.variant[0].price);
        const price2 = parseInt(n2.variant[0].price);
        return price1 - price2;
      });
      return lowToHighProducts;
    }
    case ActionType.HIGH_TO_LOW: {
      const highToLowProducts = action.payload.sort((n1: any, n2: any) => {
        const price1 = parseInt(n1.variant[0].price);
        const price2 = parseInt(n2.variant[0].price);
        return price2 - price1;
      });
      return highToLowProducts;
    }
    default:
      return state;
  }
};
