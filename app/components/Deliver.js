import Link from "next/link";
import React from "react";
import { BsShop } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

const Deliver = ({ deliverChoice, setChoice, Controller, control }) => {
  return (
    <div>
      <div className=" w-[95%]  mx-auto  flex flex-row gap-20 mt-5 ">
        <div
          onClick={() => setChoice(!deliverChoice)}
          className={`border-[2.5px] border-orange-medium h-[70px] ${
            deliverChoice
              ? "bg-orange-medium text-white"
              : "bg-white text-orange-medium"
          } w-full rounded-md flex flex-row items-center justify-center space-x-2`}
        >
          <TbTruckDelivery className="text-[24px] md:text-[20px]" />
          <p className=" text-sm font-semibold">Livraison</p>
        </div>

        <div
          onClick={() => setChoice(!deliverChoice)}
          className={`border-[2.5px] border-orange-medium h-[70px] ${
            !deliverChoice
              ? "bg-orange-medium text-white"
              : " bg-white text-orange-medium"
          } w-full rounded-md flex flex-row items-center justify-center space-x-2`}
        >
          <BsShop className="text-[24px] md:text-[20px]" />
          <p className=" text-sm font-semibold">Collecte</p>
        </div>
      </div>

      <div className=" flex flex-row gap-6 w-[95%] mx-auto mt-5 h-[80px] justify-center items-center">
        {deliverChoice ? (
          <Controller
            name="DeliverAdress"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className="appearance-none border text-xs border-orange-medium rounded-md w-full  px-2 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-orange-medium h-[42px]"
                type="text"
                placeholder="Adresse complet & reference"
              />
            )}
          />
        ) : (
          <Link href="/shop" legacyBehavior >
            <a target="_blank" rel="noopener noreferrer">
              <p className=" text-base text-green-base font-medium "> Voir la liste de nos Shops </p>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Deliver;
