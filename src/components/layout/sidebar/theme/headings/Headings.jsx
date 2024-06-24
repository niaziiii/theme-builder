import React from "react";
import FontSize from "@/components/editableTheme/style/FontSize/FontSize";
import useGlobalStyle from "@/hooks/useGlobalStyle";
import Padding from "@/components/editableTheme/style/Padding/Padding";
import { globalSupportiveKeys } from "@/utils/editAble/style.utils";
import Margin from "@/components/editableTheme/style/Margin/Margin";
import FontFamily from "@/components/editableTheme/style/FontFamily/FontFamily";

export default function Headings() {
  const {
    style,
    updateGlobalFontSize,
    updateGlobalPadding,
    updateGlobalMargin,
    updateGlobalFontFamily,
  } = useGlobalStyle();
  return (
    <div className="w-full mt-4">
      <p className="text-[14px] px-4">Headings</p>
      <div className="w-full mt-2 bg-[#3E3E46] px-4 py-2 flex flex-col gap-2">
        <FontSize
          value={style.heading.fontSize}
          callback={(data) => {
            updateGlobalFontSize(
              globalSupportiveKeys.heading,
              data.value.fontSize
            );
          }}
        />

        <Padding
          value={style.heading.padding}
          callback={(data) => {
            updateGlobalPadding(
              globalSupportiveKeys.heading,
              data.value.padding
            );
          }}
        />
        <Margin
          value={style.heading.margin}
          callback={(data) => {
            updateGlobalMargin(globalSupportiveKeys.heading, data.value.margin);
          }}
        />
        <FontFamily
          value={style.heading.fontFamily}
          callback={(data) => {
            updateGlobalFontFamily(
              globalSupportiveKeys.heading,
              data.value.fontFamily
            );
          }}
        />
      </div>
    </div>
  );
}
