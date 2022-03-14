import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { highToSortAction, lowToHigSortAction } from '../../redux/Actions/sortAction';
import { ActionType } from '../../redux/actionTypes';
import { IProduct } from '../../redux/types/_types';
import Search from '../search/Search';
import ProductCard from './ProductCard';

const Products: React.FC = () => {
    const [searched, setSearched] = useState<string>("");
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.productState);
    const sortedProductsState = useSelector((state: any) => state.sortedProductState);
    const sortHandler = (e: any) => {
        dispatch(lowToHigSortAction([]));
        if (e.target.value === ActionType.LOW_TO_HIGH) {
            dispatch(lowToHigSortAction(products.data));
        }
        else if (e.target.value === ActionType.HIGH_TO_LOW) {
            dispatch(highToSortAction(products.data));
        }
    }
    const searchHandler = (arr: any): any => {
        return arr.filter((val: any) => {
            if (searched === "") {
                return val;
            } else if (val.productName.toLowerCase().includes(searched.toLowerCase())) {
                return val;
            }
        })
    }
    useEffect(() => {
        dispatch(lowToHigSortAction(products.data));
    }, [])

    return (
        <>
            <Search setSearched={setSearched} />
            <section className='py-14'>
                <div className='flex justify-between mb-10'>
                    <div>
                        <h4 className='text-3xl text-gray-500'>Just for you</h4>
                    </div>
                    <div>
                        <select onChange={(e: any) => sortHandler(e)} className="px-5 py-2 outline-none border border-emerald-500 rounded-md">
                            <option value={ActionType.LOW_TO_HIGH}>Low to Highest</option>
                            <option value={ActionType.HIGH_TO_LOW}>Highest to Low</option>
                        </select>
                    </div>
                </div>
                <div className='grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        sortedProductsState.length ?
                            searchHandler(sortedProductsState).length > 0 ?
                                searchHandler(sortedProductsState).map((product: IProduct, key: number) => <ProductCard key={key} product={product} />)
                                :
                                <h1>No Products Found!</h1>
                            :
                            products.data.length > 0 ?
                                searchHandler(products.data).length > 0 ?
                                    searchHandler(products.data).map((product: IProduct, key: number) => {
                                        return <ProductCard key={key} product={product} />
                                    }) : <h1>No Products Found!</h1>
                                :
                                <h1>No Products Found!</h1>
                    }
                </div>
            </section>
        </>
    )
}

export default Products