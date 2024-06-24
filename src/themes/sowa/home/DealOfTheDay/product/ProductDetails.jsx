import React, { useState } from "react";
import Image from "next/image";
import Rating from "./Rating";
import { Plus, Minus, Heart } from "lucide-react";

export default function ProductDetails({ product }) {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between">
      <div className="md:pr-20">
        <Image
          width={350}
          height={200}
          className="w-[18rem] "
          src={product.imgSrc}
          alt={product.title}
        />
      </div>
      <div className="px-2 md:px-0">
        <h2 className="text-2xl leading-5">{product.title}</h2>
        <div className="flex items-center gap-4 border-b pb-2 pt-4 flex-wrap md:flex-nowrap">
          <p>
            <span>Brand: </span>
            <span className="text-lightBlue"> XYZ</span>
          </p>
          <p className="bg-lightGrey h-[20px] w-[1px]"></p>
          <span className="flex items-center gap-x-1 ">
            <Rating rating={product.rating} />({product.rating} Review)
          </span>
          <p className="bg-lightGrey h-[20px] w-[1px]"></p>
          <p>
            <span>SKU: </span>
            <span> 987654321ABC</span>
          </p>
        </div>
        <div className="flex flex-col gap-x-4 border-b pb-2 pt-4">
          <div className="flex gap-2 items-end">
            <p className="text-red-600 font-bold text-2xl">
              ${product.price.discounted}
            </p>
            <p className="text-grey line-through text-sm">
              ${product.price.orignal}
            </p>
          </div>
          <div className="flex items-center gap-x-4">
            <p className="mt-2">
              <span>Store: </span>
              <span className="text-lightBlue font-semibold">
                {product.store}
              </span>
            </p>
            <p className="mt-2">
              <span>Status: </span>
              <span className="text-green font-semibold">In Stock</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-x-4 border-b pb-2 pt-4">
          {[1, 2, 3, 4].map((i) => (
            <p key={i}>Lorem de ispum de dolor isp..</p>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-6 flex-wrap md:flex-nowrap">
          <div className="flex flex-col">
            <p className="text-[11px] mb-1">Quantity</p>
            <div className="flex items-center justify-center gap-4 border rounded-sm px-4 py-2">
              <Minus
                size={18}
                className="cursor-pointer"
                onClick={() => {
                  if (count == 0) return;
                  setCount(count - 1);
                }}
              />
              <b>{count}</b>
              <Plus
                size={18}
                className="cursor-pointer"
                onClick={() => {
                  setCount(count + 1);
                }}
              />
            </div>
          </div>
          <button className="px-14 py-4 bg-yellow rounded-md font-semibold">
            Add to cart
          </button>
          <Heart size={30} />
        </div>
      </div>
    </div>
  );
}
