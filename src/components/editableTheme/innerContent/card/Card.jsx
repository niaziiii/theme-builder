import React from "react";
import { IoMdTime } from "react-icons/io";

export default function Card() {
  return (
    <div className="w-[95%] flex flex-col rounded overflow-hidden m-auto border">
      <div className="p-3 bg-gray-100 border-b">
        <h1>Feature Title</h1>
      </div>
      <div className="p-3 pr-16">
        <h1>
          A card is a flexible and extensible content container. It includes
          options for headers and footers, a wide variety of content, contextual
          background colors, and powerful display options.
        </h1>
      </div>
      <div className="flex items-center gap-2 p-3 bg-gray-100">
        <IoMdTime/><h1>2 days ago</h1>
      </div>
    </div>
  );
}
