import React from "react";

export default function Cover() {
  return (
    <div className="bg-cover-Image  bg-left w-full h-[400px]">
      <div className="grid content-center text-end h-full pr-12 text-white w-full opacity-70 bg-black">
        <h2 className="font-medium text-6xl my-2">Making the difference.</h2>
        <p className="font-light  my-2">
          Our mission to give customers the best expperience. <br /> Extensive
          documentation and guides, an active community, <br /> 24/7 support
          make it a pleasure to work with us.{" "}
        </p>
        <button className="ml-auto max-w-[25%] bg-[#64cbb3] text-black  my-2 px-4 py-3 rounded-sm">Contact Us</button>
      </div>
    </div>
  );
}
