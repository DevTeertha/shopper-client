import React from 'react'

const UserOrderCard: React.FC<any> = ({ orderList }) => {
    const sliedDate = orderList.date.split(" ")[0] + " " + orderList.date.split(" ")[1] + " " + orderList.date.split(" ")[2] + " " + orderList.date.split(" ")[3] + " " + orderList.date.split(" ")[4];
    return (
        <div className='bg-white p-4 my-5 drop-shadow'>
            <div className='grid md:grid-cols-1 md:grid-cols-4 gap-3'>
                <div>
                    <p className='font-bold'>Order ID</p>
                    <p>#{orderList._id}</p>
                </div>
                <div>
                    <p className='font-bold'>Total Price</p>
                    <p>{orderList.totalPrice}</p>
                </div>
                <div>
                    <p className='font-bold'>Status</p>
                    {
                        orderList.orderStatus === "delivered" ? <p className="text-emerald-500 font-bold">{orderList.orderStatus}</p> :
                            orderList.orderStatus === "Shipped" ? <p className="text-yellow-700 font-bold" >{orderList.orderStatus}</p> :
                                <p className="text-red-500 font-bold" >{orderList.orderStatus}</p>
                    }
                </div>
                <div>
                    <p className='font-bold'>Date</p>
                    <p>{sliedDate}</p>
                </div>
            </div>
            <div className="my-3">
                {
                    orderList.orderList.map((list: any, key: number) => <div className='my-3' key={key}>
                        <div className='grid items-center sm:grid-cols-1 md:grid-cols-5 gap-5'>
                            <div>
                                <img src={`data:image/jpeg;base64,${list.img.img}`} alt="" />
                            </div>
                            <div>
                                <h4 className='text-base font-semibold'>{list.productName}</h4>
                            </div>
                            <div>
                                <h4>{list.selectVariant}</h4>
                            </div>
                            <div>
                                <h4>{list.quantity}</h4>
                            </div>
                            <div>
                                <h4>{list.price}</h4>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default UserOrderCard