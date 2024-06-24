import React from 'react';
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaUnlock } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { BiSolidPlaneAlt } from "react-icons/bi";

const Steps = () => {
    return (
        <div className='max-w-[1200px] relative m-auto grid grid-cols-1 lg:grid-cols-4 gap-6 mt-4'>
            

            <div className='w-[73%] -z-10 hidden h-[2px] bg-gray-600 absolute left-[15%] top-[40px] lg:block'></div>

            <div className='m-auto flex flex-col items-center gap-5 w-[280px] mt-1'>
                <div className='bg-green-800 w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                    <RiShoppingBasketLine  className='text-5xl '/>
                </div>
                <div className='w-[90%] flex flex-col items-center  justify-center'>
                    <h1 className='text-4xl'>Add To Cart</h1>
                    <h1 className='text-center text-lg'>Let your customers follow and understand your process.</h1>

                </div>
            </div>

            

            <div className='m-auto flex flex-col items-center gap-5 w-[280px] mt-1'>
                <div className='bg-green-950 w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                    <FaUnlock  className='text-3xl text-white'/>
                </div>
                <div className='w-[90%] flex flex-col items-center  justify-center'>
                    <h1 className='text-4xl'>Sign in</h1>
                    <h1 className='text-center text-lg'>Click on the icon to adapt it to your purpose.</h1>

                </div>
            </div>


            

            <div className='m-auto flex flex-col items-center gap-5 w-[280px] mt-1'>
                <div className='bg-gray-600 w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                    <FaPaypal  className='text-4xl text-gray-50'/>
                </div>
                <div className='w-[90%] flex flex-col items-center  justify-center'>
                    <h1 className='text-4xl'>Pay</h1>
                    <h1 className='text-center text-lg'>Duplicate blocks to add more steps.</h1>

                </div>
            </div>


            



            <div className='m-auto flex flex-col items-center gap-5 w-[280px] mt-1'>
                <div className='bg-gray-300 w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                    <BiSolidPlaneAlt  className='text-4xl '/>
                </div>
                <div className='w-[90%] flex flex-col items-center  justify-center'>
                    <h1 className='text-4xl text-center'>Get Delivered</h1>
                    <h1 className='text-center text-lg'>Select and delete blocks to remove some steps.</h1>

                </div>
            </div>


            

    
        </div>
    );
}

export default Steps;
