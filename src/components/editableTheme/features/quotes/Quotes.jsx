"use client";
import Carousel from "react-multi-carousel";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import quoteImg1 from "../../public/bg_images/one (1).jpg";
import quoteImg2 from "../../public/img1.jpg";
import quoteImg3 from "../../public/bg_images/one (4).jpg";
import quoteImg4 from "../../public/img4.jpg";
import quoteImg5 from "../../public/bg_images/one (3).jpg";


const Quotes = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };
  // Responsive settings for carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="mx-auto">
      <div className="m-auto slider-container">
        <Carousel
          responsive={responsive}
          infinite
          draggable={false}
          arrows
          swipeable
          // autoPlay={true}
          // autoPlaySpeed={2000}
          pauseOnHover
          renderArrowsWhenCenter={true}
          removeArrowOnEnd
          afterChange={handleSlideChange}
         >
          {/* Your custom page design */}
          <div className="h-full text-black flex items-center justify-center">
          <div className="w-full flex-shrink-0">
          <div className="w-full h-[100vh]">
            <Image
              src={quoteImg1}
              className=" absolute w-full h-screen -z-10"
              width={700}
              height={700}
            />
            <div className="flex h-full justify-center md:mr-[100px] items-center">
              <div className="z-10 w-screen md:w-[55vw] p-2 sm:p-10 flex ">
                <div className=" p-5 h-[50px] rounded-tl-lg rounded-bl-lg bg-gray-600">
                  <FaQuoteLeft />
                </div>
                <div className="flex flex-col bg-gray-50 p-5 sm:p-8 gap-4">
                  <h1 className=" z-10 pr-16">
                    Write a quote here from one of your customers. Quotes are
                    a great way to build confidence in your products or
                    services.
                  </h1>

                  <div className="flex items-center gap-5">
                    <Image
                      src={quoteImg2}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <h1 className="text-[10px] font-extralight text-gray-400">
                      John DOE • CEO of MyCompany
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>

          <div className="h-full text-black flex items-center justify-center">

          <div className="w-full flex-shrink-0">
          <div className="w-full h-[100vh]">
            <Image
              src={quoteImg3}
              className=" absolute w-full h-screen -z-10"
              width={700}
              height={700}
            />
            <div className="flex h-full justify-center md:justify-start sm:mr-[100px] items-center">
              <div className="z-10 w-screen md:w-[55vw]  sm:p-10 flex">
                <div className=" p-5 h-[50px] rounded-tl-lg rounded-bl-lg bg-gray-600">
                  <FaQuoteLeft />
                </div>
                <div className="flex flex-col bg-gray-50 p-5 sm:p-8 gap-4">
                  <h1 className=" z-10 pr-16">
                    Write a quote here from one of your customers. Quotes are a
                    great way to build confidence in your products or services.
                  </h1>

                  <div className="flex items-center gap-5">
                    <Image
                      src={quoteImg4}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <h1 className="text-[10px] font-extralight text-gray-400">
                        Iris DOE • CEO of MyCompany
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>

          <div className="h-full text-black flex items-center justify-center">

          <div className="w-full flex-shrink-0">


<div className="w-screen flex-shrink-0">
  <div className="w-full h-[100vh]">
    <Image
      src={quoteImg5}
      className=" absolute w-full h-screen -z-10"
      width={700}
      height={700}

    />
    <div className="flex h-full justify-center md:justify-end sm:mr-[100px] items-center">
      <div className="z-10 w-screen md:w-[55vw] p-2 sm:p-10 flex">
        <div className=" p-5 h-[50px] rounded-tl-lg rounded-bl-lg bg-gray-600">
          <FaQuoteLeft />
        </div>
        <div className="flex flex-col bg-gray-50 p-5 sm:p-8 gap-4">
          <h1 className=" z-10 pr-16">
            Write a quote here from one of your customers. Quotes are
            a great way to build confidence in your products or
            services.
          </h1>

          <div className="flex items-center gap-5">
            <Image
              src={"/images/img3.jpg"}
              width={50}
              height={50}
              className="rounded-full"
            ></Image>
            <h1 className="text-[10px] font-extralight text-gray-400">
            Jane DOE • CEO of MyCompany
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</div>
          </div>


          {/* Add more pages as needed */}

         
         
        </Carousel>

        <div className="w-full flex justify-center md:hidden gap-2 absolute z-20 bottom-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`w-8 h-2 bg-gray-50 rounded ${
              activeSlide === index ? "opacity-100" : "opacity-50"
            }`}
          ></div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default Quotes;
