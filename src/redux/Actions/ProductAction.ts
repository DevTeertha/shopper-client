import { ActionType } from "../actionTypes";

export const addProductAction = (productName: string, price: string, stock: string, variants: string[], file: File) => {
    const addProductFormData = new FormData();
    addProductFormData.append('productName', productName);
    addProductFormData.append('price', price);
    addProductFormData.append('stock', stock);
    for (let variant of variants) {
        addProductFormData.append('variant', variant);
    }
    addProductFormData.append('img', file);
    return (dispatch: any) => {
        dispatch({
            type: ActionType.ADD_PRODUCT_REQUEST
        })
        fetch('https://shopper-server-app.herokuapp.com/api/products/addProduct', {
            method: 'POST',
            body: addProductFormData
        }).then(res => res.json()).then(data => {
            dispatch({
                type: ActionType.ADD_PRODUCT_SUCCESS,
                payload: data
            })
        })
            .catch(err => {
                if (err) {
                    dispatch({
                        type: ActionType.ADD_PRODUCT_ERROR,
                        error: err.message
                    })
                } else {
                    dispatch({
                        type: ActionType.ADD_PRODUCT_ERROR,
                        error: 'Something went wrong'
                    })
                }
            })
    }
}

export const getProductsAction = () => {
    return (dispatch: any) => {
        dispatch({
            type: ActionType.GET_PRODUCTS_REQUEST
        })
        fetch('https://shopper-server-app.herokuapp.com/api/products/getProducts')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: ActionType.GET_PRODUCTS_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: ActionType.GET_PRODUCTS_ERROR,
                    error: err.message
                })
            })
    }
}