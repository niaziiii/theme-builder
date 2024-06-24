import React from "react";

export default function Button({ title, callBack }) {
  return (
    <button
      onClick={callBack}
      className="bg-gray-300 hover:bg-gray-200 border-none outline-none py-1 px-4 rounded-md"
    >
      {title}
    </button>
  );
}
