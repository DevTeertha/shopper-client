import React from "react";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../../redux/Actions/ProductAction";
import { EditModal } from "./EditModal";

export const ProductListCard: any = ({ product }: any) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">
        {product._id}
      </td>
      <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">
        {product.productName}
      </td>
      <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">
        {product.stock}
      </td>
      <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">
        {product.variant.map((v: any, key: number) => {
          return (
            <div key={key} className="mx-2">
              {v.variant.length > 0 && [
                <span className="mx-2" key={key}>
                  {v.variant + ": " + v.price}Tk
                </span>,
              ]}
            </div>
          );
        })}
      </td>
      <td className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">
        <div className="flex justify-center">
          <div>
            <EditModal product={product} />
          </div>
          <div className="ml-5">
            <a
              onClick={() => dispatch(deleteProductAction(product._id))}
              className="cursor-pointer text-red-500 font-bold decoration-1"
            >
              Delete
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
};
