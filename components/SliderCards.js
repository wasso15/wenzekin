import React from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Title from './Title';
import Product from './Product';

const SliderCards = ({productData, children}) => {
  return (
    <div className='flex flex-row items-center w-full'>
          <div className=" h-8 w-8 rounded  bg-green-base hover:bg-green-base/90 flex flex-row items-center justify-center">
            <MdArrowBackIosNew className=" text-white text-base" />
          </div>
          <div className=" w-[90%]  mx-auto py-5">
            <Title> {children}</Title>
            <div className=" flex flex-row items-center space-x-5 mt-10">
              <div className="m-auto  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {productData.map((item) => (
                  <Product data={item} key={item._id} />
                ))}
              </div>
            </div>
          </div>
          <div className=" h-8 w-8 rounded  bg-green-base hover:bg-green-base/90 flex flex-row items-center justify-center">
            <MdArrowForwardIos className=" text-white text-base" />
          </div>
        </div>
  )
}

export default SliderCards