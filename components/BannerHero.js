import React from 'react';
import Image from 'next/image'
// import { ImagesAssets } from '@/public/images/imageAssets';
import { urlFor } from '@/lib/client';


function BannerHero({data}) {
    const bannerImg= urlFor(data.image).url(); 
    console.log(bannerImg)
  return (
    <div className='w-[95%] my-5 md:my-10 mx-auto'>
            <img src={bannerImg} className='h-auto max-w-full  rounded-b-xl' />
    </div>
  )
}

export default BannerHero