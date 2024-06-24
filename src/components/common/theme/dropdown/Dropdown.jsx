"use client";

import React from "react";

const initState = {
  name: "DropDown",
  options: [
    {
      value: "none",
      label: "None",
    },
  ],
  value: "none",
  placeholder: "DropDown",
};

const Dropdown = ({
  callback,
  name = initState.name,
  options = initState.options,
  placeholder = initState.placeholder,
  value = initState.value,
}) => {
  const handleChange = (e) => {
    const params = {
      refComponent: placeholder,
      value: {
        [placeholder]: e.target.value,
      },
    };
    callback(params);
  };

  return (
    <div className="w-full mx-3 flex gap-2 items-center">
      <h1 className="text-white text-xs">{name}</h1>

      <div className="ml-auto mr-[35px]">
        <select
          name="select"
          id="select_fontFamily"
          onChange={handleChange}
          defaultValue={value}
          className="w-32 text-xs text-white bg-gray-500 h-5 rounded outline-0"
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
