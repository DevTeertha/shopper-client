import React from 'react';
import { useSelector } from 'react-redux';
import { IProduct } from '../../redux/types/_types';
import ProductCard from './ProductCard';

const Products: React.FC = () => {
    const products = useSelector((state: any) => state.productState);
    return (
        <section className='py-14'>
            <h4 className='text-3xl text-gray-500 mb-10'>Just for you</h4>
            <div className='grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    products.data.length > 0 ? products.data.map((product: IProduct, key: number) => {
                        return <ProductCard key={key} product={product} />
                    }) : <h1>No Products Found!</h1>
                }
            </div>
        </section>
    )
}

export default Products