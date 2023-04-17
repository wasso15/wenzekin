import React from "react";
import { AiOutlineUser } from "react-icons/ai";


const UserInfo = () => {
  return (
    <div className="border w-full">
      <div className="w-full border-b-[3px] mx-auto py-3 border-orange-medium flex flex-row items-center space-x-3">
        <AiOutlineUser
          color="#F29305"
          className="text-[24px] md:text-[20px]"
        />
        <p className=" text-sm text-gray-500 font-semibold">Coordonnées</p>
      </div>
      <div>
        <p>Hello</p>
      </div>
    </div>
  );
};

export default UserInfo;
