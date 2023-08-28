"use client";
import BannerHero from "./components/BannerHero";
import SliderCards from "./components/SliderCards";
import Title from "./components/Title";
import Product from "./components/Product";
import HowItWorks from "./components/HowItWorks";
import { getBanniere, getProducts } from "@/lib/Query";
import { useSelector } from "react-redux";
import { selectBasketItems } from "@/redux/features/BaskeSlice";
import NavBar from "./components/NavBar";

export default async function Home() {
  const banner = await getBanniere();
  const productData = await getProducts();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <header>
          <BannerHero data={banner} />
        </header>
        <main className=" mb-20">
          <div className=" flex flex-row items-center w-[90%] my-10 mx-auto">
            <SliderCards productData={productData}>
              Le plus populaire
            </SliderCards>
          </div>

          <div className=" border-4 w-[90%] md:w-[80%] mx-auto py-5">
            <Title>Nos produits</Title>
            <div className=" flex flex-row items-center space-x-5 mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {productData.map((item) => (
                  <Product data={item} key={item._id} />
                ))}
              </div>
            </div>
          </div>
        </main>
        <HowItWorks />
      </main>
    </>
  );
}
