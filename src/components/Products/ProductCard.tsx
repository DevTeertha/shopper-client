import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }: any) => {
    return (
        <div className="cursor-pointer bg-white hover:border-emerald-500 max-w-sm rounded overflow-hidden shadow-lg">
            <Link href={`/products/${product._id}`}>
                <a>
                    <img className="w-full h-60" src={`data:image/jpeg;base64,${product.img.img}`} alt={product._id} />
                    <div className="px-6 py-4 bg-white">
                        <div className="text-center text-xl mb-2">{product.productName}</div>
                        <p className='text-center text-red-500 font-bold my-3 text-3xl'>৳{product.variant[0].price}</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default ProductCard