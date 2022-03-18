import React from 'react'
import Navbar from '../src/components/navbar/Navbar';
import OrderList from '../src/components/User/OrderList';

const UserOrderList = () => {
    return (
        <>
            <Navbar />
            <OrderList />
        </>
    )
}

export default UserOrderList;