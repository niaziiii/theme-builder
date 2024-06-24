import React from 'react'

import Image from 'next/image';
import svgOne from '../../public/svgs/13_001.svg';

export default function Numbers() {
  return (
    <div className='flex flex-col w-full bg-green-900'>
        <div className='grid grid-cols-1 md:grid-cols-4'>
            <div className='flex flex-col items-center justify-center p-8'>
                <div><h1 className='text-5xl text-center text-gray-50'>12</h1><h1 className='font-bold text-center text-gray-50'>Useful options</h1></div>
            </div>

            <div className='flex flex-col items-center justify-center p-8'>
                <div><h1 className='text-5xl text-center text-gray-50'>45</h1><h1 className='font-bold text-center text-gray-50'>Beautiful snippets</h1></div>
            </div>
            
            <div className='flex flex-col items-center justify-center p-8'>
                <div><h1 className='text-5xl text-center text-gray-50'>8</h1><h1 className='font-bold text-center text-gray-50'>Amazing pages</h1></div>
            </div>

            <div className='flex flex-col items-center justify-center p-8'>
                <div><h1 className='text-5xl text-center text-gray-50'>37</h1><h1 className='font-bold text-center text-gray-50'>Outstanding images</h1></div>
            </div>
        </div>
        <div>
        <Image src={svgOne} width={1000} height={300} alt='image'></Image>
      </div>
        
    </div>
  )
}
