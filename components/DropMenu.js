import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsGlobe2, BsFillCaretDownFill } from "react-icons/bs";

export const DropDownMenu = ({
  Payement,
  ActiveItem,
  SetActiveItem,
  SetSelectedItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" relative flex flex-col items-center justify-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-poppins border font-semibold text-green-light text-xs  bg-white focus:outline-none  rounded-lg px-4 py-2 text-center inline-flex items-center justify-between w-[95%] border-orange-medium mx-auto  h-[50px]"
        type="button"
      >
        {ActiveItem.title}

        <BsFillCaretDownFill />
      </button>

      {isOpen && (
        <div class="z-10 absolute top-[55px]  bg-white divide-y divide-gray-100 rounded-lg shadow-md mt-1 w-[95%]">
          <ul class="py-2 text-sm divide-y">
            {Payement.map((item) => (
              <li 
                key={item.title}

                onClick={()=>{
                  setIsOpen(false)
                  SetActiveItem(item)
                }}
                className=" cursor-pointer flex flex-row items-center  h-[40px] px-3 hover:bg-green-base hover:text-white ">
                {/* <img src={item.img} className=" h-10 w-10 object-cover border " /> */}
                <p
                  href="#"
                  class="block px-3 py-2 font-poppins font-semibold text-green-light text-xs"
                >
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
