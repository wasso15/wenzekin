import { ImagesAssets } from '@/public/images/imageAssets'
import React from 'react'
import Image from 'next/image'


function Footer() {
  return (
    <footer className=' sticky top-[100vh] w-[100%] md:h-[300px] bg-green-base flex flex-col items-center justify-center'>
        <div className=' h-[80%] w-[100%] mx-auto flex flex-col-reverse lg:flex-row items-center justify-evenly '>
            
            <div className='md:w-[300px] md:h-[200px]  flex flex-col items-center justify-center my-4 md:my-0 '>
                <div className=' flex flex-row items-center'>
                    <a href='#'  className="w-[40px] h-[35px]  md:h-[50px] md:w-[60px] relative "> 
                       <Image src={ImagesAssets.logoWenzeKin}  fill={true}  object-fit= "contain"  alt='Logo wenzeKin'/>
                    </a> 
                </div>
                
                <div className=" text-white  text-xs"> 
                    WenzeKin Market
                </div>
                <div  className=" text-white font-semibold "> AllFactoring Entreprise Ltd  </div>

            </div>

            <div className=' flex flex-col  md:flex-row md:w-[550px] justify-between md:items-center'>
             
              <ul className=' mt-8 mb-4 md:my-0'>
                <li className=' leading-3 font-bold text-white mb-3'> Entreprise </li>
                <li> <a href='#' className='text-xs text-white'> A propos  </a> </li>
                <li> <a href='#' className='text-xs text-white leading-3'> Nos Shops  </a> </li>
                <li> <a href='#' className='text-xs text-white'> FAQ  </a> </li>
              </ul>

              <ul className='my-4 md:my-0'>
                <li className=' leading-3 font-bold text-white mb-3'>  Services   </li>
                <li> <a href='#' className='text-xs text-white'> Livraison </a> </li>
                <li> <a href='#' className='text-xs text-white leading-3'> Payement </a> </li>
                <li> <a href='#' className='text-xs text-white'> Contacts  </a> </li>
              </ul>
              <ul className='my-4 md:my-0'>
                <li className=' leading-3 font-bold text-white mb-3'>  Suivez nous  </li>
                <li> <a href='#' className='text-xs text-white'> Facebook  </a> </li>
                <li> <a href='#' className='text-xs text-white leading-3'> Instagram  </a> </li>
                <li> <a href='#' className='text-xs text-white'> Twitter  </a> </li>
              </ul>

            </div>
            
        </div>

        {/* <div className=' h-[20px] w-[90%] mx-auto'>
            <div className=' text-xs text-white '>
                 @ Tous droits réservées  2023
            </div>
        </div> */}
    </footer>
  )
}

export default Footer