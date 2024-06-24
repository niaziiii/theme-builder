import React from "react";

export default function DropableEffect({ className = "top-0" }) {
  return (
    <div
      className={`p-2 bg-yellow/65 border-yellow absolute  w-full border border-dashed rounded-sm ${className}`}
    ></div>
  );
}
