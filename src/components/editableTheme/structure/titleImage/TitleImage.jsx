import React from "react";
import Image from "next/image";
import titleImg from "../../public/archery_board.jpg";
const TitleImage = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center  gap-5">
        <h1 className="sm:text-3xl text-6xl p-2 text-center">A punchy Headline</h1>
        <h1 className="text-center max-w-[550px]">
          Choose a vibrant image and write an inspiring paragraph about it. It
          does not have to be long, but it should reinforce your image.
        </h1>

        <div className="rounded p-5 border shadow mt-8">
            <Image src={titleImg} width={450} height={450}/>
        </div>

        <h1 className="text-[15px] text-gray-400">Add a caption to enhance the meaning of this image.</h1>
      </div>
    </div>
  );
};

export default TitleImage;
