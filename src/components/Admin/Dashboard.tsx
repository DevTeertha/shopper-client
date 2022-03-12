import React, { Dispatch, SetStateAction, useState } from 'react';
import Sidebar from './Sidebar';
import ProductList from './ProductList';

const Dashboard: React.FC = () => {
    const [dashboard, setDashboard] = useState<JSX.Element | undefined>(<ProductList />);
    return (
        <div className='flex h-screen'>
            <div className='bg-gray-700 h-full w-1/5'>
                <Sidebar setDashboard={setDashboard} />
            </div>
            <div className='p-5 w-4/5'>
                {dashboard}
            </div>
        </div>
    )
}

export default Dashboard