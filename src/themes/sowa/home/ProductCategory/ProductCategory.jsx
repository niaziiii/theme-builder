import React, { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { products } from "./data";
import Image from "next/image";

export default function ProductCategory() {
  const [transform, setTransform] = useState(0);
  const [dataType, setDataType] = useState(Object.keys(products)[0]);
  const [containerWidth, setContainerWidth] = useState(0);
  const data = products[dataType];

  const container = useRef();
  const difference = 128 + 56;

  const selectDataType = (type) => {
    setDataType(type);
  };
  const moveBackward = () => {
    setTransform((prev) => {
      if (prev > 0 || prev === 0) return 0;
      return prev + difference;
    });
  };

  const moveForward = () => {
    const maxProductsInView = Math.floor(containerWidth / (160 + 56));
    const maxTransform = -(
      (Object.keys(products).length - maxProductsInView) *
      difference
    );
    setTransform((prev) => {
      const value = prev - difference;

      if (value <= maxTransform - difference) {
        return prev;
      }

      return value;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (container.current) {
        setContainerWidth(container.current.clientWidth);
      }
    };

    handleResize(); // Initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full ">
      <div className="flex items-center gap-x-4 text-black">
        <b className="font-semibold text-xl">Search Trending</b>
        <p>Updated at 9:00AM</p>
      </div>
      <div className="border rounded-md py-0 mt-4 bg-white">
        {/* heading */}
        <div className="flex border-b px-4">
          <button
            className={` ${
              transform === 0 && "opacity-30"
            } border-none outline-none`}
            onClick={moveBackward}
          >
            <ChevronLeft size={40} />
          </button>
          <div
            className="flex w-[95%] m-auto items-start gap-x-14 overflow-x-hidden"
            ref={container}
            style={{ alignItems: "stretch" }}
          >
            {Object.keys(products).map((key) => {
              const product = products[key];

              return (
                <div
                  key={key}
                  className={`py-1 flex-grow border-b-2 flex-1 flex transition-all flex-col items-center justify-center w-[8rem] min-w-[8rem] max-w-[8rem${
                    dataType === key
                      ? "  border-yellow "
                      : " border-transparent"
                  }`}
                  style={{ transform: `translateX(${transform}px)` }}
                >
                  <Image
                    width={70}
                    height={50}
                    src={product.icon}
                    alt="icon"
                    className="w-[70px] min-w-[70px] cursor-pointer"
                    onClick={() => selectDataType(key)}
                  />
                  <b
                    className="text-center mt-2 text-[12px] md:text-sm cursor-pointer"
                    onClick={() => selectDataType(key)}
                  >
                    {key}
                  </b>
                </div>
              );
            })}
          </div>

          <button className="border-none outline-none" onClick={moveForward}>
            <ChevronRight size={40} />
          </button>
        </div>
        {/* content */}
        <div className="py-4 px-14 my-6 grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-20 gap-y-10 justify-center">
          {data.data.map((d, i) => (
            <Product key={i} num={data.indexNumber} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Product = ({ num }) => {
  return (
    <div className="mt-4 flex  flex-col items-center justify-center">
      <Image
        width={100}
        height={70}
        src={`/topProductCategories/image-${num}.jpg`}
        alt="icon"
        className="hover:scale-110 transition-all w-[100px] min-w-[100px]"
      />
      <b className="text-center mt-3 font-normal">test product</b>
    </div>
  );
};
