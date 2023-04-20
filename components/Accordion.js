import React, { useState } from 'react'

const Accordion = ({ title, content}) => {
    const [isActive, setIsActive] = useState(false);

 
  return (
       

            <div className="accordion-item">
            <div 
                onClick={() => setIsActive(!isActive)}
                className=" cursor-pointer border-b-[3px] flex flex-row justify-between px-2 text-sm text-gray-500 font-semibold py-[14px] border-orange-medium mb-[30px]">
                <div>{title}</div>
                <div>+</div>
            </div>
            {isActive && <div className=" w-[95%] mx-auto mb-[30px]">{content}</div>}
            </div>
  )
}

export default Accordion