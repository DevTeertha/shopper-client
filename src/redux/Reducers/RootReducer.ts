import { addProductReducer, getProductsReducer } from './productsReducer';
import { cartReducer } from "./cartReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./loginReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  login: loginReducer,
  addProduct: addProductReducer,
  productState: getProductsReducer
});

export default rootReducer;
