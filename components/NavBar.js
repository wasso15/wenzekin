import React from 'react'
import Image from 'next/image'
import { ImagesAssets } from '@/public/images/imageAssets'
import { FiUser } from 'react-icons/fi';
import { CgShoppingCart } from 'react-icons/cg';
import { MdSearch } from 'react-icons/md';
import Link from 'next/link';


function NavBar() {
  return (
    <nav className=' h-[55px] bg-green-base rounded-b-[15px] flex flex-row items-center'>
       
     <div className='flex flex-row items-center w-[95%] justify-between mx-auto '>

            <div className=' w-[70%] lg:w-[650px] flex-row flex justify-between  items-center'>

                <div className=' flex flex-row items-center'>
                    <Link href='/'  className="w-[40px] h-[35px]  md:h-[50px] md:w-[60px] relative "> 
                       <Image src={ImagesAssets.logoWenzeKin} fill={true}  object-fit= "contain" alt='Logo wenzeKin'/>
                    </Link> 
                </div>
                
                <div className='bg-white/25 h-[40px]  ml-4 md:ml-2 md:h-[41px] w-[380px] rounded-md flex flex-row items-center'>

                    <input className=" w-[80%] h-full bg-transparent text-white text-[10px] md:text-[14px] placeholder-white ml-4 focus:outline-none  " type="text" placeholder="Recherche"/>
                    <MdSearch color='white' size={26}/>

                </div>

                      
                <div className='flex flex-row items-center'>
                    <div className='text-white text-[14px] hidden lg:block'> Categorie</div>
                    <div className='ml-3 md:mx-2 h-[20px] w-[20px]  md:h-[22px]  md:w-[22px] relative'>
                        <Image src={ImagesAssets.categoryIcon} fill={true} object-fit= "contain"  alt='Logo wenzeKin'/>
                    </div>

                </div>

            </div>

            <div className=' w-[20%] lg:w-[250px] flex-row flex justify-between lg:justify-around items-center'>

                      
                <div className='flex flex-row items-center '>
                    
                        <FiUser color='white' className=' text-[22px] md:text-[26x] ' />
                    <div className='text-white ml-2 text-[14px] hidden md:block'> Login </div>

                </div>

               <div className=' lg:w-[120px] flex flex-row items-center justify-center'>
               <div className='flex flex-row items-center relative  '>
                    
                    <CgShoppingCart color='white' className="text-[24px] md:text-[24px] md:mr-2"/>
                    <div className='text-white ml-2 text-[14px] mr-2 hidden lg:block'> Panier </div>
                    <div className=' absolute -top-1 -right-2 text-[10px] mr-1 md:mr-0 h-4 w-4 rounded-full bg-orange-medium flex flex-row items-center justify-center md:hidden text-white'> 2</div>

                </div>

                <div className=' hidden flex-row h-6 w-8 items-center bg-orange-medium rounded-sm  md:flex  justify-center'>
                                       
                    <div className='text-white text-xs font-medium'> 2 </div>

                </div>
               </div>

            </div>

        </div>


            
    </nav>
  )
}

export default NavBar