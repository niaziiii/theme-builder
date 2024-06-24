"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const DropDownMenu = ({ nav, callback, className = "" }) => {
  const [subMenuData, setSubMenuData] = useState(null);

  return (
    <div
      className={`absolute top-6 left-0 z-10 ${className}`}
      onMouseOver={() => callback(true)}
      onMouseOut={() => callback(false)}
    >
      <div
        className="ml-[5%] w-0 h-0 
    border-l-[10px] border-l-transparent
    border-b-[15px] border-b-black
    border-r-[10px] border-r-transparent"
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white z-10 border px-0 py-0 text-black shadow-lg w-[15rem] lg:w-[20rem] -mt-1 max-h-[70vh] overflow-auto rounded-md"
      >
        {subMenuData && <SubMenuDropDown data={subMenuData} />}

        {nav?.map((item, i) => {
          return (
            <div className="flex flex-col w-full" key={i}>
              <div className="flex flex-col gap-0 w-[100%] m-auto">
                <Link
                  href={"#"}
                  className={`text-[14px] font-normal px-4 py-2 flex w-full cursor-pointer justify-between items-center ${
                    nav.length - 1 !== i && "border-b"
                  } ${
                    subMenuData?.name == item.name && "bg-yellow"
                  } hover:bg-yellow`}
                  onMouseEnter={() => {
                    item?.menu?.length > 0
                      ? setSubMenuData(item)
                      : setSubMenuData(null);
                  }}
                >
                  {item?.name}
                  {item?.menu?.length > 0 && (
                    <ChevronRight className="w-[20px] min-w-[20px]" size={18} />
                  )}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDownMenu;

const SubMenuDropDown = ({ data }) => {
  const { name, menu, imgSrc } = data;
  return (
    <div className="absolute w-[25rem] xl:w-[40rem] right-[-166%] lg:right-[-125%] top-0 xl:right-[-200%]  min-h-[calc(100vh-155px)] bg-white shadow-xl rounded-e-lg mt-[11px]">
      <div className="p-4">
        <b className="font-bold">{name}</b>
        <ul className="grid grid-cols-2 gap-x-1 gap-y-2 mt-5">
          {menu.map((m) => (
            <li
              className="hover:translate-x-3 transition-all w-fit"
              key={m.name}
            >
              <Link className="hover:text-yellow text-[14px] " href={"#"}>
                {m.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {imgSrc && (
        <div>
          <Image
            src={imgSrc}
            className="absolute bottom-4 right-4"
            alt="background attachment"
            width={200}
            height={200}
          />
        </div>
      )}
    </div>
  );
};
