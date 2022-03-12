import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../../redux/Actions/ProductAction';
import { IProduct } from '../../redux/types/_types';
import ProductCard from './ProductCard';

const Products: React.FC = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.productState);
    console.log("Products: ", products);
    useEffect(() => {
        dispatch(getProductsAction())
    }, []);
    return (
        <section className='py-14'>
            <h4 className='text-3xl text-gray-500 mb-10'>Just for you</h4>
            {
                products.loading ? <h1>Loading...</h1> :
                    <div className='grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {
                            products.data && products.data.map((product: IProduct, key: number) => {
                                return <ProductCard key={key} product={product} />
                            })
                        }
                    </div>
            }
        </section>
    )
}

export default Products