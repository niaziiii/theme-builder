import React from "react";
import Image from "next/image";
import imgText from "../../public/imgText.jpg";
export default function ImageText() {
  const listItems = [
    "Write one or two paragraphs describing your product or services. To be successful your content needs to be useful to your readers.",
    "Start with the customer – find out what they want and give it to them."
  ];
  return (
    
    <div className="flex justify-around">
      <div>
        <Image
          width={400}
          height={600}
          src={
            imgText }
        />
      </div>
      <div className="bg-white w-2/6 px-2">
        <h2 className=" text-4xl font-medium my-8">
          Section <br/> Subtitle
        </h2>
        <ul className="my-12">
          {listItems.map((item, id) => (
            <div className="my-8" key={id}>
              <li>{item}</li>
            </div>
          ))}
        </ul>
        <button className="bg-[#3C4E5E] text-white px-8 py-3 text-sm my-8">
          Discover more
        </button>
      </div>
    </div>
    
  );
}
