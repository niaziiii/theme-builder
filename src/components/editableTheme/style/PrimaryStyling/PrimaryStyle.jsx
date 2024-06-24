"use client"

import React from "react";

const PrimaryStyle = ({ callback }) => {
  
  const handleChange = (e) => {
    const params = {
      refComponent: "PRIMARY-STYLE",
        value: {
        PrimaryStyle: e.target.value
        }
    }
    callback(params);

  };


  return (
    <div className="w-full mx-3 flex gap-[2.4rem] items-center ">
      <h1 className="text-white text-xs">Primary Style</h1>

      <div>
        <select
          name="select"
          id="select_fontFamily"
          className="w-36 text-xs text-white bg-gray-500 h-5 rounded outline-0"
          onChange={handleChange}
          defaultValue="fill"
        >
          <option value="fill">Fill</option>
          <option value="outline">Outline</option>
          <option value="flat">Flat</option>
        </select>
      </div>
    </div>
  );
};

export default PrimaryStyle;
