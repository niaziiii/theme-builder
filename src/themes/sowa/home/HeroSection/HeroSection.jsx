import React from "react";
import SlideShow from "./SlideShow";
import Image from "next/image";

export default function HeroSection({ section }) {
  const productsItems = [
    {
      className: "col-span-3 row-span-2",
      content: <SlideShow />,
    },
    {
      className: "bg-white",
      content: <Product src="/test.png" />,
    },
    {
      className: "bg-[#feecbc]",
      content: <Product src="/test.png" />,
    },
    {
      className: "bg-[#efe8f0]",
      content: <Product src="/test.png" />,
    },
    {
      className: "bg-[#efe8f0]",
      content: <Product src="/test.png" />,
    },
    {
      className: "col-span-3 p-2 bg-[#efe8f0]",
      content: <Product src="/test.png" />,
    },
    {
      content: <Product src="/test.png" />,
      className: "bg-[#efe8f0]",
    },
    {
      className: "bg-white",
      content: <Product src="/test.png" />,
    },
  ];

  return (
    <div className="w-full">
      <div className="md:grid hidden grid-cols-5 bg-white gap-0 w-full rounded-md overflow-hidden ">
        {productsItems.map((item, i) => (
          <ProductBox
            key={i}
            className={item.className}
            content={item.content}
          />
        ))}
      </div>
      <div>
        <div className="md:hidden block">
          <SlideShow />
        </div>
      </div>
    </div>
  );
}

const Product = ({
  src = "",
  alt = "product image",
  className = "w-[80px] h-[100px] min-h-[100px] max-h-[100px]",
}) => {
  return (
    <div className="h-[135px] min-h-[135px] max-h-[135px] flex items-center justify-center">
      <Image width={80} height={80} src={src} className={className} alt={alt} />
    </div>
  );
};

const ProductBox = ({ className = "", content }) => {
  return (
    <div
      className={`border border-black/10 flex items-center justify-center  ${className}`}
    >
      {content}
    </div>
  );
};
