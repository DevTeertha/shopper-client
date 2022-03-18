import React from "react";
import Navbar from "../src/components/navbar/Navbar";
import OrderList from "../src/components/User/OrderList";
import { NextPage } from "next";

const UserOrderList: NextPage = () => {
  return (
    <>
      <Navbar />
      <OrderList />
    </>
  );
};

export default UserOrderList;
