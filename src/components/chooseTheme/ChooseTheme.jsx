"use client";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";
import useTheme from "@/hooks/useTheme";
import { APP_THEMES } from "@/utils/theme/theme.utils";
import Spinner from "./Spinner";

const ThemePage = () => {
  const { addTheme, addThemeColors } = useTheme();
  const [loading, setLoading] = useState(false);

  const themes = [
    {
      src: "/assets/naturalCalm.png",
      alt: "Natural Calm",
      key: APP_THEMES.eut,
    },
    { src: "/assets/sowaTools.png", alt: "Sowa Tools", key: APP_THEMES.sowa },
  ];

  const [showPage, setShowPage] = useState(true);
  function themeClick(key) {
    setLoading(true);

    setTimeout(() => {
      addTheme(key);
      addThemeColors(key);
    }, 8000);
  }
  function hideContent() {
    setShowPage(false);
  }
  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {showPage && (
        <>
          <div className="flex justify-between items-center m-5">
            <div>
              <p className="text-sm font-medium">Pick a theme</p>
              <p className="text-sm font-light">
                Don't worry, you can switch later
              </p>
            </div>
          </div>
          <div className="my-2">
            <hr />
          </div>

          {/* switch components */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 m-5 gap-x-12 gap-y-12 ">
            {themes.map((theme, index) => (
              <div className="w-full m-auto flex items-center justify-center">
                <div
                  key={index}
                  className="border-[1px] w-[18rem] border-gray-200 relative rounded-md"
                >
                  <Image
                    width={300}
                    height={1200}
                    className="h-[300px]"
                    src={`${theme.src}`}
                    alt={theme.alt}
                  />
                  <div className="absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2">
                    <button
                      className="bg-[#624159] text-white py-2 px-3 rounded-lg hover:bg-white hover:text-black"
                      onClick={() => themeClick(theme.key)}
                    >
                      Use this theme
                    </button>
                  </div>
                  {index === 0 && (
                    <div className="flex justify-between p-2">
                      <p className="font-bold">Natural Calm</p>
                      <p className="text-gray-400 font-bold">Cobalt</p>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="flex justify-between p-2">
                      <p className="font-bold">Sowa Tools</p>
                      <p className="text-gray-400 font-bold">Cobalt</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ThemePage;
