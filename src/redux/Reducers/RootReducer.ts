import { getProductsReducer } from './productsReducer';
import { cartReducer } from "./cartReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer, userDetailsReducer } from "./loginReducer";
import { sortReducer } from './sortReducer';
import { addProductReducer, deleteProductReducer, editProductReducer } from './productActionReducer';
import { placeOrderReducer } from './placeOrderReducer';
import { getOrderReducer } from './OrderReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  login: loginReducer,
  addProduct: addProductReducer,
  editProduct: editProductReducer,
  deleteProduct: deleteProductReducer,
  placeOrderReducer,
  getAllOrders: getOrderReducer,
  productState: getProductsReducer,
  sortedProductState: sortReducer,
  userDetails: userDetailsReducer
});

export default rootReducer;
