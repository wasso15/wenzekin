import React from "react";

const InputNumeric = () => {
  return (
    <div className="h-[85px] w-full shadow-md bg-white rounded-lg  flex flex-row justify-around items-center">
      <div className="">
        <p className=" font-bold text-base text-gray-800"> Total 500 Fc </p>
        <p className=" text-xs"> 500Fc/Kg </p>
      </div>
      <div className=" border h-7 w-[130px] rounded-md border-orange-medium flex flex-row justify-around items-center ">
        <div className="h-full w-6 cursor-pointer flex flex-col items-center justify-center">
          <p className=" text-orange-medium font-semibold">+</p>
        </div>
        <div>
          <p className=" font-bold text-sm "> 1kg</p>
        </div>
        <div className="h-full w-6 cursor-pointer flex flex-col items-center justify-center">
          <p className=" text-orange-medium font-semibold">-</p>
        </div>
      </div>
      <div></div>
      <div className=" border h-[35px] w-[100px] bg-green-base rounded hover:bg-green-base/90  cursor-pointer  flex flex-row items-center justify-center">
        <p className=" text-xs font-bold text-white">Ajouter</p>
      </div>
    </div>
  );
};

export default InputNumeric;
