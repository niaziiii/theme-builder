import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

export default function Rating({ rating = 5 }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((s) => (
        <TiStarFullOutline
          className={`${rating >= s ? "text-yellow" : "text-lightGrey"}`}
          size={14}
          key={s}
        />
      ))}
    </div>
  );
}
