"use client"
import React, { useEffect, useRef, useState } from 'react'

export default function TableOfContent() {

// logic for scroll effect
    const [scrollToPage, setScrollToPage] =useState()
   const myRef = useRef()
   console.log("my element"+scrollToPage)
    const myEffect =useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const enrty =entries[0]
            setScrollToPage(!enrty.isIntersecting)

        })
        observer.observe(myRef.current)
    },[])



        return (
        <div className='flex p-10 m-auto '>
            {/* side menu */}
            <div className='w-[30%] fixed hidden md:block left-4'>
                <ul className='flex flex-col gap-4 font-light list-none '>
                    <li className={`pl-1 text-gray-400  cursor-pointer hover:text-gray-800 ${!scrollToPage ? 'border-l-4 border-black cursor-pointer':""}`}>Intuitive system</li>
                    <li className={`pl-1 text-gray-400  cursor-pointer hover:text-gray-800 ${scrollToPage ? 'border-l-4 border-black cursor-pointer':""}`}>Design Features</li>
                </ul>
            </div>


            {/* main page */}
            <div className='m-auto md:float-end w-[80%] md:ml-36'>
                <div className='flex flex-col gap-5 p-4 '>

                    {/* top of the page */}
                    <div className='flex flex-col gap-4 '>
                        <h1 className='text-4xl'>
                            Intuitive system
                        </h1>

                        <h1 className='text-3xl'>What you see is what you get</h1>
                        <h1 className='font-'>Insert text styles like headers, bold, italic, lists, and fonts with a simple WYSIWYG editor. Flexible and easy to use.</h1>
                    </div>


                    <div ref={myRef} className='flex flex-col gap-4'>
                        <h1 className='text-3xl'>Customization tool</h1>
                        <h1 className='font-'>Click and change content directly from the front-end: no complex back end to deal with.</h1>
                    </div>


                    <div className='flex flex-col gap-4'>
                        <h1 className='text-3xl'>Building blocks system</h1>
                        <h1 className='font-'>Create your page from scratch by dragging and dropping pre-made, fully customizable building blocks.</h1>
                    </div>

                </div>



                <div className='flex flex-col gap-5 p-4 '>

                    {/* Design features*/}
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-4xl'>
                            Design features
                        </h1>

                        <h1 className='text-3xl'>Bootstrap-based templates</h1>
                        <h1 className='font-'>Easily design your own Odoo templates thanks to clean HTML structure and bootstrap CSS.</h1>
                    </div>


                    <div className='flex flex-col gap-4'>
                        <h1 className='text-3xl'>Professional themes</h1>
                        <h1 className='font-'>Change theme in a few clicks, and browse through Odoos catalog of ready-to-use themes available in our app store.</h1>
                    </div>


                </div>
            </div>



        </div>
    )
}
