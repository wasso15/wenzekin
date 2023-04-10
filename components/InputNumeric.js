import { addToBasket } from "@/redux/features/BaskeSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { MdClose } from 'react-icons/md';

import toast from 'react-hot-toast';
import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";

import { useSelector } from 'react-redux';
import { selectBasketItems } from '@/redux/features/BaskeSlice';
import { urlFor } from "@/lib/client";

const InputNumeric = ({data, notify}) => {
 const dispatch= useDispatch();
 const basketCount= useSelector(selectBasketItems); 

 const { image, Nom, prix, slug, _id,description } = data;
 const productImg = urlFor(image).url();


console.log('input Numerique',data)
 const addProduct=()=>{
    dispatch(addToBasket(data));
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full h-[80px] mt-[50px] bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-[50px] w-[50px] rounded-xl object-cover"
                src={productImg}
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-bold text-gray-900">
               {Nom}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                  1Kg ajouter au panier 
              </p>
            </div>
          </div>
        </div>
        <div className="flex bg-green-base  rounded-r-lg ">
         
           <div  className=' lg:w-[80px] flex flex-col gap-[6px]'>
            <button
            onClick={() => toast.dismiss(t.id)} className=" p-[2px] flex flex-row justify-end">
            <MdClose className=" text-[16px] text-white"/>
            </button>
            <div className="">
            <div className='flex flex-row items-center justify-center  relative h-[40px] '>                  
                    
                    <CgShoppingCart color='white' className="text-[24px] md:text-[26px]"/>
                    <div className=' absolute top-0  left-[45px] text-[10px] mr-1 md:mr-0 h-4 w-4 md:h-[18px] md:w-[18px] rounded-full bg-orange-medium flex flex-row items-center justify-center  text-white'>{basketCount.length+1}</div>
                </div>
            </div>
               
                              
            </div>

        </div>
      </div>
    ))
  }
 
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
      <div onClick={addProduct} className=" border h-[35px] w-[100px] bg-green-base rounded hover:bg-green-base/90  cursor-pointer  flex flex-row items-center justify-center">
        <p className=" text-xs font-bold text-white">Ajouter</p>
      </div>
    </div>
  );
};

export default InputNumeric;
