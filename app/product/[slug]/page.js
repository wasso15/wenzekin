// import InputNumeric from "@/components/InputNumeric";
// import SliderCards from "@/components/SliderCards";
// import { SlugQuery, productDetails, productQuery } from "@/lib/Query";
import InputNumeric from "@/app/components/InputNumeric";
import NavBar from "@/app/components/NavBar";
import SliderCards from "@/app/components/SliderCards";
import { getProduct, getProducts } from "@/lib/Query";
import { urlFor } from "@/lib/client";
import React from "react";
// import toast, { Toaster } from "react-hot-toast";

const page = async ({ params }) => {
  const notify = () => toast.success("Here is your toast.");
  const products = await getProducts();

  console.log("slug", params.slug);

  const product = await getProduct(params.slug);

  const { image, Nom, prix, slug, _id, description } = product;
  const productImg = urlFor(image).url();

  return (
    <>
      <NavBar />
      <div className=" border flex flex-col gap-[60px]">
        <div className=" mt-10 lg:mt-16 w-[90%] lg:w-[80%] items-center justify-center   mx-auto  flex flex-col lg:flex-row gap-x-6 ">
          <div className="w-full lg:w-[45%]   ">
            <img
              className="w-full h-[250px] lg:h-[430px] rounded-xl object-cover object-center"
              src={productImg}
              alt="Mountain"
            />
          </div>

          <div className="w-full lg:w-[45%] mt-[45px]  lg:mt-[0px] ">
            <div className="border-b-[2px] border-orange-medium">
              <p className=" text-gray-700 font-bold text-[28px] text-center lg:text-left">
                {Nom}
              </p>
            </div>
            <div className="w-[90%] mx-auto mt-3">
              <div className=" flex flex-row justify-between">
                <p className=" text-silver  text-xs">
                  {" "}
                  Categorie: Vivre Frais{" "}
                </p>

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
              <div className=" flex flex-row justify-between mt-1">
                <p className=" text-orange-medium  text-xs">En stock </p>
              </div>
              <div className=" flex flex-row justify-between mt-10  ">
                <p className=" text-silver text-justify text-sm">
                  {description}
                </p>
              </div>

              <div className=" flex flex-row justify-between mt-[30px]  ">
                <InputNumeric notify={notify} data={product} />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[80%] mx-auto mb-[100px]">
          <SliderCards productData={products}>Produits Similaires</SliderCards>
        </div>
      </div>
    </>
  );
};

export default page;
