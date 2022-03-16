import { NextPage } from 'next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartCard } from '../src/components/Cart/CartCard';
import { getStorage } from '../src/components/localStorageHandler';
import Navbar from '../src/components/navbar/Navbar';
import { cartItemI } from '../src/interfaces/ProductsInterface';
import { placeOrderAction } from '../src/redux/Actions/placeOrderAction';
import { removeAllCart } from './../src/redux/Actions/cartAction';

const cart = () => {
    const dispatch = useDispatch();
    const cartState: any = useSelector((state: any) => state.cart);
    const placedOrderHandler = () => {
        if (getStorage('userToken')) {
            const user = {
                userToken: getStorage('userToken'),
                name: getStorage('userName'),
                email: getStorage('userEmail'),
            }
            dispatch(placeOrderAction(user, cartState.totalPrice, cartState.cartItems, "processing"));
            dispatch(removeAllCart());
        }
    }
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-5 py-12">
                <h1 className="text-3xl py-3">Your Cart</h1>
                <div className='py-3'>
                    {
                        cartState.cartItems.length > 0 ? <div>
                            <div className='bg-white py-4 px-2 rounded my-3'>
                                {
                                    cartState.cartItems.map((item: cartItemI, key: number) => {
                                        return <CartCard item={item} key={key} />
                                    })
                                }
                                <div className='flex py-3'>
                                    <div className='w-9/12'><h1 className='text-2xl text-gray-600 font-bold'>Total: </h1></div>
                                    <div className='w-1/4'><h1 className='text-2xl text-gray-600 font-bold'>{cartState.totalPrice} Tk</h1></div>
                                </div>
                            </div>
                            <div className="py-5 text-center">
                                <button onClick={() => placedOrderHandler()} className="bg-emerald-500 hover:bg-emerald-700 font-bold text-2xl text-white rounded px-5 py-2">Place order</button>
                            </div>
                        </div> : <div className='text-center text-3xl text-gray-500 py-5'>Cart Empty</div>
                    }
                </div>
            </div>
        </>
    )
}

export default cart;