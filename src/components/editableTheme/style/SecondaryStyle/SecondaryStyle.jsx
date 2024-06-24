"use client";

import React from "react";
import Dropdown from "@/components/common/theme/dropdown/Dropdown";

const SecondaryStyle = ({ callback }) => {
  const options = [
    { value: "fill", label: "Fill" },
    { value: "outline", label: "Outline" },
    { value: "flat", label: "Flat" },
  ];

  const handleChange = (params) => {
    callback(params);
  };

  return (
    <div className="">
      <Dropdown
        callback={handleChange}
        name="Secondary Style"
        options={options}
        placeholder="secondaryStyle"
        value="fill"
      />
    </div>
  );
};

export default SecondaryStyle;
