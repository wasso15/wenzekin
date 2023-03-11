import React from 'react'
import Image from 'next/image'
import { ImagesAssets } from '@/public/images/imageAssets'


function NavBar() {
  return (
    <nav className=' h-[65px] bg-green-base rounded-b-[12px] flex flex-row items-center'>
       
     <div className='flex flex-row items-center w-[95%] mx-auto'>
            <div className=' w-[40%]  flex-row flex justify-between'>

                <div className=' flex flex-row items-center'>
                    <a href='#' className=''> 
                    <Image src={ImagesAssets.logoWenzeKin} height={60} width={60} alt='Logo wenzeKin'/>
                    </a> 
                    <div className='text-white'>WenzeKin</div>
                </div>
                
                <div className='bg-white/25 h-[50px] w-[300px] rounded-md flex flex-row items-center'>

                    <input className=" w-[82.5%] h-full bg-transparent text-white placeholder-white ml-3 focus:outline-none " type="text" placeholder="Recherche"/>
                    <div className='mx-2'>
                        <Image src={ImagesAssets.searchIcon} height={25} width={25} alt='Logo wenzeKin'/>
                    </div>

                </div>

                      
                <div className='flex flex-row items-center'>
                    <div className='text-white'> Categorie</div>
                    <div className='mx-2'>
                        <Image src={ImagesAssets.categoryIcon} height={25} width={25} alt='Logo wenzeKin'/>
                    </div>

                </div>

            </div>

        </div>
            
    </nav>
  )
}

export default NavBar