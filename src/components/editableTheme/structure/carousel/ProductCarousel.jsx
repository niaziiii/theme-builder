"use client";
import Carousel from "react-multi-carousel";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import carouselImg1 from "../../public/img1.jpg";
import carouselImg2 from "../../public/img2.jpg";
import carouselImg3 from "../../public/img3.jpg";
const ProductCarousel = () => {
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
          <div className="h-screen text-black flex items-center justify-center">
            <div className="w-full h-full flex flex-col items-center md:items-start  justify-center">
              <Image
                src={carouselImg1 }
                width={700}
                height={500}
                className="w-screen h-screen absolute -z-10"
              ></Image>
              <div className="md:w-1/2 ml-5 mr-5 md:ml-10 flex flex-col gap-4">
                <h1 className="text-6xl">Slide Title</h1>
                <p className="text-[18px]">
                  Use this snippet to presents your content in a slideshow-like
                  format. Don't write about products or services here, write
                  about solutions.
                </p>
                <button className="bg-green-800 rounded py-3 px-5 w-[40%] md:w-[30%]">Contact us</button>
              </div>
            </div>
          </div>

          <div className="h-screen text-black flex items-center justify-center">

          <div className="w-full h-full flex flex-col items-center  justify-center">
              <Image
                src={carouselImg2 }
                width={700}
                height={500}
                className="w-screen h-screen absolute -z-10"
              ></Image>
              <div className="md:w-1/2 md:mr-5 md:ml-10 flex flex-col gap-4 items-center text-white bg-black bg-opacity-50 p-10">
                <h1 className="text-6xl text-center ">Clever Slogan</h1>
                <p className="text-center ">Storytelling is powerful.</p>
                <p className="text-[18px] text-center ">
                It draws readers in and engages them.
                </p>
                <button className="bg-green-800 rounded py-3 px-5 w-[50%] md:w-[30%] ">Contact us</button>
              </div>
            </div>
          </div>

          <div className="h-screen text-black flex items-center justify-center">

          <div className="w-full h-full flex flex-col items-end  justify-center">
              <Image
                src={carouselImg3 }
                width={700}
                height={500}
                className="w-screen h-screen absolute -z-10"
              ></Image>
              <div className="md:w-1/2  flex flex-col p-10">
                <h1 className="text-6xl w-[70%] bg-gray-50">Edit this title</h1>
                <h1 className="text-3xl w-[75%] bg-gray-50">Good writing is simple, but not simplistic.</h1>
                <p className="text-[18px]  ">
                Good copy starts with understanding how your product or service helps your customers. Simple words communicate better than big words and pompous language.
                </p>
                
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

export default ProductCarousel;
