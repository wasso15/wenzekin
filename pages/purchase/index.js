import Link from 'next/link';
import React from 'react'
import { GiShoppingBag } from 'react-icons/gi';


const index = () => {
  return (
    <div className=' w-[90%] md:w-[80%] mx-auto h-[500px] flex flex-col items-center justify-center   mb-[100px] '>
        <div className='w-full md:w-[550px] h-[400px] bg-slate-50 flex flex-col items-center justify-center rounded-xl'>
            <div className=' w-[80%] flex flex-col items-center '>
            <p className=' text-lg md:text-xl font-bold text-gray-600 text-center '>Merci pour votre achat dans notre plateforme </p>
            <p className=' text-gray-600 text-sm text-center'> Nous vous envoyons un reçu sur votre numero de telephone +243 811907343</p>
            <div>
                <GiShoppingBag className=' text-green-base text-[140px]'/>

            </div>
            <div>
                <p className=' text-center text-green-base'>Pour plus d'information contactez nous au 0811907343</p>
            </div>

            <Link href={"/"} className=" w-full mt-8">
              <button  type="submit" className={`h-[45px] w-full bg-green-base cursor-pointer hover:bg-green-base/90  rounded     flex flex-row items-center justify-center`}>
                <p className=" text-xs font-bold text-white">Retournez a l'accueil</p>
              </button>
            </Link>

            </div>

            

        </div>
    </div>
  )
}

export default index