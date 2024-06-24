"use client";

import React from "react";

const OnClickEffect = ({ callback }) => {

  const handleChange = (e) => {
    const params = {
      refComponent: "OnClickEffect",
        value: {
        OnclickEffect: e.target.value
        }
    }
    callback(params);

  };

  return (
    <div className="w-full mx-2 flex gap-[2rem] items-center ">
      <h1 className="text-white text-xs">On Click Effect</h1>

      <div>
        <select
          name="select"
          id="select_fontFamily"
          onChange={handleChange}
          className="w-36 text-xs text-white bg-gray-500 h-5 rounded outline-0"
        >
          <option value="none">None</option>
          <option value="ripple">Ripple</option>
        </select>
      </div>
    </div>
  );
};

export default OnClickEffect;
