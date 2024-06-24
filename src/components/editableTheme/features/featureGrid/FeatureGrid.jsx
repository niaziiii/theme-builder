import React from 'react'
import { FaFlag } from "react-icons/fa";
import { TfiFiles } from "react-icons/tfi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { PiMagicWandFill } from "react-icons/pi";
import { FaEyeDropper } from "react-icons/fa6";
import { AiFillPicture } from "react-icons/ai";

export default function FeatureGrid() {
  return (
    <div className='p-8 flex flex-col  w-{500px}'>
        <div className='flex flex-col md:flex-row w-full'>


        <div className='flex flex-col m-auto  p-5 w-[550px]'>
            {/* header of the page */}
            <div>
                <h1 className='text-4xl'>First list of Features</h1>
                <h1 className='text-2xl'>Add a great slogan.</h1>
            </div>

            {/* feature one container */}
            <div className='flex items-center gap-5 w-full mt-12'>
                {/* flag */}
                <div className='rounded-full bg-green-800 w-[80px] h-[80px] flex justify-center items-center p-5'>
                    <FaFlag className='w-24 h-24 text-white'/>
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <h1 className='text-3xl'>Change Icons</h1>
                    <h1 className='text-[18px]'>Double click an icon to replace it with one of your choice.</h1>
                </div>
            </div>



            <div className='flex items-center gap-5 w-full mt-12'>
                {/* flag */}
                <div className='rounded-full bg-green-800 w-[80px] h-[80px] flex justify-center items-center p-5'>
                    <TfiFiles  className='w-24 h-24 text-white'/>
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <h1 className='text-3xl'>Duplicate</h1>
                    <h1 className='text-[18px]'>Duplicate blocks and columns to add more features.</h1>
                </div>
            </div>


            <div className='flex items-center gap-5 w-full mt-12'>
                {/* flag */}
                <div className='rounded-full bg-green-800 w-[80px] h-[80px] flex justify-center items-center p-5'>
                    <RiDeleteBin5Fill className='w-24 h-24 text-white'/>
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <h1 className='text-3xl'>Delete Blocks</h1>
                    <h1 className='text-[18px]'>Select and delete blocks to remove features.</h1>
                </div>
            </div>   
        </div>




{/* right side of the page */}
        <div className='flex flex-col m-auto p-5 w-[550px]'>
            {/* header of the page */}
            <div>
                <h1 className='text-4xl'>Second list of Features</h1>
                <h1 className='text-2xl'>Add a great slogan.</h1>
            </div>

            {/* feature one container */}
            <div className='flex items-center gap-5 w-full mt-12'>
                {/* flag */}
                <div className='rounded-full bg-gray-600 w-[80px] h-[80px] flex justify-center items-center p-5'>
                    <PiMagicWandFill className='w-24 h-24 text-white'/>
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <h1 className='text-3xl'>Great Value</h1>
                    <h1 className='text-[18px]'>Turn every feature into a benefit for your reader.</h1>
                </div>
            </div>



            <div className='flex items-center gap-5 w-full mt-12'>
                {/* flag */}
                <div className='rounded-full bg-gray-600 w-[80px] h-[80px] flex justify-center items-center p-5'>
                    <FaEyeDropper  className='w-24 h-24 text-white'/>
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <h1 className='text-3xl'>Edit Styles</h1>
                    <h1 className='text-[18px]'>You can edit colors and backgrounds to highlight features.</h1>
                </div>
            </div>


            <div className='flex items-center gap-5 w-full mt-12'>
                {/* flag */}
                <div className='rounded-full bg-gray-600 w-[80px] h-[80px] flex justify-center items-center p-5'>
                    <AiFillPicture className='w-24 h-24 text-white'/>
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <h1 className='text-3xl'>Sample Icons</h1>
                    <h1 className='text-[18px]'>All these icons are completely free for commercial use.</h1>
                </div>
            </div>   
        </div>

        </div>
        

    </div>
  )
}
