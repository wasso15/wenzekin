import Image from 'next/image'
import BannerHero from './components/BannerHero'
import SliderCards from './components/SliderCards'
import Title from './components/Title'
import Product from './components/Product'
import HowItWorks from './components/HowItWorks'
import client from '@/lib/client'
import { groq } from "next-sanity";


export default async function Home() {

  async function getBanniere() {
    return client.fetch(groq`*[_type=="Banner"]`);
  }

  async function getProducts() {
    return client.fetch(groq`*[_type=="Products"]`);
  }

  const banner= await getBanniere()
  const productData= await getProducts()

  console.log(productData)



  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header>
        <BannerHero data={banner} />
      </header>
      <main className="">
        <div className=" flex flex-row items-center w-[90%] my-10 mx-auto">
          
          <SliderCards productData={productData}>Le plus populaire</SliderCards>
          
        </div>

        <div className=" w-[80%]  mx-auto py-5">
            <Title>Nos produits</Title>
            <div className=" flex flex-row items-center space-x-5 mt-6">
              <div className="m-auto  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {productData.map((item) => (
                  <Product data={item} key={item._id} />
                ))}
              </div>
            </div>
          </div>
      </main>
      <HowItWorks/>
    </main>
  )
}
