import Image from 'next/image';
import React from 'react';
import refImg1 from "../../public/logo1.png";
import refImg2 from "../../public/logo2.png";
import refImg3 from "../../public/logo3.png";
import refImg4 from "../../public/logo4.png";
import refImg5 from "../../public/logo5.png";
import refImg6 from "../../public/logo6.png";

const References = () => {
    return (
        <div className='flex flex-col w-full m-auto mt-10 items-center gap-12 '>
            {/* header */}
            <div className='m-auto flex flex-col gap-4 w-full items-center '>
                <h1 className='text-3xl text-center'>Our References</h1>
                <h1 className='text-[15px] text-center'>We are in good company.</h1>
            </div>

            {/* logos */}
            <div className='md:flex'>
                <Image src={refImg1} className='md:w-[16%] md:h-[100px]' width={350} height={300}/>
                <Image src={refImg2} className='md:w-[16%] md:h-[100px]' width={350} height={300}/>
                <Image src={refImg3} className='md:w-[16%] md:h-[100px]' width={350} height={300}/>
                <Image src={refImg4} className='md:w-[16%] md:h-[100px]' width={350} height={300}/>
                <Image src={refImg5} className='md:w-[16%] md:h-[100px]' width={350} height={300}/>
                <Image src={refImg6} className='md:w-[16%] md:h-[100px]' width={350} height={300}/>
            </div>
        </div>
    );
}

export default References;
