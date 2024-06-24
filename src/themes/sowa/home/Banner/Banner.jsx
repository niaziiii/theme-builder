"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import useTheme from "@/hooks/useTheme";
import useGlobalStyle from "@/hooks/useGlobalStyle";
import {
  globalThemeColors,
  globalButtonStyle,
  globalHeadingStyle,
  globalParagraphStyle,
} from "@/utils/editAble/handlers.utils";

export default function Banner({ section, editMode, dispatch }) {
  const { theme } = useTheme();
  const { style } = useGlobalStyle();
  const data = section.result.data;
  console.log({ editMode, section, data, dispatch });

  const colors = useMemo(() => globalThemeColors({}, theme), [theme]);
  const _button = useMemo(
    () => globalButtonStyle(data.button.style, style),
    [style.button, data.button]
  );

  const _heading = useMemo(
    () => globalHeadingStyle(data.heading.style, style),
    [style.heading, data.heading]
  );
  const _paragraph = useMemo(
    () => globalParagraphStyle(data.description.style, style),
    [style.paragraph, data.description]
  );

  const updateHeading = (e) => {
    const params = {
      heading: {
        ...data.heading,
        content: e.target.value,
      },
    };
    dispatch(params);
  };

  const updateParagraph = (e) => {
    const params = {
      description: {
        ...data.description,
        content: e.target.value,
      },
    };
    dispatch(params);
  };

  return (
    <div
      style={{
        backgroundColor: colors.bg.secondary,
        color: colors.text.primary,
      }}
      className=" flex flex-col md:flex-row items-center gap-4 relative text-white rounded-md w-full"
    >
      <div className="flex-1 px-6 md:pr-4 md:pl-10 flex flex-col gap-2 py-4 mt-4 ">
        {editMode ? (
          <textarea
            type="text"
            value={data.heading.content}
            style={{ ..._heading }}
            onChange={updateHeading}
          />
        ) : (
          <h2 style={{ ..._heading }} className="font-bold">
            {data.heading.content}
          </h2>
        )}
        {editMode ? (
          <textarea
            type="text"
            value={data.description.content}
            style={{ ..._paragraph }}
            onChange={updateParagraph}
          />
        ) : (
          <p style={{ ..._paragraph }}>test</p>
        )}
        <button
          style={{
            ..._button,
            backgroundColor: colors.bg.primary,
            color: colors.text.primary,
          }}
          className={` w-fit`}
        >
          Shop Now
        </button>
      </div>

      <div className="m-auto md:ml-auto">
        <Image
          src={"/banner/image-1.jpg"}
          alt="banner"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
