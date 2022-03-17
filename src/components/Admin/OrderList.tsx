import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersI, orderState } from '../../interfaces/ProductsInterface';
import { getOrderListActions } from '../../redux/Actions/OrderAction';
import { searchHandler } from '../search/searchHandler';
import OrdersCard from './OrdersCard';

const OrderList = () => {
  const [searched, setSearched] = useState<string>("");
  const dispatch = useDispatch();
  const allOrders: orderState = useSelector((state: any) => state.getAllOrders);

  useEffect(() => {
    dispatch(getOrderListActions());
  }, [])

  return (
    <>
      <div className='overflow-y-scroll h-full'>
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="max-w-full overflow-y-hidden overflow-x-auto max-h-full">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-gray-700 text-center">
                    <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent">#Order_ID</th>
                    <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white border-transparent">
                      <table className='w-full'>
                        <tr>
                          <th className='w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent'>Name</th>
                          <th className='w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent'>Quantity</th>
                          <th className='w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent'>Variant</th>
                          <th className='w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent'>Price</th>
                        </tr>
                      </table>
                    </th>
                    <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent">Total Price</th>
                    <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent">Date</th>
                    <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">123</td>
                    <td className="text-center text-dark font-medium text-base bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">
                      <table className='w-full'>
                        <tr>
                          <td className='text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]'>Name</td>
                          <td className='text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]'>Quantity</td>
                          <td className='text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]'>Variant</td>
                          <td className='text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]'>Price</td>
                        </tr>
                        <tr>
                          <td className='text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]'>Name</td>
                          <td className='text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]'>Quantity</td>
                          <td className='text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]'>Variant</td>
                          <td className='text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]'>Price</td>
                        </tr>
                        <tr>
                          <td className='text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]'>Name</td>
                          <td className='text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]'>Quantity</td>
                          <td className='text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]'>Variant</td>
                          <td className='text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]'>Price</td>
                        </tr>
                      </table>
                    </td>
                    <td className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">123</td>
                    <td className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">123</td>
                    <td className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">123</td>
                  </tr>
                  {
                    // allOrders.loading ?
                    //   <div className='mt-5'>
                    //     <div className="text-center animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                    //   </div>
                    //   :
                    //   allOrders.data.length > 0 ?
                    //     searchHandler(allOrders.data, searched).length > 0 ?
                    //       searchHandler(allOrders.data, searched).map((order: getOrdersI, key: number) => <OrdersCard key={key} order={order} />)
                    //       :
                    //       allOrders.data.map((order: getOrdersI, key: number) => <OrdersCard key={key} order={order} />)
                    //     :
                    //     <h1>No Products Found</h1>
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

export default OrderList