import { NextPage } from "next";
import React from "react";
import CartList from "../src/components/Cart/CartList";
import Navbar from "../src/components/navbar/Navbar";

const cart: NextPage = () => {
  return (
    <>
      <Navbar />
      <CartList />
    </>
  );
};

export default cart;
