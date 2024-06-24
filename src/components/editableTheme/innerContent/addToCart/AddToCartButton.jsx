import React from "react";
import { FaCartPlus } from "react-icons/fa";

export default function AddToCartButton() {
  return (
    <div className="w-full flex justify-center pt-5">
      <button className="text-gray-50 rounded flex text-center items-center gap-2 px-8 py-3 bg-[#a38f99] opacity-50">
        {" "}
        <FaCartPlus className="text-lg" />
        Add To Cart
      </button>
    </div>
  );
}
