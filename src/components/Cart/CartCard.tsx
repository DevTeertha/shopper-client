import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeToCart } from '../../redux/Actions/cartAction';

export const CartCard: React.FC<any> = ({ item }: any) => {
    const dispatch = useDispatch();
    const { _id, productName, price, img, quantity, selectVariant } = item;
    useEffect(() => {

    }, [])

    return (
        <div className='border-b border-gray-300 pb-4'>
            <div className='flex justify-between items-center'>
                <div>
                    <div className='flex'>
                        <img className="h-32" src={`data:image/jpeg;base64,${img.img}`} alt={_id} />
                        <div className='p-3'>
                            <h1 className='text-xl font-bold text-gray-800'>{productName}</h1>
                            <p className='text-lg text-gray-500'>Product ID: {_id}</p>
                            <p className='my-3'>
                                Variant: <span className='inline-block rounded px-3 border border-gray-400'>{selectVariant}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-3'>
                    <p className='text-xl'>Quantity: {quantity}</p>
                </div>
                <div className='p-3'>
                    <p className='text-xl text-emerald-500 font-bold'>{price} Tk</p>
                </div>
                <div className='p-3'>
                    <button onClick={() => dispatch(removeToCart(_id))} className='bg-red-500 hover:bg-red-700 py-2 px-3 text-white rounded'>Remove</button>
                </div>
            </div>
        </div>
    )
}
