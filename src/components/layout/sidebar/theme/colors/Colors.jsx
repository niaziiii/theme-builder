import React, { useState } from "react";
import useGlobalStyle from "@/hooks/useGlobalStyle";
import { IoMdColorPalette } from "react-icons/io";
import ColorPicker from "@/components/common/theme/colorPicker/ColorPicker";
import CustomModal from "@/components/common/modal/CustomModal";
import PlatesContent from "./PlatesContent";
import useTheme from "@/hooks/useTheme";

export default function Colors() {
  const { addThemeColorGlobal, theme } = useTheme();
  const [showPlates, setShowPlates] = useState(false);

  return (
    <div className="w-full mt-1">
      <p className="text-[14px] px-4">Colors</p>
      <div className="w-full mt-2 bg-[#3E3E46] px-4 py-2 flex flex-col gap-2  pl-7">
        {/* <Color /> */}
        <div className="flex items-center justify-center gap-2">
          <div className="flex flex-col w-full">
            {/* left section : Main colors primary and secondary */}
            <h2 className="text-xs">Main</h2>
            <div className="flex w-full gap-1 items-center mt-1">
              <ColorPicker
                value={theme.colors.bg.primary}
                callback={(value) => {
                  addThemeColorGlobal("bg", { primary: value });
                }}
                right="-200px"
              />
              <ColorPicker
                value={theme.colors.bg.secondary}
                callback={(value) => {
                  addThemeColorGlobal("bg", { secondary: value });
                }}
                right="-180px"
              />
            </div>
          </div>

          {/* Center Section : overall background Light & Dark */}
          <div className="flex flex-col w-full">
            <h2 className="text-xs">Light & Dark</h2>
            <div className="flex w-full gap-1 items-center mt-1">
              <ColorPicker
                value={theme.colors.text.primary}
                callback={(value) => {
                  addThemeColorGlobal("text", { primary: value });
                }}
                right="-80px"
              />
              <ColorPicker
                value={theme.colors.text.secondary}
                callback={(value) => {
                  addThemeColorGlobal("text", { secondary: value });
                }}
                right="-60px"
              />
            </div>
          </div>
          <div className="bg-[#4B5154]  py-2 px-1 rounded-md">
            <IoMdColorPalette
              className="text-2xl cursor-pointer text-white opacity-50 hover:opacity-100"
              onClick={() => setShowPlates(true)}
            />
          </div>
          <CustomModal
            closeModal={() => setShowPlates(false)}
            content={<PlatesContent />}
            open={showPlates}
          />
        </div>
      </div>
    </div>
  );
}
