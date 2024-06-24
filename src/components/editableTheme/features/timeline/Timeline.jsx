import React from "react";
import { FaChild } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaAsterisk } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";

const TimeLine = () => {
  return (
    <div className="m-auto p-3">
      <div className="m-auto md:flex flex-col relative max-w-[1200px] md:m-5 h-screen md:h-[400px] overflow-hidden">
        <div className="flex justify-center flex-col items-center">
          {/* Center line */}
          <div className="w-[1px] h-[1200px] absolute -z-10 bg-black"></div>
          <h1 className="text-xl bg-white md:absolute md:top-[25px] top-0  mt-5">2019</h1>
        </div>

        <div className="flex items-center gap-2 md:float-start bg-white mt-5 md:w-[45%] ">
          <div className="border p-2">
            <h1 className="text-xl mb-2">Your title</h1>
            <h1>
              A timeline is a graphical representation on which important events
              are marked.
            </h1>
          </div>
          <div className="bg-gray-500 rounded-full p-5">
            <FaChild className="text-xl text-white" />
          </div>
        </div>

        <div className="flex justify-center flex-col items-center">
          <h1 className="text-xl bg-white md:absolute top-[155px] mt-5">2018</h1>
        </div>

        <div className="flex items-center gap-2 md:float-start bg-white mt-5 md:w-[45%] ">
          <div className="border p-2 w-full">
            <h1 className="text-xl mb-2">Your title</h1>
            <h1>
            You can edit, duplicate...
            </h1>
          </div>
          <div className="bg-gray-500 rounded-full p-5">
            <RiGraduationCapFill className="text-xl text-white" />
          </div>
        </div>


        <div className="flex items-center gap-2 flex-row-reverse md:absolute md:left-[55%] md:top-[128px] md:float-start bg-white mt-5 md:w-[45%] ">
          <div className="border p-2 w-full">
            <h1 className="text-xl mb-2">Your title</h1>
            <h1>
            ...and switch the timeline contents to fit your needs.
            </h1>
          </div>
          <div className="bg-gray-500 rounded-full p-5">
            <FaAsterisk className="text-xl text-white" />
          </div>
        </div>

        <div className="flex justify-center flex-col items-center">
          <h1 className="text-xl bg-white md:absolute top-[250px] sm:mt-16 mt-8">2015</h1>
        </div>

        <div className="flex items-center gap-2 flex-row-reverse md:absolute md:left-[55%] md:top-[228px] sm:mt-10 md:float-start bg-white mt-5 md:w-[45%] ">
          <div className="border p-2 w-full">
            <h1 className="text-xl mb-2">Your title</h1>
            <h1>
            Use this timeline as a part of your resume, to show your visitors what you've done in the past.
            </h1>
          </div>
          <div className="bg-gray-500 rounded-full p-5">
            <FaBolt className="text-xl text-white" />
          </div>
        </div>
        

        

      </div>
    </div>
  );
};

export default TimeLine;
