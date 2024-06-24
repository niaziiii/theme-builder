import Image from "next/image";
import React from "react";
import Link from "next/link";
import carousel1 from "../../public/bg_images/one (5).jpg";
import carousel2 from "../../public/bg_images/bgimage1.jpg";
import carousel3 from "../../public/bg_images/one (6).jpg";
export default function MediaList() {
  return (
    <div>
      <div className="w-full m-auto flex flex-col items-center p-8 gap-5 max-w-[1200px]">
        <div className="flex w-full flex-col  items-center border shadow bg-white md:flex-row">
          <div className="w-full flex justify-center md:w-1/2">
            <Image
              src={carousel1}
              width={500}
              height={500}
              className=" h-full"
            ></Image>
          </div>
          <div className="p-8 flex flex-col gap-4 md:w-1/2">
            <h1 className="text-3xl">Media Heading</h1>
            <h1>
              Use this snippet to build various types of components that feature
              a left- or right-aligned image alongside textual content.
              Duplicate the element to create a list that fits your needs.
            </h1>
            <Link href="/">Discover more ===</Link>
          </div>
        </div>

        <div className="flex w-full flex-col items-center border md:flex-row-reverse shadow bg-white">
          <div className="w-full flex justify-center md:w-1/2">
            <Image
              src={carousel2}
              width={500}
              height={500}
              className=" h-full"
            ></Image>
          </div>
          <div className="p-8 flex flex-col gap-4 md:w-1/2">
            <h1 className="text-3xl">Event heading</h1>
            <h1>
              Speakers from all over the world will join our experts to give
              inspiring talks on various topics. Stay on top of the latest
              business management trends & technologies
            </h1>
          </div>
        </div>

        <div className="flex w-full flex-col items-center border md:flex-row shadow bg-white">
          <div className="w-full flex justify-center md:w-1/2">
            <Image
              src={carousel3}
              width={500}
              height={500}
              className=" h-full"
            ></Image>
          </div>
          <div className="p-8 flex flex-col gap-4 md:w-1/2">
            <h1 className="text-3xl">Post heading</h1>
            <h1>
              Use this component for creating a list of featured elements to
              which you want to bring attention.
            </h1>
            <Link href="/">Discover more ===</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
