import { NextPage } from "next";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../src/components/Loader/Loader";
import Navbar from "../src/components/navbar/Navbar";
import Products from "../src/components/Products/Products";
import { getProductsAction } from "../src/redux/Actions/ProductAction";

const ProductsIndex: NextPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.productState);
  useEffect(() => {
    if (products.data.length > 0 === false) {
      dispatch(getProductsAction());
    }
  }, []);
  return (
    <>
      {products.loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className="container mx-auto px-5 py-12">
            <Products />
          </div>
        </>
      )}
    </>
  );
};

export default ProductsIndex;
