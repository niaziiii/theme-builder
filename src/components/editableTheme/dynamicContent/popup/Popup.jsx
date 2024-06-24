"use client"
import React from "react";
import Image from "next/image";

function Popup() {

      const [ShowPopUp,setShowPopUp] = React.useState(true)
  return (
    <>
    {ShowPopUp && <div className="m-auto p-10">
    <div className="flex w-full m-auto h-[500px] min-w-[400px] p-10 border shadow-xl shadow-gray-800 mt-10 max-w-[700px] justify-center relative items-center">
      <button className="w-10 h-10 absolute top-0 bg-gray-50 z-20 -end-0" onClick={()=>setShowPopUp(false)}>x</button>
        <Image src={'/images/dynamicContentimgs/website.s_popup_default_image.jpg'} width={700} height={500} 
        className=" absolute w-full h-full z-10"></Image>

        <div className="p-[10%] bg-white z-30 flex flex-col gap-5 items-center">
            <h1 className="text-5xl text-center">Win $20</h1>
            <h1 className="text-center">Check out now and get $20 off your first order.</h1>
            <button className="px-8 py-2 text-white rounded bg-[#714B]">New customer</button>
        </div>
      </div>
    </div>
      }
    </>
    
  );
}

export default Popup;
