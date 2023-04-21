import React from 'react'
import Image from 'next/image'
import { ImagesAssets } from '@/public/images/imageAssets'
import { FiUser } from 'react-icons/fi';
import { CgShoppingCart } from 'react-icons/cg';
import { MdSearch } from 'react-icons/md';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '@/redux/features/BaskeSlice';


function NavBar() {
   const basketCount= useSelector(selectBasketItems); 
   console.log()
  return (
    <nav className='  w-full h-[52px] bg-green-base rounded-b-[15px] flex flex-row items-center'>
       
     <div className='flex flex-row items-center w-[95%] justify-between mx-auto '>

            <div className=' w-[68.5%] lg:w-[650px] flex-row flex justify-between  items-center'>

                <div className=' flex flex-row items-center'>
                    <Link href='/'  className="w-[40px] h-[35px]  md:h-[40px] md:w-[50px] relative "> 
                       <Image src={ImagesAssets.logoWenzeKin} fill={true}  object-fit= "contain" alt='Logo wenzeKin'/>
                    </Link> 
                </div>
                
                <div className='bg-white/25 h-[40px]  ml-4 md:ml-2 md:h-[36px] w-[340px] rounded-md flex flex-row items-center'>

                    <input className=" w-[85%] h-full bg-transparent text-white text-[10px] md:text-[12px] placeholder-white ml-4 focus:outline-none  " type="text" placeholder="Recherche"/>
                    <MdSearch color='white' size={26}/>

                </div>

                      
                <Link href='/category'  className=' ml-2 w-[60px] md:px-4 flex flex-row items-center border-b-[3px] border-transparent hover:border-b-[3px] active:border-orange-medium  hover:border-orange-medium h-[52px]'>
                    <div className='text-white text-[12px] hidden lg:block'> Categorie</div>
                    <div className=' mx-3 md:mx-2 h-[20px] w-[20px]  md:h-[21px]  md:w-[21px] relative'>
                        <Image src={ImagesAssets.categoryIcon} fill={true} object-fit= "contain"  alt='Logo wenzeKin'/>
                    </div>

                </Link>

            </div>

            <div className=' w-[25%] lg:w-[250px] flex-row flex justify-between lg:justify-around items-center '>

                  
                <Link 
                // href='/auth/login' 
                href={"#"}
                className='flex flex-row items-center border-b-[3px] border-transparent hover:border-b-[3px] hover:border-orange-medium h-[52px] px-4 '>
                    
                        <FiUser color='white' className=' text-[18px] md:text-[26x] ' />
                    <div className='text-white ml-2 text-[12px] hidden md:block'> Login </div>

                </Link> 

               <Link href='/checkout'  className='w-full lg:w-[120px] mr-1 flex flex-row items-center justify-center border-b-[3px] border-transparent hover:border-b-[3px] hover:border-orange-medium h-[52px] '>
               <div className='flex flex-row  relative h-7 items-center '>                  
                    
                    <CgShoppingCart color='white' className="text-[18px] md:text-[24px]"/>
                    <div className=' absolute  top-0  left-[14px] lg:-top-[5px] lg:right-[42px] text-[8px] md:text-[10px] mr-1 md:mr-0 h-4 w-4 md:h-[18px] md:w-[18px] rounded-full bg-orange-medium flex flex-row items-center justify-center  text-white'>{basketCount.length}</div> 
                    <div className='text-white ml-2 text-[12px] mr-2 hidden lg:block'> Panier </div>
                </div>
                              
                 </Link>

            </div>

        </div>


            
    </nav>
  )
}

export default NavBar