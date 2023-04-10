import { urlFor } from "@/lib/client";
import {
  addToBasket,
  removeFromBasket,
  removeToBasket,
  selectBasketItemsWithId,
} from "@/redux/features/BaskeSlice";
import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export const CartItem = ({ data }) => {
  console.log("cartItem data", data);
  const { _id, Nom, description, image, prix } = data;
  const productImg = urlFor(image).url();

  const item = useSelector((state) => selectBasketItemsWithId(state, _id));

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ _id, Nom, description, image, prix }));
  };

  const removeItemFromBasket = () => {
    if (!item.length > 0) return;
    dispatch(removeFromBasket({ _id }));
  };
  const removeCardFromBasket = () => {
    if (!item.length > 0) return;
    dispatch(removeToBasket({ _id }));
  };
  return (
    <div className=" w-full h-[120px] rounded-lg flex flex-row space-x-5 shadow">
      <div className=" w-[30%] h-full ">
        <img
          className="w-full h-full rounded-xl object-cover"
          src={productImg}
          alt={Nom}
        />
      </div>
      <div className="  flex flex-col justify-around grow">
        <div className="">
        <div className=" flex flex-row justify-end px-2">
          <MdClose className=" text-orange-medium " />
        </div>
        <div className=" mt-[12px] px-2">
          <p className=" text-gray-700 font-bold text-sm">{Nom}</p>
          <p className=" text-gray-400  text-xs">Vivre frais</p>
        </div>
        </div>
        <div className=" flex flex-row justify-between items-center px-2 ">

          <div className="border h-[26px] w-[120px] rounded-md border-orange-medium flex flex-row justify-around items-center ">
            <div className="h-full w-6 cursor-pointer flex flex-col items-center justify-center">
              <p className=" text-orange-medium font-semibold">+</p>
            </div>
            <div>
              <p className=" font-bold text-xs "> {item.length}kg</p>
            </div>
            <div className="h-full w-6 cursor-pointer flex flex-col items-center justify-center">
              <p className=" text-orange-medium font-semibold">-</p>
            </div>
          </div>

          <p className=" text-orange-medium font-bold  text-sm">{prix} Fc </p>
        </div>
      </div>
    </div>
  );
};
