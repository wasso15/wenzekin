import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'

const AccordionTitle = ({children, icon}) => {
    const Icon=icon&&icon
  return (
    <div className="w-full  mx-auto border-orange-medium flex flex-row items-center space-x-3 ">
   {icon&& <Icon
      color="#F29305"
      className="text-[24px] md:text-[20px]"
    />}
    <p className=" text-sm text-gray-500 font-semibold">
      {children}
    </p>
  </div>
  )
}

export default AccordionTitle