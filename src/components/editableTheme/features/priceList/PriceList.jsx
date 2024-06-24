import React from 'react'

function PriceList() {
  return (
    <div className='w-full max-w-[1200px] min-w-[600px] bg-gray-600 m-auto px-10 flex flex-col items-center'>

        <div className='flex flex-col w-full items-center m-auto gap-4 p-3'>

            <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 content-between p-5'>
                
                     
                     <div className=' flex-row items-center w-full justify-between gap-4 min-w-[190px]'>
                            <div className='flex flex-col gap-3'><h1 className='text-white text-4xl'>Menu</h1>
                            <h1 className='text-xl text-white'>Add a menu description.</h1>
                            </div>
                            <h1 className='text-3xl text-white'>Starter</h1>

                            <div className='flex items-center gap-2'><h1 className='text-white '>Cheese Onion Rings</h1>
                            <div className='h-px border border-dotted flex-1 min-w-[100] px-1'></div>
                            <h1 className='text-white'>$9.00</h1>
                            </div>

                            <div className='flex items-center gap-2'><h1 className='text-white '>Chefs Fresh Soup of the Day</h1>
                            <div className='h-px border border-dotted flex-1 min-w-[100] px-1'></div>
                            <h1 className='text-white'>$7.50</h1>
                            </div>

                            <div className='flex items-center gap-2'><h1 className='text-white '>Beef Carpaccio</h1>
                            <div className='h-px border border-dotted flex-1 min-w-[100] px-1'></div>
                            <h1 className='text-white'>$10.50</h1>
                            </div>

                        </div>

                        <div className=' flex-row items-center w-full justify-between gap-1 lg:mt-[80px] min-w-[190px]'>
                            <h1 className='text-3xl text-white'>Main Course</h1>

                            <div className='flex items-center gap-2'><h1 className='text-white '>Filet Mignon 8oz</h1>
                            <div className='h-px border border-dotted flex-1 min-w-[100] px-1'></div>
                            <h1 className='text-white'>$15.50</h1>
                            </div>

                            <div className='flex items-center gap-2'><h1 className='text-white '>Farm Friendly Chicken Supreme</h1>
                            <div className='h-px border border-dotted flex-1 min-w-[100] px-1'></div>
                            <h1 className='text-white'>$15.50</h1>
                            </div>

                            <div className='flex items-center gap-2'><h1 className='text-white '>Tuna and Salmon Burger</h1>
                            <div className='h-px border border-dotted flex-1 min-w-[100] px-1'></div>
                            <h1 className='text-white'>$12.00</h1>
                            </div>

                        </div>
            </div>
        </div>


    </div>
  )
}

export default PriceList