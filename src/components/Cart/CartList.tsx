import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItemI } from "../../interfaces/ProductsInterface";
import { removeAllCart } from "../../redux/Actions/cartAction";
import { placeOrderAction } from "../../redux/Actions/placeOrderAction";
import { getStorage } from "../localStorageHandler";
import { CartCard } from "./CartCard";

const CartList = () => {
  const dispatch = useDispatch();
  const cartState: any = useSelector((state: any) => state.cart);
  const placeOrderState: any = useSelector(
    (state: any) => state.placeOrderReducer
  );

  const placedOrderHandler = () => {
    if (getStorage("userToken")) {
      const userToken: string = getStorage("userToken");
      dispatch(
        placeOrderAction(
          userToken,
          cartState.totalPrice,
          cartState.cartItems,
          "processing"
        )
      );
    }
  };

  useEffect(() => {
    if (placeOrderState.data.status) {
      alert("Order has been placed successfully!");
      dispatch(removeAllCart());
    }
  }, [placeOrderState]);
  return (
    <div className="container mx-auto px-5 py-12">
      <h1 className="text-3xl py-3">Your Cart</h1>
      <div className="py-3">
        {cartState.cartItems.length > 0 ? (
          <div>
            <div className="bg-white py-4 px-2 rounded my-3">
              {cartState.cartItems.map((item: cartItemI, key: number) => {
                return <CartCard item={item} key={key} />;
              })}
              <div className="flex py-3">
                <div className="w-9/12">
                  <h1 className="text-2xl text-gray-600 font-bold">Total: </h1>
                </div>
                <div className="w-1/4">
                  <h1 className="text-2xl text-gray-600 font-bold">
                    {cartState.totalPrice} Tk
                  </h1>
                </div>
              </div>
            </div>
            <div className="py-5 text-center">
              {placeOrderState.loading ? (
                <button
                  onClick={() => placedOrderHandler()}
                  className="cursor-not-allowed bg-emerald-500 hover:bg-emerald-700 font-bold text-2xl text-white rounded px-5 py-2"
                >
                  <svg
                    role="status"
                    className="inline mr-2 w-5 h-5 text-emerald-200 animate-spin dark:text-white fill-green-500"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  Place order...
                </button>
              ) : (
                <button
                  onClick={() => placedOrderHandler()}
                  className="bg-emerald-500 hover:bg-emerald-700 font-bold text-2xl text-white rounded px-5 py-2"
                >
                  Place order
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center text-3xl text-gray-500 py-5">
            Cart Empty
          </div>
        )}
      </div>
    </div>
  );
};

export default CartList;
