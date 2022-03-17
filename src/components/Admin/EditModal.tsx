import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProductI, productPropsI, VariantI } from '../../interfaces/ProductsInterface';
import { editProductAction } from '../../redux/Actions/ProductAction';

export const EditModal: React.FC<productPropsI> = ({ product }: any) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const dispatch = useDispatch();
    const [editProduct, setEditProudct] = useState<addProductI>({
        _id: product._id,
        productName: product.productName,
        description: product.description,
        stock: product.stock
    })
    const [variantState, setVariantState] = useState<Array<VariantI>>(product.variant);
    let variants: any = [...variantState];
    const setVariantHandler = (e: any, key: number, name: string) => {
        const value: string = e.target.value;
        variants[key][name] = value;
        setVariantState(variants);
    }
    const editProductSubmitHandler = (e: any) => {
        e.preventDefault();
        if (editProduct.productName && editProduct.description && editProduct.stock && variantState[0].variant.length > 0) {
            const formId: any = document.getElementById('editProduct_form');
            dispatch(editProductAction(editProduct._id, editProduct.productName, editProduct.description, editProduct.stock, variantState));
            formId.reset();
            setShowModal(false);
        } else {
            alert("All filed must be required!");
        }
    }
    return (
        <>
            <a onClick={() => setShowModal(true)} className='cursor-pointer text-green-500 font-bold decoration-1'>Edit</a>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden h-full fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Edit Product
                                    </h3>
                                </div>
                                <form onSubmit={(e) => editProductSubmitHandler(e)} id='editProduct_form'>
                                    <div className="relative p-6 overflow-y-scroll h-96">
                                        <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                            <div className="py-3">
                                                <label className='block text-left' htmlFor="">Product ID</label>
                                                <input value={product._id} className='form-control bg-gray-200 relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none' type="text" disabled />
                                            </div>
                                            <div className="py-3">
                                                <label className='block text-left' htmlFor="">Product Name</label>
                                                <input name='productName' onBlur={(e) => setEditProudct({ ...editProduct, productName: e.target.value })} defaultValue={product.productName} className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none' type="text" />
                                            </div>
                                            <div className="py-3">
                                                <label className='block text-left' htmlFor="">Description</label>
                                                <input name='description' onBlur={(e) => setEditProudct({ ...editProduct, description: e.target.value })} defaultValue={product.description} className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none' type="text" />
                                            </div>
                                            <div className="py-3">
                                                <label className='block text-left' htmlFor="">Stocks</label>
                                                <input name='stock' onBlur={(e) => setEditProudct({ ...editProduct, stock: e.target.value })} defaultValue={product.stock} className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none' type="text" />
                                            </div>
                                            {
                                                product.variant.map((vr: any, key: number) => {
                                                    return <>
                                                        <div className='grid grid-cols-2 gap-3'>
                                                            <div className="py-3">
                                                                <label className='block text-left' htmlFor="">Variant {key + 1}</label>
                                                                <input name="variant" onBlur={(e: any) => setVariantHandler(e, key, "variant")} defaultValue={vr.variant} className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none' type="text" />
                                                            </div>
                                                            <div className="py-3">
                                                                <label className='block text-left' htmlFor="">Price {key + 1}</label>
                                                                <input name="variant" onBlur={(e: any) => setVariantHandler(e, key, "price")} defaultValue={vr.price} className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none' type="text" />
                                                            </div>
                                                        </div>
                                                    </>
                                                })
                                            }
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">
                                            Save Changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}
