"use client"
import React, { useState } from 'react';

const Tabs = () => {
    const [btnClicked,setBtnClicked] =useState(1)

   const clickHandler = (index) =>{
        setBtnClicked(index)
    }
    return (
        <div className='m-10 flex flex-col gap-5'>
            <div className='flex gap-2'>
                <button className={`rounded-lg text-center px-5 py-2 ${btnClicked == 1 ? "bg-green-800 text-gray-50 rounded-lg":"" }`} onClick={()=>{clickHandler(1)}}>Home</button>
                <button className={`rounded-lg text-center px-5 py-2 ${btnClicked == 2 ? "bg-green-800 text-gray-50 rounded-lg":"" }`} onClick={()=>{clickHandler(2)}}>Profile</button>
                <button className={`rounded-lg text-center px-5 py-2 ${btnClicked == 3 ? "bg-green-800 text-gray-50 rounded-lg":"" }`} onClick={()=>{clickHandler(3)}}>Contact</button>
            </div>

            <div className=''>
                <div>
                    {btnClicked === 1 &&
                    <p>Write one or two paragraphs describing your product or services.</p>}
                </div>
                <div>
                    {btnClicked === 2 &&
                    <p>To be successful your content needs to be useful to your readers.</p>}
                </div>
                <div>
                    {btnClicked === 3 &&
                    <p>Start with the customer – find out what they want and give it to them.</p>}
                </div>
            </div>
            
        </div>
    );
}

export default Tabs;
