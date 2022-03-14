import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../../redux/Actions/ProductAction';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.productState);
  useEffect(() => {
    dispatch(getProductsAction());
  }, []);
  return (
    <div className='overflow-y-scroll h-full'>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="max-w-full overflow-y-hidden overflow-x-auto max-h-full">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-700 text-center">
                  <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent">#SL</th>
                  <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent">Product Name</th>
                  <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent">Quantity</th>
                  <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent">Price</th>
                  <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent">Variant</th>
                  <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.loading ?
                    <div className='mt-5'>
                      <div className="text-center animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                    </div>
                    :
                    products.data.length > 0 ?
                      products.data.map((product: any, key: number) => <tr key={key}>
                        <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">{key + 1}</td>
                        <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">{product.productName}</td>
                        <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">{product.stock}</td>
                        <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">{product.price}tk</td>
                        <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">{
                          product.variant.map((v: string, key: number) => {
                            return <div className='mx-2'>
                              [<span className='mx-2' key={key}>{v}</span>]
                            </div>
                          })
                        }</td>
                        <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">
                          <div className='flex justify-center'>
                            <div>
                              <a className='cursor-pointer text-green-500 font-bold decoration-1'>Edit</a>
                            </div>
                            <div className='ml-5'>
                              <a className='cursor-pointer text-red-500 font-bold decoration-1'>Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      )
                      :
                      <h1>No Products Found</h1>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList