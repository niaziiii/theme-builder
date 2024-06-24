import React, { useState } from "react";

import { SketchPicker } from "react-color";

const ColorPicker = ({ value = "#ffffff", callback, right = "-2rem" }) => {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(value);

  const handleColorSelect = (color) => {
    if (callback) callback(color.hex);
    setSelectedColor(color.hex);
  };

  return (
    <div
      style={{
        backgroundColor: selectedColor,
      }}
      className={`relative  w-5 h-5 rounded-full  cursor-pointer`}
      onClick={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {open && (
        <div
          onMouseOver={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          style={{
            right: right,
          }}
          className={`absolute top-6  z-10`}
        >
          <SketchPicker
            color={selectedColor}
            onChangeComplete={handleColorSelect}
            className="w-full text-black"
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
