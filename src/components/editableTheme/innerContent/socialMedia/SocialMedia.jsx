import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="w-[95%] m-auto ">
      <div className="grid grid-cols-3 h-[50px] gap-1 max-w-[500px] m-auto sm:grid-cols-4 md:grid-cols-7" >
        <div className="w-[50px] h-[50px] flex justify-center items-center border rounded">
          <FaFacebookF className="text-blue-600"/>
        </div>
        <div className="w-[50px] h-[50px] flex justify-center items-center border rounded">
          <FaXTwitter className="text-black"/>
        </div>
        <div className="w-[50px] h-[50px] flex justify-center items-center border rounded">
          <FaLinkedinIn className="text-blue-600"/>
        </div>
        <div className="w-[50px] h-[50px] flex justify-center items-center border rounded">
          <TfiYoutube className="text-red-700"/>
        </div>
        <div className="w-[50px] h-[50px] flex justify-center items-center border rounded">
          <FaInstagram className="text-red-700"/>
        </div>
        <div className="w-[50px] h-[50px] flex justify-center items-center border rounded">
          <FaGithub className=""/>
        </div>

        <div className="w-[50px] h-[50px] flex justify-center items-center border rounded">
          <FaTiktok className=""/>
        </div>
      </div>
    </div>
  );
}
