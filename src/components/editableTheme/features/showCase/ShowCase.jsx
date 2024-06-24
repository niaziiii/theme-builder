import React from 'react';
import { IoIosDesktop } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaGift } from "react-icons/fa";

const ShowCase = () => {
    return (
        <>  
            {/* main container */}
            <div className='flex flex-col items-center justify-center w-full p-2 m-auto sm:flex-row'>
                {/* left side of the page */}
            <div className='flex flex-col sm:w-[45%] sm:mr-2'>
                <div className='flex flex-col items-start w-full gap-5 mb-10'>

                    <div className='flex items-start float-right w-full gap-5 sm:flex-row-reverse'>
                        <IoIosDesktop className='text-4xl text-gray-500'/>
                        <h1 className='text-3xl text-gray-500'>First feature</h1> 
                    </div>
                    <p className='flex justify-end w-full'>A short description of this great feature.</p>

                </div>


                <div className='flex flex-col items-start w-full gap-5 mb-10'>
                    <div className='flex items-start float-right w-full gap-5 sm:flex-row-reverse'>
                        <FaPaintBrush className='text-4xl text-gray-500'/>
                        <h1 className='text-3xl text-gray-500'>Second feature</h1>       
                    </div>
                    <p className='flex justify-end w-full'>A short description of this great feature.</p>
                </div>      
            </div>

                {/* line in between */}
                <div className="w-[2px] bg-gray-400 h-[280px] mx-5 hidden sm:block"></div>



            {/* right side of the page */}
            <div className='flex flex-col sm:w-[45%] sm:ml-2'>

                <div className='flex flex-col items-start w-full gap-5 mb-10'>
                    <div className='flex items-start float-right w-full gap-5'>
                        <FaHeart className='text-4xl text-gray-500'/>
                        <h1 className='text-3xl text-gray-500'>Another feature</h1>       
                    </div>
                    <p >A short description of this great feature.</p>
                </div>  

                <div className='flex flex-col items-start w-full gap-5 mb-10'>
                    <div className='flex items-start float-right w-full gap-5'>
                        <FaGift className='text-4xl text-gray-500'/>
                        <h1 className='text-3xl text-gray-500'>Last Feature</h1>       
                    </div>
                    <p>A short description of this great feature.</p>
                </div> 

            </div>
            <div>

            </div>
        </div>
        </>
    
    );
}

export default ShowCase;
