import React from 'react';
import Image from 'next/image'
import { urlFor } from '@/lib/client';



function BannerHero({data}) {
  console.log('bannier log', data[0])
    const bannerImg= urlFor(data[0].image).url(); 
  return (
    <div className='w-[95%] my-5 md:my-10 mx-auto'>
            <img src={bannerImg} className='h-auto max-w-full md:w-full object-cover  rounded-b-xl' />
    </div>
  )
}

export default BannerHero