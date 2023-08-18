import { ImagesAssets } from "@/public/images/imageAssets";
import Image from "next/image";
import React from "react";

function HowItWorks() {
  const data = [
    {
      image: ImagesAssets.click,
      text: "Commandez un produit de votre choix sur notre plateforme.",
    },
    {
      image: ImagesAssets.package,
      text: "Nos équipes préparent  votre commande avec le plus grand soins ",
    },
    {
      image: ImagesAssets.truck,
      text: "Nous vous livrons  la commande a domicile ou Vous passez récupérez dans l’un de nos points de vente.",
    },
  ];
  return (
    <div className="w-full bg-orange-medium  ">
      <div className="  w-[90%] mx-auto lg:h-[300px] my-8  bg-orange-medium md:py-0 flex flex-row lg:flex-col items-center justify-center">
        <div className=" h-[80%] w-[90%] flex-col flex justify-center ">
          <p className=" text-white font-bold text-center lg:text-left mb-6"> Comment ça marche</p>
          <div className=" flex flex-col lg:flex-row justify-between h-[60%] items-center space-y-8 lg:space-y-0 mt-2">
            {data.map((item) => (
              <div key={item.text} className=" w-[300px] px-4 lg:px-0 space-x-4 flex flex-col lg:flex-row items-center ">
                <div className="w-[55px] h-[55px]  relative ">
                  <Image
                    src={item.image}
                    fill={true}
                    object-fit="contain"
                    alt="Logo wenzeKin"
                  />
                </div>
                <p className=" grow text-white text-[14px] text-center lg:text-left lg:w-[70px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
