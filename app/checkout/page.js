"use client";
import {
  selectBasketItems,
  selectBasketTotal,
} from "@/redux/features/BaskeSlice";
import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { TbTruckDelivery, TbMoneybag } from "react-icons/tb";
import { useRouter } from "next/navigation";

import { useSelector } from "react-redux";

import { Controller, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { CartItem } from "../components/CartItem";
import TotalCarts from "../components/TotalCarts";
import { ImagesAssets } from "@/public/images/imageAssets";
import AccordionTitle from "../components/AccordionTitle";
import Coordonate from "../components/Coordonate";
import Deliver from "../components/Deliver";
import Payement from "../components/Payement";
import Accordion from "../components/Accordion";

const Checkout = () => {
  const items = useSelector((state) => selectBasketItems(state));
  const totalCart = useSelector((state) => selectBasketTotal(state));
  const basketCount = useSelector(selectBasketItems);
  const DELIVER_PRICE = 5500;

  const uniqueIds = new Set();
  const uniqueItem = items.filter((element) => {
    const isDuplicate = uniqueIds.has(element._id);

    uniqueIds.add(element._id);

    if (!isDuplicate) {
      return true;
    }

    return false;
  });

  const setProvider = (index) => {
    if (index === 1) {
      return "MPESA";
    } else if (index === 2) {
      return "AIRTEL";
    } else if (index === 3) {
      return "ORANGE";
    }
  };

  // const { control, handleSubmit,setError, formState: { errors }, trigger} = useForm({
  //   defaultValues: {
  //     number: ''}
  // });

  const { control, handleSubmit } = useForm({});
  const [DeliverChoice, setDeliverChoice] = useState(true);
  const payData = [
    {
      id: 0,
      img: ImagesAssets.Visa,
      title: "Carte de crédit",
    },
    {
      id: 1,
      img: ImagesAssets.Mpesa,
      title: "Mpesa",
    },
    {
      id: 2,
      img: ImagesAssets.MyAirtel,
      title: "Airtel Money",
    },

    {
      id: 3,
      img: ImagesAssets.OrageM,
      title: "Orange Money",
    },
  ];
  const [ActiveItem, setActiveItem] = useState(payData[0]);
  const router = useRouter();

  const onSubmit = (data) => {
    if (ActiveItem.id === 0) {
      console.log("mode de payement Non disponible");
      toast.error(
        "Moyen de payement no disponible veuillez utiliser le mobile money"
      );
    } else {
      const { MobileMoneyNum, Name, PhoneNumber } = data;
      // console.log(data, DeliverChoice,ActiveItem.id)
      const totalPay = totalCart + DELIVER_PRICE;
      console.log(setProvider(ActiveItem.id));

      let providerData = {
        gatewayMode: 1, // required, 0 : SandBox 1 : Live
        publicApiKey:
          "MP-SBPK-2vXTyeF2$KHn/X$D$E40Tn8qI3eUOR11UYjI.0ez2mRMzQDetQt9uD$qRQ2aRwmG9iy3$ybbLid8Ekau5ZE.nbUT.Q$fa2Rb/NF0duSWDNfdomb9O9yKNfBc", // required,
        secretApiKey:
          "MP-SBPK-YCi16Efa2RcU7vk4pyr5f8J$WO/eL$GTEXnTYnIs$mC740osEzyBqiZhrLJaUxlf0o2phXK$0/oM1GCy3CNsyY$yrFqdkuPen4r1luwffOYRL$j/n7yMqhvd", // required
        transactionReference: "WenzeKin", // required
        amount: totalPay.toFixed(3), // required
        currency: "CDF", // required USD, CDF, FCFA, EURO
        customerFullName: Name, // nullable
        customerPhoneNumber: PhoneNumber, // nullable
        customerEmailAddress: null,
        chanel: "MOBILEMONEY", // required MOBILEMONEY
        provider: setProvider(ActiveItem.id), // required MPESA, ORANGE, AITEL, AFRICEL, MTN
        walletID: MobileMoneyNum, // required
      };

      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(providerData),
      };

      const confirmSell = () => {
        // setLoader(true);
        fetch(
          "https://marchand.maishapay.online/api/payment/rest/vers1.0/merchant",
          options
        )
          .then((response) => response.json())
          .then((data) => {
            setLoader(false);
            console.log(data);
            if (data.status === 200) {
              // navigation.navigate('DoneScreen', {ref:genId});
            } else {
              // navigation.navigate('ErrorScreen')

              const orders = {
                _type: "orders",
                // _id: genId,
                // user_id: {
                //     _type: 'reference',
                //     _ref: dataUser[0]._id
                //   },

                products: uniqueItem.map((item, index) => ({
                  _key: `${index}`,
                  product: item.Nom,
                  quantity: tab[index],
                })),
              };

              client
                .create(orders)
                .then((res) => {
                  // navigation.navigate('DoneScreen');
                })

                .catch((errors) => {
                  console.log("Error sanity");
                  console.log(errors);
                  navigation.navigate("ErrorScreen");
                });
            }
          })

          .catch((error) => {
            console.log("Error Maisha pay ");
            // toast.error("Transaction Echoue veuillez Reessayer ")
            router.replace("/purchase");
            // navigation.navigate('ErrorScreen')
          });
      };
      confirmSell();
    }
  };

  const accordionData = [
    {
      title: <AccordionTitle icon={AiOutlineUser}>Coordonnées</AccordionTitle>,
      content: <Coordonate Controller={Controller} control={control} />,
    },
    {
      title: <AccordionTitle icon={TbTruckDelivery}>Livraison</AccordionTitle>,
      content: (
        <Deliver
          Controller={Controller}
          control={control}
          setChoice={setDeliverChoice}
          deliverChoice={DeliverChoice}
        />
      ),
    },
    {
      title: <AccordionTitle icon={TbMoneybag}>Payement</AccordionTitle>,
      content: (
        <Payement
          Controller={Controller}
          control={control}
          ActiveItem={ActiveItem}
          setActiveItem={setActiveItem}
          Paydata={payData}
        />
      ),
    },
  ];

  // let providerData=
  //       {
  //           "gatewayMode": 1, // required, 0 : SandBox 1 : Live
  //           "publicApiKey": "MP-LIVEPK-OsUB2g$.SSqDnhfNvx5y9Ik.f$7N0RRdpy6Ra1ihlj$hKPzJLOcZ$41qgIT..$035NvSsKR2jgxy5EZySp4klpCckKxU1tsWOyreC9X0014DhvY9f$v915ur", // required,
  //           "secretApiKey" : "MP-LIVEPK-H71B$/5$jpNag214yDe2v0tEOoxj0rxKVTGySSv8Y8nu8/17jUFQ$mjcWySyeon1r5yexak9miApaRliLZe2.ku$Cn02$$D0GDyXy2Rqsv9uxP0.S2ywYWa.", // required
  //           "transactionReference": "", // required
  //           "amount":(totalCart).toFixed(3), // required
  //           "currency" : "CDF", // required USD, CDF, FCFA, EURO
  //           "customerFullName": dataUser.name, // nullable
  //           "customerPhoneNumber" : route.params.number, // nullable
  //           "customerEmailAddress" : null,
  //           "chanel":"MOBILEMONEY", // required MOBILEMONEY
  //           "provider": setProvider(providerIndex), // required MPESA, ORANGE, AITEL, AFRICEL, MTN
  //           "walletID" :route.params.number // required
  //       }

  return (
    <div className="w-[95%] md:w-[80%] mx-auto flex flex-col md:flex-row md:gap-[40px] mb-[100px] ">
      <div className=" w-full md:w-1/2  ">
        <div className=" w-[95%] md:w-[90%] mx-auto">
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
      <div className="w-full md:w-1/2 ">
        <div className="  w-full">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              {accordionData.map(({ title, content }) => (
                <Accordion key={title} title={title} content={content} />
              ))}
            </div>

            <div className=" w-[95%] mx-auto">
              <button
                type="submit"
                className={`h-[45px] w-full bg-green-base cursor-pointer hover:bg-green-base/90  rounded     flex flex-row items-center justify-center`}
              >
                <p className=" text-xs font-bold text-white">
                  Payer {totalCart}
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
