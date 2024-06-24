import React from 'react'
import Image from 'next/image'
import masonaryImg1 from "../../public/bg_images/bgimage1.jpg";
export default function masonry() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 m-auto justify-items-center w-[100vw] border'>
    
            <Image className='w-full md:w-[50vw] h-full' src={masonaryImg1} width={500} height={500}/>
        
        <div className='grid grid-cols-1 md:grid-cols-2 w-full border h-full'>
          <div className='h-full'>
          <div className='flex flex-col h-1/2 justify-center border items-center w-full '><h1 className='text-center text-2xl w-full'>A Great Title</h1> <h1 className='text-center w-full'>And a great subtitle</h1></div>
            <div className='flex flex-col h-1/2 justify-center border items-center w-full bg-gray-600 '><h1 className='text-center text-2xl w-full'>A Great Title</h1> <h1 className='text-center w-full'>And a great subtitle</h1></div> 
          </div>

          <div className='h-full'>
          <div className='flex flex-col h-1/2 justify-center border items-center w-full bg-green-800'><h1 className='text-center text-2xl w-full'>A Great Title</h1> <h1 className='text-center w-full'>And a great subtitle</h1></div> 
            <div className='flex flex-col h-1/2 justify-center border items-center w-full '><h1 className='text-center text-2xl w-full'>A Great Title</h1> <h1 className='text-center w-full'>And a great subtitle</h1></div> 
          </div>
            
            
        </div>
    </div>
  )
}
