"use client";
import React, { useState } from "react";
import Link from "next/link";
import Rating from "./Rating";
import { ShoppingBag, Heart, Eye, GitCompareArrows } from "lucide-react";
import Image from "next/image";
import ProductDetails from "./ProductDetails";
import CustomModal from "../modal/CustomModal";

export default function MainProduct({ deal }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <CustomModal
          open={open}
          closeModal={() => setOpen(false)}
          content={<ProductDetails product={deal} />}
        />
      )}
      <div className="group">
        <div className="relative">
          <Image
            width={208}
            height={100}
            className="w-[13rem] "
            src={deal.imgSrc}
            alt={deal.title}
          />
          <div className="bottom-0 bg-white left-0 absolute h-[50px] hidden group-hover:flex items-center justify-around w-full">
            <div className="hover:bg-yellow cursor-pointer h-[30px] flex items-center justify-center w-[30px] p-1 rounded-full">
              <ShoppingBag size={18} />
            </div>
            <div className="hover:bg-yellow cursor-pointer h-[30px] flex items-center justify-center w-[30px] p-1 rounded-full">
              <Eye size={18} onClick={() => setOpen(true)} />
            </div>
            <div className="hover:bg-yellow cursor-pointer h-[30px] flex items-center justify-center w-[30px] p-1 rounded-full">
              <GitCompareArrows size={18} />
            </div>
            <div className="hover:bg-yellow cursor-pointer h-[30px] flex items-center justify-center w-[30px] p-1 rounded-full">
              <Heart size={18} />
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-[6px]">
          <div className="flex items-center gap-6">
            <b className="text-green  font-bold">${deal.price.discounted}</b>
            <p className="text-grey line-through">${deal.price.orignal}</p>
          </div>
          <Link
            href={"#"}
            className="text-[15px] leading-5 text-blue hover:text-yellow"
          >
            {deal.title}
          </Link>
          <div className="flex items-center gap-x-2">
            <p>Store:</p>
            <b>{deal.store}</b>
          </div>
          <Rating rating={deal.rating} />
        </div>
      </div>
    </>
  );
}
