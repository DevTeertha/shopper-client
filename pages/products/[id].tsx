import { NextRouter, useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../src/components/navbar/Navbar';
import { getProductsAction } from '../../src/redux/Actions/ProductAction';

const ProductDetails: React.FC = () => {
  const router: NextRouter = useRouter();
  const { id } = router.query;
  const products: any = useSelector((state: any) => state.productState);
  if (products.data.length > 0) {
    var { productName, price, stock, variant, img } = products.data.find((pd: any) => pd._id === id);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAction())
  }, []);
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