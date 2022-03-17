import { NextRouter, useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../src/components/Loader/Loader';
import Navbar from '../../src/components/navbar/Navbar';
import { getProductsAction } from '../../src/redux/Actions/ProductAction';
import { useState } from 'react';
import { addToCart } from '../../src/redux/Actions/cartAction';
import { getStorage } from '../../src/components/localStorageHandler';
import { VariantI } from '../../src/interfaces/ProductsInterface';
import { setTimeout } from 'timers/promises';

const ProductDetails: React.FC = () => {
  const [selectPrice, setSelectPrice] = useState<string>("");
  const [selectVariant, setSelectVariant] = useState<string>("");
  const router: NextRouter = useRouter();
  const [quantity, setQuantity] = useState<number>(1);
  const { id } = router.query;
  const products: any = useSelector((state: any) => state.productState);
  if (products.data.length > 0) {
    var productDetails = products.data.find((pd: any) => pd._id === id);
    if (productDetails) {
      var { _id, productName, description, stock, variant, img } = productDetails;
    } else {
      router.push('/products/404')
    }
  }

  const addTocartHandler = () => {
    if (getStorage('userToken')) {
      if (quantity !== 0 && selectVariant.length) {
        let newProduct: any;
        if (quantity > 1) {
          newProduct = { _id, productName, img, price: selectPrice, quantity, selectVariant };
        } else {
          newProduct = { _id, productName, img, price: selectPrice, quantity: 1, selectVariant };
        }
        dispatch(addToCart(newProduct));
      } else {
        alert("All set quantity or select variant!");
      }
    } else {
      router.push("/login")
    }
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);
  return (
    <>
      {
        products.data.length > 0 ? <div>
          <Navbar />
          <div className='container mx-auto'>
            <div className='flex justify-between flex-wrap py-10'>
              <div className='sm:w-full md:w-4/6 p-4'>
                <img className='w-full h-full' src={`data:image/jpeg;base64,${img.img}`} alt={productName} />
              </div>
              <div className='sm:w-full md:w-2/6 p-4'>
                <h1 className='text-3xl'>{productName}</h1>
                {description && <p className='my-3 text-gray-500'>{description}</p>}
                <p className='my-3 text-gray-500'>Product ID: {_id}</p>
                <div className="py-3">
                  <p className="text-gray-500">Price</p>
                  <p className="text-emerald-500 font-bold text-3xl">{selectPrice ? selectPrice : variant && variant[0].price}tk</p>
                </div>
                <div className="py-3">
                  <p className="text-gray-500 mb-2">Quantity</p>
                  <input onChange={(e: any) => setQuantity(parseInt(e.target.value))} className="w-20 bg-transparent outline-none rounded py-1 px-2 border border-emerald-500" type="number" value={quantity} />
                </div>
                <div className='py-3'>
                  <p className="text-gray-500 mb-3">Variant</p>
                  {
                    variant && variant.map((list: VariantI, key: number) => {
                      return <span onClick={() => {
                        setSelectPrice(list.price);
                        setSelectVariant(list.variant)
                      }} className={`${selectVariant === list.variant ? "bg-emerald-500 text-white" : ""} cursor-pointer inline-block my-2 border border-emerald-500 py-1 px-3 mr-3 rounded`} key={key}>{list.variant}</span>
                    })
                  }
                </div>
                {
                  parseInt(stock) > 0 ? <div className='flex py-3'>
                    <div>
                      <button onClick={(e: any) => addTocartHandler()} className='hover:bg-emerald-700 bg-emerald-500 text-white font-bold px-5 py-2 rounded'>Add to cart</button>
                    </div>
                    <div className='ml-5'>
                      <button className='hover:bg-red-700 bg-red-500 text-white font-bold px-5 py-2 rounded'>Buy Now</button>
                    </div>
                  </div> : <h1 className='text-3xl text-red-500 font-bold py-3'>Out Of Stock</h1>
                }
              </div>
            </div>
          </div>
        </div> :
          <Loader />
      }
    </>
  )
}

export default ProductDetails;