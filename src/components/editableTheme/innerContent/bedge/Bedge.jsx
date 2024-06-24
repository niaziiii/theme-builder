import React from "react";
import { FaFolder } from "react-icons/fa";

export default function Badge() {
  return (
    <div className="m-auto w-full flex justify-center pt-8">
      <button
        type="button"
        class="inline-flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-center text-white bg-red-300 rounded hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-200 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >

        <FaFolder/>
        Category
        
      </button>
    </div>
  );
}
