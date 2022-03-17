import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productI } from '../../interfaces/ProductsInterface';
import { getProductsAction } from '../../redux/Actions/ProductAction';
import { searchHandler } from '../search/searchHandler';
import { ProductListCard } from './ProductListCard';

const ProductList = () => {
  const [searched, setSearched] = useState<string>("");
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.productState);
  const editProduct = useSelector((state: any) => state.editProduct);
  const deleteProduct = useSelector((state: any) => state.deleteProduct);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [editProduct, deleteProduct]);

  return (
    <>
      <div className='overflow-y-scroll h-full'>
        <div className='mt-3 mb-10 px-4'>
          <div className="search_container">
            <div className="flex align-center">
              <div className="md:w-full lg:w-5/12">
                <div className="input-group relative flex flex-wrap items-stretch w-full">
                  <input onChange={(e: any) => setSearched(e.target.value)} type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none" placeholder="Product Search" aria-label="Search" aria-describedby="button-addon2" />
                </div>
              </div>
              <div>
                <button className="btn inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="max-w-full overflow-y-hidden overflow-x-auto max-h-full">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-gray-700 text-center">
                    <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent">#ID</th>
                    <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent">Product Name</th>
                    <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent">Quantity</th>
                    <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent">Variant & Price</th>
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
                        searchHandler(products.data, searched).length > 0 ?
                          searchHandler(products.data, searched).map((product: productI, key: number) => <ProductListCard key={product._id + key} product={product} />)
                          :
                          products.data.map((product: productI, key: number) => <ProductListCard key={product._id + key} product={product} />)
                        :
                        <h1>No Products Found</h1>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList