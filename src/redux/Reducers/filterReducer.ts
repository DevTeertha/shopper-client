import { ActionType } from "../actionTypes";
const initialState = {
    data: [],
    type: "all"
};

export const filterReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ActionType.DELIVERED: {
            const deliveredOrders = action.payload.filter((order: any) => {
                return order.orderStatus === "delivered";
            })
            return {
                ...state,
                data: deliveredOrders,
                type: ActionType.DELIVERED
            };
        }
        case ActionType.SHIPPED: {
            const shippedOrders = action.payload.filter((order: any) => {
                return order.orderStatus.toLowerCase() === "shipped";
            })
            return {
                ...state,
                data: shippedOrders,
                type: ActionType.SHIPPED
            };
        }
        case ActionType.PROCESSING: {
            const processingOrders = action.payload.filter((order: any) => {
                return order.orderStatus.toLowerCase() === "processing";
            })
            return {
                ...state,
                data: processingOrders,
                type: ActionType.PROCESSING
            };
        }
        default:
            return state;
    }
}