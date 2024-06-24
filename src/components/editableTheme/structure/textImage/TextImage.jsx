import React from "react";
import Image from "next/image";
import textImg from "../../public/textImg.jpg";
export default function TextImage() {
  const listItems = [" Users are looking to consume engaging content." , "We empowers our teams to create the most relevant content." , "We have one goal in mind, the user satisfaction."]
  return (
      <div className="flex justify-around">
      <div className="bg-white w-2/6 px-2">
        <h2 className=" text-4xl font-medium my-5">
          Unique experiences to drive engagement
        </h2>
        <ul >
       {listItems.map((item , id)=>
       (
        <div className="my-5" key = {id}>
          <li>{item}</li>
        </div>
       ))}
        </ul>
        <button className="bg-[#3C4E5E] text-white p-3 text-sm">Learn More</button>
      </div>
      <div>
        <Image
          width={400}
          height={600}
          src={
            textImg
          }
        />
      </div>
      </div>
  );
}
