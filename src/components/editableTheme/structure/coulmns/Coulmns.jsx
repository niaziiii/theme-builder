import React from "react";
import Image from "next/image";
import columnImage1 from "../../public/ColumnsImages/image1.jpg";
import columnImage2 from "../../public/ColumnsImages/image2.jpg";
import columnImage3 from "../../public/ColumnsImages/image3.jpg";
const Columns = () => {
  return (
    <div className="max-w-[1200px] m-auto">
      <div className="grid grid-col-1 m-auto p-10 sm:grid-cols-3 gap-4">
        <div className="w-full m-auto flex flex-col gap-5 border rounded shadow">
          <Image
            src={columnImage3}
            width={300}
            height={300}
            alt="image"
            className="w-full"
          />
          <div className="w-full p-5 flex flex-col gap-5">
            <h1 className="text-3xl">Quality Archery Gear</h1>
            <h1 className="w-full">
              Buying unique archery gear means investing in the craftsmanship
              and passion of the maker. It's a conscious and ethical choice that
              supports a sustainable and direct economy.
            </h1>
          </div>
        </div>

        <div className="w-full h-full m-auto flex flex-col gap-5 border rounded shadow">
          <Image
            src={columnImage1}
            width={300}
            height={300}
            alt="image"
            className="w-full"
          />
          <div className="w-full p-5 flex flex-col gap-5">
            <h1 className="text-3xl">Expert Advice</h1>
            <h1 className="w-full">
              Whether you're a beginner or a pro, our knowledgeable staff is
              here to assist you with all your archery needs.
            </h1>
          </div>
        </div>

        <div className="w-full m-auto h-full flex flex-col gap-5 border rounded shadow">
          <Image
            src={columnImage2}
            width={300}
            height={300}
            alt="image"
            className="w-full"
          />
          <div className="w-full p-5 flex flex-col gap-5">
            <h1 className="text-3xl">For All Ages and Skill Levels</h1>
            <h1 className="w-full">
            New Arrivals Every Week
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Columns;
