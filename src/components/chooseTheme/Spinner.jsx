"use client";
import { RiDropFill } from "react-icons/ri";
import loaderAnimation from "./loadingAnimation";
import Lottie from "react-lottie";
import { useEffect, useState } from "react";
function Spinner() {
  const [progress, setProgress] = useState(0);

  const textClasses = "text-2xl my-2";
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);
  return (
    <div className="h-screen bg-[#192028] text-white font-semibold my-0">
      <div className="flex justify-center items-center text-center text-5xl">
        <div>
          <h2 className="mt-5 mb-6">Building your website...</h2>
          <Lottie options={defaultOptions} height={320} width={320} />
          <loadingAnimation />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <h2 className={textClasses}>Tip:</h2>
        <p className={textClasses}>Once loaded, follow</p>
      </div>
      <div className="flex justify-center items-center">
        <p className={textClasses}>the</p> &nbsp; &nbsp;
        <RiDropFill className="text-5xl text-[#9c76bc]" />
      </div>
      <div className={`text-center ${textClasses}`}>
        <p> pointer to build the </p>
      </div>
      <div className={`text-center ${textClasses} mb-2`}>
        <p> perfect page in 7 steps </p>
      </div>
      <div className="w-1/4 h-4 bg-gray-200 rounded-full overflow-hidden mx-auto">
        <div
          className="h-full bg-lime-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Spinner;
