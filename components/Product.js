import React from "react";
import { urlFor } from "@/lib/client";
import Link from "next/link";

function Product({ data }) {
  // console.log("data product", data);
  const { image, Nom,prix,slug,_id } = data;
  console.log(slug)
  const productImg = urlFor(image).url();
  return (
    <Link key={_id} href={`/product/${slug.current}`} className="max-w-sm overflow-hidden  shadow-lg h-[290px] transform transition duration-200 hover:scale-105 hover:rotate" >
      <img
        className="w-full h-[180px] rounded-t-xl object-cover"
        src={productImg}
        alt="Mountain"
      />

      <div className="h-[110px]  relative -top-3 rounded-xl bg-white px-4">
        <div className="w-full">
          <p className=" text-silver  font-bold text-base pt-3">{Nom}</p>

          <div className=" flex flex-row justify-between">
            <p className=" text-silver  text-xs">Vivre Frais </p>

            <div className=" flex">
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-orange-medium"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <p className=" font-bold text-orange-medium  text-xs">1/5</p>
            </div>
          </div>
          <div className="mt-3 flex flex-row items-center justify-between"> 
            <p className=" text-xs font-bold text-orange-medium">{prix}Fc/Kg</p>

            <div  className=" h-[35px] w-[100px] bg-green-base rounded hover:bg-green-base/90  cursor-pointer  flex flex-row items-center justify-center">
                <p className=" text-xs font-bold text-white">Voir</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
