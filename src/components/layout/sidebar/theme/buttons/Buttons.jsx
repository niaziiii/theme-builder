import React from "react";
import FontSize from "@/components/editableTheme/style/FontSize/FontSize";
import useGlobalStyle from "@/hooks/useGlobalStyle";
import { globalSupportiveKeys } from "@/utils/editAble/style.utils";
import FontFamily from "@/components/editableTheme/style/FontFamily/FontFamily";
import PrimaryStyle from "@/components/editableTheme/style/PrimaryStyle/PrimaryStyle";
import SecondaryStyle from "@/components/editableTheme/style/SecondaryStyle/SecondaryStyle";
import RoundCorners from "@/components/editableTheme/style/RoundCorners/RoundCorners";
import Padding from "@/components/editableTheme/style/Padding/Padding";

export default function Buttons() {
  const {
    style,
    updateGlobalFontSize,
    updateGlobalButtonPrimaryStyle,
    updateGlobalButtonSecondaryStyle,
    updateGlobalFontFamily,
    updateGlobalPadding,
    updateGlobalBorderRadius,
  } = useGlobalStyle();

  return (
    <div className="w-full mt-4">
      <p className="text-[14px] px-4">Buttons</p>
      <div className="w-full mt-2 bg-[#3E3E46] px-4 py-2 flex flex-col gap-2">
        <FontSize
          value={style.button.fontSize}
          callback={(data) => {
            updateGlobalFontSize(
              globalSupportiveKeys.button,
              data.value.fontSize
            );
          }}
        />
        <Padding
          value={style.button.padding}
          callback={(data) => {
            updateGlobalPadding(
              globalSupportiveKeys.button,
              data.value.padding
            );
          }}
        />
        <FontFamily
          value={style.button.fontFamily}
          callback={(data) => {
            updateGlobalFontFamily(
              globalSupportiveKeys.button,
              data.value.fontFamily
            );
          }}
        />
        <PrimaryStyle
          value={style.button.primaryStyle}
          callback={(data) => {
            updateGlobalButtonPrimaryStyle(data.value.primaryStyle);
          }}
        />
        <SecondaryStyle
          value={style.button.secondaryStyle}
          callback={(data) => {
            updateGlobalButtonSecondaryStyle(data.value.secondaryStyle);
          }}
        />
        <RoundCorners
          value={style.button.Buttons}
          callback={(data) => {
            updateGlobalBorderRadius(
              globalSupportiveKeys.button,
              data.value.roundCorners
            );
          }}
        />
      </div>
    </div>
  );
}
