import Image from 'next/image'
import React from 'react'
import galleryImg1 from '../../public/bg_images/one (1).jpg';
import galleryImg2 from '../../public/bg_images/one (2).jpg';
import galleryImg3 from '../../public/bg_images/one (3).jpg';
import galleryImg4 from '../../public/bg_images/one (4).jpg';
import galleryImg5 from '../../public/bg_images/one (5).jpg';
import galleryImg6 from '../../public/bg_images/one (6).jpg';


export default function ImagesWall() {
  return (
    // remove the width if you need it 
    <div className='p-10 m-auto flex border w-[100vw]'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-full m-auto justify-items-center'>
            <Image src={galleryImg1} width={500} height={200} alt='image'></Image>
            <Image src={galleryImg2} width={500} height={200} alt='image'></Image>
            <Image src={galleryImg3} width={500} height={200} alt='image'></Image>
            <Image src={galleryImg4} width={500} height={200} alt='image'></Image>
            <Image src={galleryImg5} width={500} height={200} alt='image'></Image>
            <Image src={galleryImg6} width={500} height={200} alt='image'></Image>

        </div>
    </div>
  )
}
