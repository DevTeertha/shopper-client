import { cartinitialState, cartItemI } from "../../interfaces/ProductsInterface";
import { ActionType } from "../actionTypes";
let totalPrice: number = 0;
let totalItems: number = 0
const initialState: cartinitialState = {
    cartItems: [],
    totalItems: totalItems,
    totalPrice: totalPrice,
}
export const cartReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ActionType.ADD_TO_CART: {
            const itemIndex: any = state.cartItems.findIndex((item: cartItemI) => item._id === action.payload._id);
            alert("Product added to cart successfully!");
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity = parseInt(state.cartItems[itemIndex].quantity) + parseInt(action.payload.quantity);
                const quantity: number = parseInt(action.payload.quantity);
                const price: number = parseInt(action.payload.price);
                totalPrice = totalPrice + (quantity * price);
                totalItems = state.cartItems.length;
                return {
                    ...state,
                    totalItems,
                    totalPrice
                }
            } else {
                totalPrice = totalPrice + (parseInt(action.payload.quantity) * parseInt((action.payload.price.split(',')).join('')))
                totalItems = state.cartItems.length + 1;
                return {
                    cartItems: [...state.cartItems, action.payload].reverse(),
                    totalItems,
                    totalPrice
                };
            }
        }
        case ActionType.REMOVE_FROM_CART: {
            totalItems = 0;
            totalPrice = 0;
            const newState = state.cartItems.filter((list: any) => list._id !== action.payload)
            for (let i = 0; i < newState.length; i++) {
                let element = newState[i];
                totalPrice = totalPrice + parseInt(element.price);
            }
            totalItems = newState.length;
            return {
                cartItems: newState,
                totalPrice,
                totalItems
            }
        }
        case ActionType.REMOVE_ALL_CART: {
            return {
                cartItems: [],
                totalPrice: 0,
                totalItems: 0
            }
        }
        default:
            return state;
    }
}
