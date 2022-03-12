import React from 'react'
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import EditProducts from './EditProducts';
import DeleteProducts from './DeleteProducts';
import OrderList from './OrderList';


const Sidebar: React.FC = ({ setDashboard }: any) => {
    return (
        <div className='py-5'>
            <h1 className='text-center text-3xl font-bold text-white'>SHOPPER ADMIN</h1>
            <ul className='dashboard_nav_ul my-10'>
                <li>
                    <button onClick={() => setDashboard(<ProductList />)}>Product list</button>
                </li>
                <li>
                    <button onClick={() => setDashboard(<AddProduct />)}>Add Product</button>
                </li>
                <li>
                    <button onClick={() => setDashboard(<EditProducts />)}>Edit Products</button>
                </li>
                <li>
                    <button onClick={() => setDashboard(<DeleteProducts />)}>Delete Products</button>
                </li>
                <li>
                    <button onClick={() => setDashboard(<OrderList />)}>Order list</button>
                </li>
                <li>
                    <button>Log out</button>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar