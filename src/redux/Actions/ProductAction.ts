import { VariantI } from "../../interfaces/ProductsInterface";
import { ActionType } from "../actionTypes";

export const editProductAction = (
  _id: string,
  productName: string,
  description: string,
  stock: string,
  variants: VariantI[]
) => {
  const editProductFormData = new FormData();
  editProductFormData.append("_id", _id);
  editProductFormData.append("productName", productName);
  editProductFormData.append("description", description);
  editProductFormData.append("stock", stock);
  editProductFormData.append("variant", JSON.stringify(variants));
  return (dispatch: any) => {
    dispatch({
      type: ActionType.EDIT_PRODUCT_REQUEST,
    });
    fetch("https://shopper-server-app.herokuapp.com/api/products/editProduct", {
      method: "PUT",
      body: editProductFormData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data edit: ", data);
        if (data.status) {
          dispatch({
            type: ActionType.EDIT_PRODUCT_SUCCESS,
            payload: data,
          });
        } else {
          dispatch({
            type: ActionType.EDIT_PRODUCT_ERROR,
            error: data.message,
          });
        }
      })
      .catch((err) => {
        throw err;
      });
  };
};
export const addProductAction = (
  productName: string,
  description: string,
  stock: string,
  variants: VariantI[],
  file: File
) => {
  console.log("productName: ", productName);
  console.log("description: ", description);
  console.log("stock: ", stock);
  console.log("variants: ", variants);
  const addProductFormData = new FormData();
  addProductFormData.append("productName", productName);
  addProductFormData.append("description", description);
  addProductFormData.append("stock", stock);
  addProductFormData.append("variant", JSON.stringify(variants));
  addProductFormData.append("img", file);
  return (dispatch: any) => {
    dispatch({
      type: ActionType.ADD_PRODUCT_REQUEST,
    });
    fetch("https://shopper-server-app.herokuapp.com/api/products/addProduct", {
      method: "POST",
      body: addProductFormData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          dispatch({
            type: ActionType.ADD_PRODUCT_SUCCESS,
            payload: data,
          });
        } else {
          dispatch({
            type: ActionType.ADD_PRODUCT_ERROR,
            error: data.message,
          });
        }
      })
      .catch((err: any) => {
        dispatch({
          type: ActionType.ADD_PRODUCT_ERROR,
          error: "Something went wrong",
        });
      });
  };
};

export const getProductsAction = () => {
  return (dispatch: any) => {
    dispatch({
      type: ActionType.GET_PRODUCTS_REQUEST,
    });
    fetch("https://shopper-server-app.herokuapp.com/api/products/getProducts")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ActionType.GET_PRODUCTS_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionType.GET_PRODUCTS_ERROR,
          error: err.message,
        });
      });
  };
};

export const deleteProductAction = (productId: string) => {
  const deleteProductData = new FormData();
  deleteProductData.append("productId", productId);
  return (dispatch: any) => {
    dispatch({
      type: ActionType.DELETE_PRODUCT_REQUEST,
    });
    fetch(
      "https://shopper-server-app.herokuapp.com/api/products/deleteProduct",
      {
        method: "DELETE",
        body: deleteProductData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("action data: ", data);
        if (data.status) {
          dispatch({
            type: ActionType.DELETE_PRODUCT_SUCCESS,
            payload: data,
          });
        } else {
          dispatch({
            type: ActionType.DELETE_PRODUCT_ERROR,
            error: data.message,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: ActionType.DELETE_PRODUCT_ERROR,
          error: err.message,
        });
      });
  };
};
