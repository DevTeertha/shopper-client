import { addProductReducer, getProductsReducer } from './productsReducer';
import { cartReducer } from "./cartReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./loginReducer";
import { sortReducer } from './sortReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  login: loginReducer,
  addProduct: addProductReducer,
  productState: getProductsReducer,
  sortedProductState: sortReducer
});

export default rootReducer;
