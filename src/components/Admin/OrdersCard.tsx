import React from "react";
import { useDispatch } from "react-redux";
import { changeOrderStatusActions } from "../../redux/Actions/OrderAction";

const OrdersCard: React.FC<any> = ({ order }: any) => {
  const { _id, user, orderList, orderStatus, totalPrice, date } = order;
  console.log("totalPrice: ", totalPrice);
  const sliedDate: string =
    date.split(" ")[0] +
    " " +
    date.split(" ")[1] +
    " " +
    date.split(" ")[2] +
    " " +
    date.split(" ")[3] +
    " " +
    date.split(" ")[4];
  const dispatch = useDispatch();
  const changeStatusHandler = (e: any) => {
    const newOrderList = orderList.map((list: any) => {
      return {
        _id: list._id,
        quantity: list.quantity,
      };
    });
    dispatch(changeOrderStatusActions(_id, user, newOrderList, e.target.value));
  };

  return (
    <tr>
      <td className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">
        {_id}
      </td>
      <td className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">
        {user.email}
      </td>
      <td className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">
        {totalPrice}
      </td>
      <td className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">
        {sliedDate}
      </td>
      <td className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">
        {orderStatus === "delivered" ? (
          <select
            className="bg-emerald-500 text-white p-3 border border-emerald-500 focus:outline-none rounded-md"
            disabled
          >
            <option value="delivered" key="1">
              Delivered
            </option>
          </select>
        ) : (
          <select
            onChange={(e: any) => changeStatusHandler(e)}
            className="bg-transparent p-3 cursor-pointer border border-gray-500 focus:outline-none rounded-md"
            defaultValue={orderStatus}
          >
            <option value="processing" key="0">
              Processing
            </option>
            <option value="shipped" key="1">
              Shipped
            </option>
            <option value="delivered" key="1">
              Delivered
            </option>
          </select>
        )}
      </td>
    </tr>
  );
};

export default OrdersCard;
