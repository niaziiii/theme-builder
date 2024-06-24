"use client";
import {
  shopAllProductItems,
  navMenu,
} from "@/themes/sowa/utils/menu/constant.utils";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";

export default function SideBar({ close }) {
  const items = [
    {
      title: "Main Menu",
      menu: [...navMenu.mainMenu],
    },
    {
      title: "Shop All Products",
      menu: [...shopAllProductItems],
    },

    {
      title: "Side Menu",
      menu: [...navMenu.sideMenu],
    },
  ];

  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-screen bg-black/50"
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-0 left-0 h-screen bg-white text-black w-[18rem] overflow-y-auto flex flex-col gap-y-1 py-0 pb-10"
      >
        {items.map((item, index) => (
          <div key={index} className="">
            <h2
              className={`font-bold bg-yellow px-4 py-2 text-xl ${
                index !== 0 && "mt-3"
              }`}
            >
              {item.title}
            </h2>
            <div className="flex flex-col gap-y-2 mt-3">
              {item.menu.map((menu, i) => (
                <SubMenu key={i} menu={menu} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const SubMenu = ({ menu, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBar = (value) => {
    if (value && menu?.menu) {
      setIsOpen(value);
      return;
    }
    setIsOpen(false);
  };
  return (
    <>
      <Link
        className={`text-[15px] leading-4 py-2 mx-4 hover:text-yellow flex items-center justify-between ${className}`}
        href={menu?.link ? menu?.link : "#"}
        onClick={() => handleBar(!isOpen)}
      >
        {menu.name}
        {menu?.menu && !isOpen && <ChevronRight size={16} />}
        {menu?.menu && isOpen && <ChevronDown size={16} />}
      </Link>
      {isOpen && (
        <div className="bg-lightGrey mx-4 rounded-md">
          {menu?.menu.map((m, i) => (
            <SubMenu className="!px-0 !text-[13px] " key={i} menu={m} />
          ))}
        </div>
      )}
    </>
  );
};
