import React from 'react';

const OrdersCard: React.FC<any> = ({ order }: any) => {
    const { _id, user, orderList, orderStatus, totalPrice, date } = order;
    console.log("order: ", order);
    return (
        <>
            <tr>
                <td rowSpan={4} className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">{_id}</td>
                <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">{orderList[0].productName}</td>
                <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">{orderList[0].quantity}</td>
                <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">{orderList[0].selectVariant}</td>
                <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">{orderList[0].price}Tk</td>
                <td rowSpan={4} className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">{totalPrice}</td>
                <td rowSpan={4} className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">{orderStatus}</td>
                <td rowSpan={4} className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">{date}</td>
            </tr>
            {
                orderList.length > 1 && orderList.map((li: any, key: number) =>
                    key > 0 && <tr key={key}>
                        <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">{li.productName}</td>
                        <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">{li.quantity}</td>
                        <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">{li.selectVariant}</td>
                        <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">{li.price}</td>
                    </tr>
                )
            }
        </>
    )
}

export default OrdersCard