import React from "react";
import Headings from "./headings/Headings";
import Buttons from "./buttons/Buttons";
import Paragraph from "./paragraph/Paragraph";
import Colors from "./colors/Colors";

const Theme = () => {
  return (
    <div className="h-[87vh] overflow-y-auto mt-2 pb-10">
      <Colors />
      <Paragraph />
      <Headings />
      <Buttons />
    </div>
  );
};

export default Theme;
