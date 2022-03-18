import { NextRouter, useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../src/components/Loader/Loader";
import Navbar from "../../src/components/navbar/Navbar";
import { getProductsAction } from "../../src/redux/Actions/ProductAction";
import { useState } from "react";
import { addToCart } from "../../src/redux/Actions/cartAction";
import { getStorage } from "../../src/components/localStorageHandler";
import {
  productDetailsI,
  VariantI,
} from "../../src/interfaces/ProductsInterface";
import { placeOrderAction } from "../../src/redux/Actions/placeOrderAction";

const ProductDetails: React.FC = () => {
  let productDetails: productDetailsI = {
    _id: "",
    productName: "",
    description: "",
    stock: 0,
    variant: [],
    img: {
      contentType: "",
      size: 0,
      img: "",
    },
  };
  const [selectPrice, setSelectPrice] = useState<string>("");
  const [selectVariant, setSelectVariant] = useState<string>("");
  const router: NextRouter = useRouter();
  const [quantity, setQuantity] = useState<number>(1);
  const { id } = router.query;
  const products: any = useSelector((state: any) => state.productState);
  const placeOrderState: any = useSelector(
    (state: any) => state.placeOrderReducer
  );
  if (products.data.length > 0) {
    productDetails = products.data.find((pd: any) => pd._id === id);
  }
  const buyNowHandler = () => {
    if (getStorage("userToken")) {
      if (quantity !== 0 && selectVariant.length) {
        const newProductArr: any = [
          {
            _id: productDetails._id,
            productName: productDetails.productName,
            img: productDetails.img,
            price: selectPrice,
            quantity,
            selectedVariant: selectVariant,
          },
        ];
        const totalPrice = parseInt(selectPrice.split(",").join("")) * quantity;
        const userToken: string = getStorage("userToken");
        dispatch(
          placeOrderAction(userToken, totalPrice, newProductArr, "processing")
        );
      } else {
        alert("All set quantity or select variant!");
      }
    } else {
      router.push("/login");
    }
  };
  const addTocartHandler = () => {
    if (getStorage("userToken")) {
      if (quantity !== 0 && selectVariant.length) {
        let newProduct: any;
        if (quantity > 1) {
          productDetails;
          newProduct = {
            _id: productDetails._id,
            productName: productDetails.productName,
            img: productDetails.img,
            price: selectPrice,
            quantity,
            selectVariant,
          };
        } else {
          newProduct = {
            _id: productDetails._id,
            productName: productDetails.productName,
            img: productDetails.img,
            price: selectPrice,
            quantity: 1,
            selectVariant,
          };
        }
        dispatch(addToCart(newProduct));
      } else {
        alert("All set quantity or select variant!");
      }
    } else {
      router.push("/login");
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);
  return (
    <>
      {products.data.length > 0 ? (
        <div>
          <Navbar />
          <div className="container mx-auto">
            <div className="flex justify-between flex-wrap py-10">
              <div className="sm:w-full md:w-4/6 p-4">
                <img
                  className="w-full h-full"
                  src={`data:image/jpeg;base64,${productDetails.img.img}`}
                  alt={productDetails.productName}
                />
              </div>
              <div className="sm:w-full md:w-2/6 p-4">
                <h1 className="text-3xl">{productDetails.productName}</h1>
                {productDetails.description && (
                  <p className="my-3 text-gray-500">
                    {productDetails.description}
                  </p>
                )}
                <p className="my-3 text-gray-500">
                  Product ID: {productDetails._id}
                </p>
                <div className="py-3">
                  <p className="text-gray-500">Price</p>
                  <p className="text-emerald-500 font-bold text-3xl">
                    {selectPrice
                      ? selectPrice
                      : productDetails.variant &&
                        productDetails.variant[0].price}
                    tk
                  </p>
                </div>
                <div className="py-3">
                  <p className="text-gray-500 mb-2">Quantity</p>
                  <input
                    onChange={(e: any) => setQuantity(parseInt(e.target.value))}
                    className="w-20 bg-transparent outline-none rounded py-1 px-2 border border-emerald-500"
                    type="number"
                    value={quantity}
                  />
                </div>
                <div className="py-3">
                  <p className="text-gray-500 mb-3">Variant</p>
                  {productDetails.variant &&
                    productDetails.variant.map(
                      (list: VariantI, key: number) => {
                        return (
                          <span
                            onClick={() => {
                              setSelectPrice(list.price);
                              setSelectVariant(list.variant);
                            }}
                            className={`${
                              selectVariant === list.variant
                                ? "bg-emerald-500 text-white"
                                : ""
                            } cursor-pointer inline-block my-2 border border-emerald-500 py-1 px-3 mr-3 rounded`}
                            key={key}
                          >
                            {list.variant}
                          </span>
                        );
                      }
                    )}
                </div>
                {productDetails.stock > 0 ? (
                  <div className="flex py-3">
                    <div>
                      <button
                        onClick={(e: any) => addTocartHandler()}
                        className="hover:bg-emerald-700 bg-emerald-500 text-white font-bold px-5 py-2 rounded"
                      >
                        Add to cart
                      </button>
                    </div>
                    {placeOrderState.loading ? (
                      <div className="ml-5">
                        <button
                          onClick={(e: any) => buyNowHandler()}
                          className="cursor-not-allowed hover:bg-red-700 bg-red-500 text-white font-bold px-5 py-2 rounded"
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
                          Buy Now...
                        </button>
                      </div>
                    ) : (
                      <div className="ml-5">
                        <button
                          onClick={(e: any) => buyNowHandler()}
                          className="hover:bg-red-700 bg-red-500 text-white font-bold px-5 py-2 rounded"
                        >
                          Buy Now
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <h1 className="text-3xl text-red-500 font-bold py-3">
                    Out Of Stock
                  </h1>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ProductDetails;
