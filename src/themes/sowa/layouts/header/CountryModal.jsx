import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CountryModal() {
  return (
    <div className="sm:w-[30rem] md:w-[40rem] flex items-center justify-center flex-col">
      <h2 className="text-2xl text-yellow font-semibold text-center mt-2">
        WELCOME TO SOWA TOOL
      </h2>
      <p className="mt-2 mb-6 text-black text-center">
        To find inventory, and country specific catalogues, well need you to
        select where you are located.
      </p>
      <div className="flex items-center flex-col sm:flex-row gap-10 justify-center w-full">
        <div className="flex items-center flex-col gap-2">
          <Image
            src={"/country/big-canada.png"}
            alt="Canada"
            width={150}
            height={100}
          />
          <Link
            href={"#"}
            className="px-6 py-2 rounded-md border-none outline-none bg-yellow"
          >
            Shop Canadian Site
          </Link>
        </div>
        <div className="flex items-center flex-col gap-2">
          <Image
            src={"/country/big-usa.png"}
            alt="USA"
            width={150}
            height={100}
          />
          <Link
            href={"#"}
            className="px-6 py-2 rounded-md border-none outline-none bg-yellow"
          >
            Shop American Site
          </Link>
        </div>
      </div>
    </div>
  );
}
