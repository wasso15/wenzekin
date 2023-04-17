import React from 'react'
import {FaUserAlt } from "react-icons/fa";

export const InputText = () => {
  return (
    // <div className=" bg-green-50 rounded-lg text-gray-900 text-xs border border-gray-900  focus:ring-blue-500 focus:border-blue-500  w-full flex flex-row items-center space-x-3 h-[50px] px-[20px] ">
          
    //       <input
    //         type="text"
    //         id="first_name"
    //         className=" focus:outline-none h-full w-[95%] bg-transparent"
    //         placeholder="Nom "
    //       />
    //     </div>

    <input class="appearance-none border text-xs border-orange-medium rounded-md w-full  px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-orange-medium h-[42px]"  type="text"
        placeholder='Nom'
    />


    
  )
}
