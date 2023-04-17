import React from "react";
import { CgShoppingCart } from "react-icons/cg";

const Deliver = () => {
  return (
    <div className="w-full border-b-[3px] mx-auto py-3 border-orange-medium flex flex-row items-center space-x-3">
      <CgShoppingCart color="#F29305" className="text-[24px] md:text-[20px]" />
      <p className=" text-sm text-gray-500 font-semibold">
        Mon panier
      </p>
    </div>
  );
};

export default Deliver;
