"use client";

import Dropdown from "@/components/common/theme/dropdown/Dropdown";
import React from "react";

const options = [
  {
    value: "none",
    label: "None",
  },
  {
    value: "system_font",
    label: "System Font",
  },
  {
    value: "heebo",
    label: "Heebo",
  },
  {
    value: "rajdahani",
    label: "Rajdhani",
  },
  {
    value: "roboto",
    label: "Roboto",
  },
  {
    value: "source_sens_pro",
    label: "Source Sans Pro",
  },
  {
    value: "poppins",
    label: "Poppins",
  },
  {
    value: "quistrail",
    label: "Quistrail",
  },
  {
    value: "mulish",
    label: "Mulish",
  },
  {
    value: "add_google_font",
    label: "Add Google Font",
  },
];

const FontFamily = ({ callback, value }) => {
  const handleChange = (params) => {
    callback(params);
  };

  return (
    <div className="w-full">
      <Dropdown
        callback={handleChange}
        name="Font Family"
        options={options}
        placeholder="fontFamily"
        value={value}
      />
    </div>
  );
};

export default FontFamily;
