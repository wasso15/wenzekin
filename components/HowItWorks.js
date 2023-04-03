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
    <div className=" w-full bg-orange-medium ">
      <div className=" w-[90%] mx-auto h-[300px] mt-[150px] bg-orange-medium flex flex-col items-center justify-center">
        <div className=" h-[80%] w-[90%] flex-col flex justify-center ">
          <p className=" text-white font-bold"> Comment ça marche</p>
          <div className=" flex flex-row justify-between h-[60%] items-center mt-2">
            {data.map((item) => (
              <div className=" w-[300px] space-x-4 flex flex-row items-center ">
                <div className="w-[55px] h-[55px]  relative ">
                  <Image
                    src={item.image}
                    fill={true}
                    object-fit="contain"
                    alt="Logo wenzeKin"
                  />
                </div>
                <p className=" grow text-white text-[14px] w-[70px]">
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
