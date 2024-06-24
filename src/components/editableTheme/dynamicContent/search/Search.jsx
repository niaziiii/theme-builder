import React from 'react'
import { IoIosSearch } from "react-icons/io";

export default function Search() {
  return (
    <div className='mt-16'>
        <div className='m-auto w-[60%] flex gap-4 flex-col content-start'>
            
                <h1 className='text-4xl ml-5'>Search on our website</h1>
                <p className='ml-5'>You will get results from blog posts, products, etc</p>
            

            <div className="flex ml-5 overflow-hidden border rounded-lg h-14">
                <input type="search" name="" id="" placeholder='search...' className='w-[80%] sm:w-[90%] md:w-[95%] pl-5 outline-none' />
                <div className='flex items-center justify-center h-full bg-green-500 w-[20%] sm:w-[10%] md:w-[5%]'>
                <IoIosSearch className='text-[28px]'/>
                </div>
            </div>


        </div>
        
    </div>
  )
}
