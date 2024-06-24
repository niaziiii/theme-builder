import React from "react";

export default function ProgressBar() {
  return (
    <div className="w-[95%] m-auto">
      <div className="w-full">
        <span id="ProgressLabel" className="w-[95%] ">
          We are almost done!
        </span>

        <span
          role="progressbar"
          aria-labelledby="ProgressLabel"
          aria-valuenow="75"
          className="block rounded-full bg-gray-200"
        >
          <span
            className="block h-5 rounded-full text-center font-thin text-gray-50 text-[14px] bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_8px,_var(--tw-gradient-to)_8px,_var(--tw-gradient-to)_15px)] from-green-700 to-green-800"
            style={{ width: "75%" }}
          >
            75% Development
          </span>
        </span>
      </div>
    </div>
  );
}
