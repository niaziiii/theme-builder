import React from "react";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center h-full gap-5 m-auto bg-green-800">

      <h1 className="text-3xl w-[80%] text-center mt-[10%] text-gray-400">Would you like more information about a product?</h1>
      <div className="flex flex-col gap-5 sm:flex-row">
        <button className="px-6 py-3 text-2xl text-gray-100 bg-gray-400 rounded first-letter">Our services</button>
        <button className="px-6 py-3 text-2xl text-gray-700 bg-gray-200 rounded">Contact us</button>
      </div>
    </div>
  );
};

export default CallToAction;
