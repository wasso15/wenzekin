import React, { useState } from "react";
import Deliver from "./Deliver";
import UserInfo from "./UserInfo";
import { DropDownMenu } from "./DropMenu";
import { ImagesAssets } from "@/public/images/imageAssets";

const Payement = ({Paydata, ActiveItem, setActiveItem,Controller,control}) => {


  return (
    <div className="h-[200px]">
      <div className=" mb-8">
        <DropDownMenu
          ActiveItem={ActiveItem}
          SetActiveItem={setActiveItem}
          Payement={Paydata}
        />
      </div>
      <div>
        {ActiveItem.id === 0 ? (
          <div className=" flex  flex-col gap-y-6 w-[95%] mx-auto ">
           
            
          <Controller
            name="CardNumber"
            control={control}
            render={({ field }) => (
              <input
              {...field}
             className="appearance-none border text-xs border-orange-medium rounded-md w-full  px-2 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-orange-medium h-[42px]"
             type="tel"
             placeholder="Numero Card "
           />

             
            )}
          /> 

        <div className="  flex flex-row gap-4 w-full ">
          <Controller
            name="CardDate"
            control={control}
            render={({ field }) => (
              <input
              {...field}
               class="appearance-none text-center  border text-xs border-orange-medium rounded-md w-1/2 px-2 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-orange-medium h-[42px]"
               type="tel"
               placeholder="12/23"
             />
             
            )}
          />  

<Controller
            name="CVV"
            control={control}
            render={({ field }) => (
              <input
              {...field}
              className="appearance-none border text-xs border-orange-medium rounded-md w-1/2 text-center  px-2 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-orange-medium h-[42px]"
              type="tel"
              placeholder="1233"
            />
            )}
          />  

             
            </div>
          </div>
        ) : (
          <div>
            <div className=" flex flex-row gap-6  w-[95%] mx-auto mt-5">

            <Controller
            name="MobileMoneyNum"
            control={control}
            render={({ field }) => (
              <input
              {...field}
              class="appearance-none border text-xs border-orange-medium rounded-md w-full  px-2 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-orange-medium h-[42px]"
              type="tel"
              placeholder="Numero Mobile money"
            />
            )}
          />  
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payement;
