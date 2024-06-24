import React from "react";
import FontSize from "@/components/editableTheme/style/FontSize/FontSize";
import useGlobalStyle from "@/hooks/useGlobalStyle";
import { globalSupportiveKeys } from "@/utils/editAble/style.utils";
import FontFamily from "@/components/editableTheme/style/FontFamily/FontFamily";
import Margin from "@/components/editableTheme/style/Margin/Margin";
import Padding from "@/components/editableTheme/style/Padding/Padding";

export default function Paragraph() {
  const {
    style,
    updateGlobalFontSize,
    updateGlobalFontFamily,
    updateGlobalMargin,
    updateGlobalPadding,
  } = useGlobalStyle();

  return (
    <div className="w-full mt-4">
      <p className="text-[14px] px-4">Paragraph</p>
      <div className="w-full mt-2 bg-[#3E3E46] px-4 py-2 flex flex-col gap-2">
        <FontSize
          value={style.paragraph.fontSize}
          callback={(data) => {
            updateGlobalFontSize(
              globalSupportiveKeys.paragraph,
              data.value.fontSize
            );
          }}
        />
        <FontFamily
          value={style.paragraph.fontFamily}
          callback={(data) => {
            updateGlobalFontFamily(
              globalSupportiveKeys.paragraph,
              data.value.fontFamily
            );
          }}
        />
        <Padding
          value={style.paragraph.padding}
          callback={(data) => {
            updateGlobalPadding(
              globalSupportiveKeys.paragraph,
              data.value.padding
            );
          }}
        />
        <Margin
          value={style.paragraph.margin}
          callback={(data) => {
            updateGlobalMargin(
              globalSupportiveKeys.paragraph,
              data.value.margin
            );
          }}
        />
      </div>
    </div>
  );
}
