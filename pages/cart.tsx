import React from 'react';
import CartList from '../src/components/Cart/CartList';
import Navbar from '../src/components/navbar/Navbar';

const cart = () => {
    return (
        <>
            <Navbar />
            <CartList />
        </>
    )
}

export default cart;