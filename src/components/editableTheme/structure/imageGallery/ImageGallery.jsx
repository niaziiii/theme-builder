"use client";
import Carousel from "react-multi-carousel";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import carouselImg1 from "../../public/img1.jpg";
import carouselImg2 from "../../public/img2.jpg";
import carouselImg3 from "../../public/img3.jpg";

const ImageGallery = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  console.log("active slide" + activeSlide);

  const handleSlideChange = (index) => {
    setActiveSlide(index - 1);
  };

  const images = [
    { src: carouselImg1 },
    { src: carouselImg2 },
    { src: carouselImg3 },
  ];

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
          pauseOnHover
          renderArrowsWhenCenter={true}
          removeArrowOnEnd
          afterChange={handleSlideChange}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="h-full text-black flex items-center justify-center px-5"
            >
              <Image
                src={image.src}
                className="w-full"
                width={700}
                height={500}
                onChange={() => setActiveSlide(index)}
              />
            </div>
          ))}
        </Carousel>

        <div className="w-full flex justify-center gap-3 mt-2">
          <div
            className={`"rounded-full bg-gray-600 w-[30px] h-[30px] flex justify-center items-center  " ${
              activeSlide == 3
                ? "bg-opacity-0 rounded-full"
                : "bg-opacity-75 rounded-full"
            }`}
          >
            <Image
              src={images[0].src}
              width={50}
              height={50}
              className="rounded-full w-full h-full -z-10"
            />
          </div>

          <div
            className={`"rounded-full bg-gray-600 w-[30px] h-[30px] flex justify-center items-center  " ${
              activeSlide == 1
                ? "bg-opacity-0 rounded-full"
                : "bg-opacity-75 rounded-full"
            }`}
          >
            <Image
              src={images[1].src}
              width={50}
              height={50}
              className="rounded-full w-full h-full -z-10"
            />
          </div>

          <div
            className={`"rounded-full bg-gray-600 w-[30px] h-[30px] flex justify-center items-center  " ${
              activeSlide == 2
                ? "bg-opacity-0 rounded-full"
                : "bg-opacity-75 rounded-full"
            }`}
          >
            <Image
              src={images[2].src}
              width={50}
              height={50}
              className="rounded-full w-full h-full -z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
