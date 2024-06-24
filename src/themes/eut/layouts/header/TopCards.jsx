import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
// // import { useDispatch, useSelector } from "react-redux";
// // import { openProductslide } from "@/redux/productsSlice";
import Image from "next/image";
import Link from "next/link";
function TopCards() {
  // const dispatch = useDispatch();
  // const cartItem = useSelector((state) => state.product.cartItems);
  const handleOpenSlide = () => {
    dispatch(openProductslide());
  };
  return (
    <main className="h-[45px] flex justify-end items-center  bg-[#A6CE39]">
      <div></div>
      <div className="flex items-center gap-16">
        <div className="flex items-center gap-2">
          <div className="xs:hidden md:flex">
            <div className="h-full w-[45px] flex justify-center items-center ">
              <FaFacebookF className="text-white" />
            </div>
            <div className="h-full w-[45px] flex justify-center items-center ">
              <FaTwitter className="text-white" />
            </div>
            <div className="h-full w-[45px] flex justify-center items-center ">
              <FaInstagram className="text-white" />
            </div>
            <div className="h-full w-[45px] flex justify-center items-center ">
              <FaYoutube className="text-white" />
            </div>
          </div>

          <div
            className="py-[12px]  flex justify-center items-center cursor-pointer "
            // onClick={handleOpenSlide}
          >
            <IoCartOutline className=" text-white" />
            <div className="font-bold text-white bg-[#0477BE] rounded-full text-[10px] w-[16px] h-[16px] flex justify-center  -translate-x-1 -translate-y-3  ">
              0
            </div>
          </div>
          <div className="py-[12px]  flex justify-center items-center ">
            <Link href="/favorites">
              <IoMdHeart className=" text-white" />
            </Link>
            <div className="font-bold text-white bg-[#0477BE] rounded-full text-[10px] w-[16px] h-[16px] flex justify-center  -translate-x-1 -translate-y-3  ">
              0
            </div>
          </div>
        </div>
        <div className="w-8 h-8 border rounded-full flex items-center justify-center">
          {/* <Image src = "#"  width={8} height={8} alt="avatar" className="rounded-full" /> */}
        </div>
      </div>
    </main>
    
   
  );
}

export default TopCards;
