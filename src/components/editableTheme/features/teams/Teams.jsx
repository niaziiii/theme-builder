import React from 'react';
import Image from 'next/image';
import teamImg1 from "../../public/img1.jpg"; 
import teamImg2 from "../../public/img2.jpg";
import teamImg3 from "../../public/img3.jpg";
import teamImg4 from "../../public/img4.jpg";



const Teams = () => {
    return (
        <div className='m-auto max-w-[1200px] flex flex-col gap-10'>

            <div className='w-full flex flex-col md:flex-row m-auto gap-10'>
                  {/* member one card */}
            <div className='flex justify-center flex-col items-center w-[80%] m-auto md:w-[48%] md:flex-row gap-2'>
                <div className='md:w-[30%]'>
                    <Image className='rounded-full' src={teamImg1} alt="team-1" width={150} height={150} />
                </div>
                <div className='md:w-[70%]'>
                    <h1 className='text-[20px] font-extralight'>Tony Fred, CEO</h1>
                    <p className='font-extralight'>Founder and chief visionary, Tony is the driving force behind the company. He loves to keep his hands full by participating in the development of the software, marketing, and customer experience strategies.</p>
                </div>
            </div>


            <div className='flex justify-center flex-col items-center w-[80%] m-auto md:w-[48%] md:flex-row gap-2'>
                <div className='md:w-[30%]'>
                    <Image className='rounded-full' src={teamImg2} alt="team-1" width={150} height={150} />
                </div>
                <div className='md:w-[70%]'>
                    <h1 className='text-[20px] font-extralight'>Mich Stark, COO</h1>
                    <p className='font-extralight'>Mich loves taking on challenges. With his multi-year experience as Commercial Director in the software industry, Mich has helped the company to get where it is today. Mich is among the best minds.</p>
                </div>
            </div>
            </div>


            <div className='w-full flex flex-col md:flex-row m-auto gap-10'>
                  {/* member one card */}
            <div className='flex justify-center flex-col items-center w-[80%] m-auto md:w-[48%] md:flex-row gap-2'>
                <div className='md:w-[30%]'>
                    <Image className='rounded-full' src={teamImg3} alt="team-1" width={150} height={150} />
                </div>
                <div className='md:w-[70%]'>
                    <h1 className='text-[20px] font-extralight'>Aline Turner, CTO</h1>
                    <p className='font-extralight'>Aline is one of the iconic people in life who can say they love what they do. She mentors 100+ in-house developers and looks after the community of thousands of developers.</p>
                </div>
            </div>


            <div className='flex justify-center flex-col items-center w-[80%] m-auto md:w-[48%] md:flex-row gap-2'>
                <div className='md:w-[30%]'>
                    <Image className='rounded-full' src={teamImg4} alt="team-1" width={150} height={150} />
                </div>
                <div className='md:w-[70%]'>
                    <h1 className='text-[20px] font-extralight'>Iris Joe, CFO</h1>
                    <p className='font-extralight'>Iris, with her international experience, helps us easily understand the numbers and improves them. She is determined to drive success and delivers her professional acumen to bring the company to the next level.</p>
                </div>
            </div>
            </div>


          
            
        </div>
    );
}

export default Teams;
