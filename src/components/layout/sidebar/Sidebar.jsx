import React, { useState } from "react";
import Block from "./block/Block";
import Customize from "./customize/Customize";
import Theme from "./theme/Theme";

const Sidebar = () => {
  const [showContent, setShowContent] = useState(0);

  const items = ["blocks", "Customize", "Themes"];
  const components = [<Block />, <Customize />, <Theme />];

  const handleClick = (index) => {
    setShowContent(index);
  };

  return (
    <div className="my-4 px-0">
      <div className="flex flex-wrap justify-between uppercase px-4">
        {items.map((item, index) => (
          <div
            className={`text-sm cursor-pointer ${
              index === showContent ? "border-b-2 border-blue-500" : ""
            }`}
            key={index}
            onClick={() => handleClick(index)}
          >
            <p className="text-[12px]">{item}</p>
          </div>
        ))}
      </div>

      {components[showContent]}
    </div>
  );
};

export default Sidebar;
