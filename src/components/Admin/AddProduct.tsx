import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductI } from '../../interfaces/ProductsInterface';
import { addProductAction } from '../../redux/Actions/ProductAction';

const AddProduct: React.FC = () => {
  const [variant, setVariant] = useState<Array<string>>([]);
  const [addProduct, setAddProudct] = useState<addProductI>({
    productName: "",
    description: "",
    price: "",
    stock: ""
  })
  const [file, setFile] = useState<File>();

  const dispatch = useDispatch();
  const addProductState = useSelector((state: any) => state.addProduct);
  const addProductSubmitHandler = (e: any) => {
    e.preventDefault();
    console.log(addProduct);
    if (addProduct.productName && addProduct.description && addProduct.price && addProduct.stock && variant.length > 0 && file) {
      const formId: any = document.getElementById('addProduct_form');
      dispatch(addProductAction(addProduct.productName, addProduct.price, addProduct.stock, variant, file));
      setVariant([]);
      formId.reset();
    } else {
      alert("All filed must be required!");
    }
  }



  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form id='addProduct_form' onSubmit={(e) => addProductSubmitHandler(e)}>
        <div className='grid grid-cols-3 gap-4'>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Product Name
            </label>
            <input name='productName' onBlur={(e) => setAddProudct({ ...addProduct, productName: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product_name" type="text" placeholder="Product Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Price
            </label>
            <input onBlur={(e) => setAddProudct({ ...addProduct, price: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="number" placeholder="Price" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Qty
            </label>
            <input onBlur={(e) => setAddProudct({ ...addProduct, stock: e.target.value })} name='stock' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="stock" type="number" placeholder="Qty" />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4'>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Description
            </label>
            <input name='description' onBlur={(e) => setAddProudct({ ...addProduct, description: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product_description" type="text" placeholder="Description" />
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Variant 1
            </label>
            <input onBlur={(e) => setVariant([...variant, e.target.value])} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="variant1" type="text" placeholder="Variant1" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Variant 2
            </label>
            <input onBlur={(e) => setVariant([...variant, e.target.value])} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="variant2" type="text" placeholder="Variant2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Variant 3
            </label>
            <input onBlur={(e) => setVariant([...variant, e.target.value])} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="variant3" type="text" placeholder="Variant3" />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Upload
          </label>
          <input onChange={(e: any) => setFile(e.target.files[0])} id="image" type="file" />
        </div>
        <div className="mt-4">
          {
            addProductState.loading ? <button type='submit' className='cursor-not-allowed bg-emerald-500 hover:bg-emerald-700 text-white font-bold rounded px-10 py-2'>
              <svg role="status" className="inline mr-2 w-5 h-5 text-emerald-200 animate-spin dark:text-white fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              Add Product</button> :
              <button type='submit' className='bg-emerald-500 hover:bg-emerald-700 text-white font-bold rounded px-10 py-2'>Add Product</button>
          }
        </div>
      </form>
    </div>
  )
}

export default AddProduct;