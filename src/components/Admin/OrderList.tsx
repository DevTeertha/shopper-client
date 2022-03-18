import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersI, orderState } from '../../interfaces/ProductsInterface';
import { getOrderListActions } from '../../redux/Actions/OrderAction';
import OrdersCard from './OrdersCard';

const OrderList = () => {
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
                    <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent">User Email</th>
                    <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent">Total Price (BDT)</th>
                    <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent">Date</th>
                    <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-2 lg:py-4 px-3 lg:px-4 border-l border-transparent">Status</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    allOrders.loading ?
                      <div className='mt-5'>
                        <div className="text-center animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                      </div>
                      :
                      allOrders.data.map((order: getOrdersI, key: number) => <OrdersCard key={key} order={order} />)
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