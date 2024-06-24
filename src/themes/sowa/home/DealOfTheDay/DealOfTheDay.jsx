import React from "react";
import Link from "next/link";
import { useMemo } from "react";
import useTheme from "@/hooks/useTheme";
import useGlobalStyle from "@/hooks/useGlobalStyle";
import {
  globalThemeColors,
  globalHeadingStyle,
} from "@/utils/editAble/handlers.utils";
import CountdownTimer from "@/themes/sowa/home/DealOfTheDay/CountDownTimer";
// import { dealOfTheDayData } from "./data";
import MainProduct from "@/themes/sowa/home/DealOfTheDay/product/Product";

export default function DealOfTheDay({ section, editMode, dispatch }) {
  const { theme } = useTheme();
  const { style } = useGlobalStyle();
  const data = section.result.data;
  console.log({
    section,
    editMode,
    data,
  });
  const colors = useMemo(() => globalThemeColors({}, theme), [theme]);
  

  const _heading = useMemo(
    () => globalHeadingStyle(data.heading.style, style),
    [style.heading, data.heading]
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

  

  return (
    <div style={{
      backgroundColor: colors.bg.secondary,
      color: colors.text.primary,
    }} className="border rounded-md py-4  text-black bg-white">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 border-b pb-4 px-5">
      {editMode ? (
          <textarea
            type="text"
            value={data.heading.content}
            style={{ ..._heading }}
            onChange={updateHeading}
          />
        ) : (
          <h2 style={{ ..._heading }} className="font-semibold text-xl">
            {data.heading.content}
          </h2>
        )} 
        <div>
          <CountdownTimer time={121} />
        </div>
        <Link
          className="border-b m-auto sm:mr-0 sm:ml-auto text-sm border-black"
          href={"#"}
        >
          View All
        </Link>
      </div>
      <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mt-4 gap-4 items-start px-5">
        {data.deals.map((deal, i) => {
          console.log(deal , "deal")
          return (
            <div key={i} className="flex flex-col items-center justify-center">
              <MainProduct deal={deal} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
