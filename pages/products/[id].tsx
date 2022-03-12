import { NextRouter, useRouter } from 'next/router';
import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../../src/components/navbar/Navbar';

const ProductDetails: React.FC = () => {
  const router: NextRouter = useRouter();
  const { id } = router.query;
  const products = useSelector((state: any) => state.productState);
  if (products.data) {
    var { productName, price, stock, variant, img } = products.data.find((pd: any) => pd._id === id);
  }
  return (
    <div>
      <Navbar />
      <div className='container mx-auto'>
        <h1>{productName}</h1>
      </div>
    </div>
  )
}

export default ProductDetails;