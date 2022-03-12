import type { NextPage } from "next";
import { useState } from "react";
import Navbar from "../src/components/navbar/Navbar";
import Products from "../src/components/Products/Products";
import Search from "../src/components/search/Search";

const Home: NextPage = () => {
  const [file, setFile]: any = useState();

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5 py-12">
        <Search />
        <Products />
      </div>
    </>
  );
};

export default Home;
