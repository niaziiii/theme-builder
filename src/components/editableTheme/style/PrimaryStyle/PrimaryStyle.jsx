"use client";

import React from "react";
import Dropdown from "@/components/common/theme/dropdown/Dropdown";

const PrimaryStyle = ({ callback, value }) => {
  const options = [
    { value: "fill", label: "Fill" },
    { value: "outline", label: "Outline" },
    { value: "flat", label: "Flat" },
  ];

  const handleChange = (params) => {
    callback(params);
  };

  return (
    <div>
      <Dropdown
        callback={handleChange}
        name="Primary Style"
        options={options}
        placeholder="primaryStyle"
        value={value}
      />
    </div>
  );
};

export default PrimaryStyle;
