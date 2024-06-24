import React from "react";

const Input = ({ value, callback, placeholder = "", prefix = "px" }) => {
  return (
    <div className="relative px-1 flex items-center rounded-sm overflow-hidden bg-gray-800 text-center outline-0 text-xs w-full">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          if (!value) return callback("");

          if (/^\d+$/.test(value)) {
            const numericValue = parseInt(value, 10);
            callback(numericValue);
          }

          return;
        }}
        className="w-[70%] bg-red-500 bg-transparent px-1 py-[3px] outline-none border-none "
      />
      <div className=" absolute right-0 top-0 h-full flex items-center justify-center px-[6px]">
        {prefix}
      </div>
    </div>
  );
};

export default Input;
