import Image from 'next/image';
import React from 'react';
import itemImg from '../../public/archery_board.jpg';
const Items = () => {
    return (
        <div className='flex justify-center w-full m-auto border'>
            <div className='grid w-full grid-cols-2 gap-6 m-5 md:grid-cols-6 sm:grid-cols-3 justify-items-center'>

                <div className='flex flex-col items-center gap-6 '>
                    <Image src={itemImg} className='w-full ' width={200} height={200}></Image>

                    <button className='rounded bg-gray-600 w-full p-2 text-center text-[1.5vw]  text-gray-50'>Furniture</button>
                </div>

                <div className='flex flex-col items-center gap-6 '>
                    <Image src={itemImg} className='w-full ' width={200} height={200}></Image>

                    <button className='rounded bg-gray-600 w-full p-2 text-center text-[1.5vw]  text-gray-50'>Clothes</button>
                </div>

                <div className='flex flex-col items-center gap-6 '>
                    <Image src={itemImg} className='w-full ' width={200} height={200}></Image>

                    <button className='rounded bg-gray-600 w-full p-2 text-center text-[1.5vw]  text-gray-50'>Books</button>
                </div>

                <div className='flex flex-col items-center gap-6 '>
                    <Image src={itemImg} className='w-full ' width={200} height={200}></Image>

                    <button className='rounded bg-gray-600 w-full p-2 text-center text-[1.5vw]  text-gray-50'>Essential oils</button>
                </div>

                <div className='flex flex-col items-center gap-6 '>
                    <Image src={itemImg} className='w-full ' width={200} height={200}></Image>

                    <button className='rounded bg-gray-600 w-full p-2 text-center text-[1.5vw]  text-gray-50'>Service</button>
                </div>

                <div className='flex flex-col items-center gap-6 '>
                    <Image src={itemImg} className='w-full' width={200} height={200}></Image>

                    <button className='rounded bg-gray-600 w-full p-2 text-center text-[1.5vw]  text-gray-50'>Multimedia</button>
                </div>
            </div>

            

        </div>
    );
}

export default Items;
