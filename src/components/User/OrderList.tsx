import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logoutAction } from '../../redux/Actions/loginAction';
import { deliveredOrderAction, processingOrderAction, shippedOrderAction } from '../../redux/Actions/orderFilterAction';
import { getUserOrderListAction } from '../../redux/Actions/userOrderListAction';
import { ActionType } from '../../redux/actionTypes';
import Loader from '../Loader/Loader';
import { getStorage } from '../localStorageHandler';
import UserOrderCard from './UserOrderCard';

const OrderList = () => {
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [filtered, setFiltered] = useState([]);
    const dispatch = useDispatch();
    const userOrderList = useSelector((state: any) => state.getUserOrderListReducer);
    const orderStatusFilter = useSelector((state: any) => state.orderStatusFilter);
    const filterHandler = (e: any) => {
        if (e.target.value === ActionType.PROCESSING) {
            dispatch(processingOrderAction(userOrderList.data));
        }
        else if (e.target.value === ActionType.DELIVERED) {
            dispatch(deliveredOrderAction(userOrderList.data));
        }
        else if (e.target.value === ActionType.SHIPPED) {
            dispatch(shippedOrderAction(userOrderList.data));
        }
        else {
            setFiltered(userOrderList.data);
        }
    }

    useEffect(() => {
        if (getStorage('userToken')) {
            if (orderStatusFilter.data.length > 0) {
                console.log("orderStatusFilter: ", orderStatusFilter);
                setFiltered(orderStatusFilter.data);
                setSelectedFilter(orderStatusFilter.type);
            }
            const userToken = getStorage('userToken');
            dispatch(getUserOrderListAction(userToken))
        } else {
            dispatch(logoutAction());
        }
    }, [orderStatusFilter])
    return (
        <>
            {
                userOrderList.loading ? <Loader /> :
                    <div className="container mx-auto px-5 py-12" >
                        <h1 className="text-3xl font-bold text-gray-800">Order List</h1>
                        <div className="text-right my-3">
                            <select defaultValue={selectedFilter} onChange={(e: any) => filterHandler(e)} name="orderList_Filtering" id="orderList_Filtering" className='bg-white text-gray-500 font-bold p-3 border border-emerald-500 focus:outline-none rounded-md'>
                                <option value="all">All</option>
                                <option value={ActionType.PROCESSING}>{ActionType.PROCESSING.toUpperCase()}</option>
                                <option value={ActionType.SHIPPED}>{ActionType.SHIPPED.toUpperCase()}</option>
                                <option value={ActionType.DELIVERED}>{ActionType.DELIVERED.toUpperCase()}</option>
                            </select>
                        </div>
                        <div>
                            {
                                filtered.length > 0 ?
                                    filtered.map((orderList: any, key: number) => <UserOrderCard key={key} orderList={orderList} />)
                                    :
                                    userOrderList.data.length > 0 ?
                                        userOrderList.data.map((orderList: any, key: number) => <UserOrderCard key={key} orderList={orderList} />)
                                        : <h1 className='text-3xl mt-8 text-emerald-500 font-bold'>No Orders Found</h1>
                            }
                        </div>
                    </div>
            }
        </>
    )
}

export default OrderList