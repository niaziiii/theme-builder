import React from 'react'

export default function Form() {
  return (
    <div className='w-full p-10 m-auto'>
        <div>
            <form action="/" className='flex flex-col w-full gap-10'>
                <span className='flex items-center gap-10'>
                    <label htmlFor="name" className='w-[20%]'>Your Name*</label>
                    <input type="text" name="name" id="name" required className='w-[80%] h-10 border  border-black rounded ' />
                </span>

                <span className='flex items-center gap-10'>
                    <label htmlFor="phoneNumber" className='w-[20%]' >Phone Number*</label>
                    <input type="number" name="phoneNumber" id="phoneNumber" required className='w-[80%] h-10 border  border-black rounded ' />
                </span>

                <span className='flex items-center gap-10'>
                    <label htmlFor="email" className='w-[20%]' >Your Email*</label>
                    <input type="emali" name="email" id="email" required className='w-[80%] h-10 border  border-black rounded ' />
                </span>

                <span className='flex items-center gap-10'>
                    <label htmlFor="company" className='w-[20%]' >Your Company*</label>
                    <input type="text" name="company" id="company" required className='w-[80%] h-10 border  border-black rounded ' />
                </span>

                <span className='flex items-center gap-10'>
                    <label htmlFor="Subject" className='w-[20%]' >Subject</label>
                    <input type="text" name="Subject" id="Subject" required className='w-[80%] h-10 border  border-black rounded ' />
                </span>

                <span className='flex items-center gap-10'>
                    <label htmlFor="Question" className='w-[20%]' >Your Question</label>
                    <textarea name="Question" id="Question" cols="30" rows="10" required className='w-[80%] h-[100px] border border-black rounded '></textarea>
                </span>
                
                <span className='flex items-center w-full pl-[22.5%]'>
                <input type="submit" name="submit" id="submit" value={"Submit"} className='bg-green-600 py-2 w-[10%] rounded' />

                </span>
                
            </form>
        </div>
        
    </div>
  )
}
