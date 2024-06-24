"use client";
import React, { useMemo, useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import HeaderSOWA from "@/themes/sowa/layouts/header/Header";
import FooterSOWA from "@/themes/sowa/layouts/footer/Footer";
import HeaderEUT from "@/themes/eut/layouts/header/Header";
import FooterEUT from "@/themes/eut/layouts/Footer/Footer";
import useTheme from "@/hooks/useTheme";
import { APP_THEMES } from "@/utils/theme/theme.utils";

const EditAbleWrapper = ({ children }) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const { theme } = useTheme();

  const showSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  const { Header, Footer } = useMemo(() => {
    const content = {
      [APP_THEMES.sowa]: {
        Header: <HeaderSOWA />,
        Footer: <FooterSOWA />,
      },
      [APP_THEMES.eut]: {
        Header: <HeaderEUT />,
        Footer: <FooterEUT />,
      },
    };

    return {
      Header: content[theme.name]?.Header,
      Footer: content[theme.name]?.Footer,
    };
  }, [theme.name]);

  return (
    <div className="flex overflow-hidden h-screen min-h-screen max-h-screen">
      <div
        className={`${
          openSideBar
            ? "w-full overflow-x-auto lg:overflow-x-hidden px-6"
            : "w-full overflow-y-auto px-0"
        }  `}
      >
        <div
          className={`w-full ${
            openSideBar && " min-w-[1024px] lg:min-w-[100%] "
          }`}
        >
          <div className="flex items-center w-full">
            <div className="flex-1">{Header && Header}</div>
            <div
              className={`${
                openSideBar ? "hidden" : "text-center absolute top-0 right-4"
              }`}
            >
              <button
                className="w-full bg-blue-100 py-2 px-3 rounded-bl-lg text-white bg-red-500"
                onClick={showSideBar}
              >
                Edit
              </button>
            </div>
          </div>
          <div className="py-4 w-[90%] m-auto">{children}</div>
          {Footer && Footer}
        </div>
      </div>
      {openSideBar && (
        <div className="min-w-[288px] w-[288px] bg-black text-white">
          <div className="w-full flex gap-x-4 justify-end items-center border-b border-gray-500 py-3 px-4">
            <button className="text-blue-500 text-[12px]">Discard</button>
            <button
              className="text-blue-500  text-[12px]"
              onClick={showSideBar}
            >
              {" "}
              Save
            </button>
          </div>
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default EditAbleWrapper;
