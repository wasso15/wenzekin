import { CartItem } from "@/components/CartItem";
import TotalCarts from "@/components/TotalCarts";
import {
  selectBasketItems,
  selectBasketTotal,
} from "@/redux/features/BaskeSlice";
import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";

const index = () => {
  const items = useSelector((state) => selectBasketItems(state));
  const totalCart = useSelector((state) => selectBasketTotal(state));
  const basketCount = useSelector(selectBasketItems);

  console.log("total", totalCart, "Items", items);
  const uniqueIds = new Set();
  const uniqueItem = items.filter((element) => {
    const isDuplicate = uniqueIds.has(element._id);

    uniqueIds.add(element._id);

    if (!isDuplicate) {
      return true;
    }

    return false;
  });

  return (
    <div className=" w-[80%] mx-auto flex flex-row gap-[40px] mb-[100px] ">
      <div className=" w-1/2   ">
        <div className=" w-[90%] mx-auto">
          <div className="w-full border-b-[3px] mx-auto py-3 border-orange-medium flex flex-row items-center space-x-3">
            <CgShoppingCart
              color="#F29305"
              className="text-[24px] md:text-[20px]"
            />
            <p className=" text-sm text-gray-500 font-semibold">
              Mon panier
              {<span className=" font-bold"> ({basketCount.length})</span>}
            </p>
          </div>
          <div className=" flex flex-col gap-[35px]  mt-[35px]">
            {uniqueItem.length > 0 ?

            <div className=" flex flex-col gap-6">
              {
                  uniqueItem.map((item, index) => (
                    <CartItem key={index} data={item} />
                  ))
              }
               <TotalCarts totalCart={totalCart}/>
            </div>
            
             : (
              <div className="  mt-[35px] w-full h-[300px] flex flex-row items-center justify-center">
                <p className=" text-gray-400 text-base  text-center ">
                  Le panier est vide
                </p>
              </div>
            )}
        
          </div>
        </div>
      </div>

      <div className="border w-1/2 h-[60px]"></div>
    </div>
  );
};

export default index;
