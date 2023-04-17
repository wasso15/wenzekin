import { CartItem } from "@/components/CartItem";
import TotalCarts from "@/components/TotalCarts";

import {
  selectBasketItems,
  selectBasketTotal,
} from "@/redux/features/BaskeSlice";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { TbTruckDelivery ,TbMoneybag} from "react-icons/tb";
import { BsShop } from "react-icons/bs";

import { useSelector } from "react-redux";
import Accordion from "@/components/Accordion";
import Title from "@/components/Title";
import CreditCard from "@/components/CreditCard";
// import { useForm, Controller } from "react-hook-form";
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

  // const { control, handleSubmit,setError, formState: { errors }, trigger} = useForm({
  //   defaultValues: {
  //     number: ''}
  // });

  const onSubmit = (data) => {};

  const accordionData = [
    {
      title: 'Section 1',
      content: <CreditCard/>
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia d reprehenderit a ab odit!`
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];

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
            {uniqueItem.length > 0 ? (
              <div className=" flex flex-col gap-6">
                {uniqueItem.map((item, index) => (
                  <CartItem key={index} data={item} />
                ))}
                <TotalCarts totalCart={totalCart} />
              </div>
            ) : (
              <div className="  mt-[35px] w-full h-[300px] flex flex-row items-center justify-center">
                <p className=" text-gray-400 text-base  text-center ">
                  Le panier est vide
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border w-1/2 ">
        <div className="border w-full">
          <div className="w-full border-b-[3px] mx-auto py-3 border-orange-medium flex flex-row items-center space-x-3">
            <AiOutlineUser
              color="#F29305"
              className="text-[24px] md:text-[20px]"
            />
            <p className=" text-sm text-gray-500 font-semibold">Coordonnées</p>
          </div>
          <div>
            <form className="mt-5">
              <div className=" flex flex-col gap-6 border">
                <input
                  class="appearance-none border text-xs border-orange-medium rounded-md w-full  px-2 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-orange-medium h-[42px]"
                  type="text"
                  placeholder="Nom"
                />

                <input
                  class="appearance-none border text-xs border-orange-medium rounded-md w-full  px-2 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-orange-medium h-[42px]"
                  type="tel"
                  placeholder="Telephone"
                />
              </div>
              <div className="mt-[20px]">
                <div className="w-full border-b-[3px] mx-auto py-3 border-orange-medium flex flex-row items-center space-x-3 ">
                  <TbTruckDelivery
                    color="#F29305"
                    className="text-[24px] md:text-[20px]"
                  />
                  <p className=" text-sm text-gray-500 font-semibold">
                    Livraison
                  </p>
                </div>

                <div className=" w-[95%] border-4 mx-auto border-green-base flex flex-row gap-20 mt-5 ">
                  <div className="border h-[70px] bg-orange-medium w-full rounded-md flex flex-row items-center justify-center space-x-2">
                    <TbTruckDelivery className="text-[24px] text-white md:text-[20px]" />
                    <p className=" text-sm text-white font-semibold">
                      Livraison
                    </p>
                  </div>

                  <div className="border h-[70px] bg-orange-medium w-full rounded-md flex flex-row items-center justify-center space-x-2 ">
                    <BsShop className="text-[24px] text-white md:text-[20px]" />
                    <p className=" text-sm text-white font-semibold">
                      Collecte
                    </p>
                  </div>
                </div>
                <div className=" flex flex-row gap-6 border w-[95%] mx-auto mt-5">
                  <input
                    class="appearance-none border text-xs border-orange-medium rounded-md w-full  px-2 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-orange-medium h-[42px]"
                    type="text"
                    placeholder="Adresse complet & reference"
                  />
                </div>
              </div>

              <div className="mt-[20px]">
                <div className="w-full border-b-[3px] mx-auto py-3 border-orange-medium flex flex-row items-center space-x-3 ">
                  <TbMoneybag
                    color="#F29305"
                    className="text-[24px] md:text-[20px]"
                  />
                  <p className=" text-sm text-gray-500 font-semibold">
                    Payement
                  </p>
                </div>

                <div className=" border border-green-base">
                  {
                    accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content}/>))

                  }
                </div>
              </div>
            </form>

            {/* <View className="w-[90%] mx-auto">
                <View 
                    className={ `flex-row justify-between mt-2 items-center h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded 
                    ${errors.marchandName ? "focus:ring-[#E84E1B] border-[#E84E1B]  focus:border-[#E84E1B]":"focus:ring-blue-500 focus:border-blue-500"  }`}>
                    <View className="  pl-2 pr-2 ">
                         <Entypo name="shop" size={24} color="black" />            
                    </View> 

                    <Controller control={control} rules={{
                        required: "Nom de l'entreprise requise",
                        minLength: {
                          value: 2,
                          message: " 3 Caracteres requis au minimun ",
                        },
                    }}
                        name="marchandName"
                        render={({ field: { onChange, onBlur, value, } }) => (
                        <TextInput
                            className=" text-gray-500 font-semibold w-[90%] h-full  "
                            onBlur={onBlur}
                            onChangeText={(text)=>{onChange(text); trigger('marchandName')}}
                            value={value}
                            placeholder=" Nom de l'entreprise"
                            keyboardType='default'
                            />)}
                            
                    />
                   
                </View>  
                <View className="h-5 ">
                     {errors.marchandName && <Text className=" text-xs text-[#E84E1B]"> {errors.marchandName.message}</Text>}
                </View>
            </View> */}
            <div className=" border w-[90%] mx-auto"></div>
          </div>
        </div>
        {/* <Payement/> */}
      </div>
    </div>
  );
};

export default index;
