"use client";

import { useState } from "react";

export default function SearchBox() {
  const [query, setQuery] = useState("");

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <form
      action="#"
      className=" text-black  m-auto md:mx-2 min-[900px]:mx-10 xl:mx-[6rem] relative rounded overflow-hidden flex flex-1 bg-white"
    >
      <div className="flex border-r border-r-grey/60 items-center justify-center px-2 cursor-pointer">
        <select
          name="cars"
          id="cars"
          className="outline-none border-none bg-white border text-sm !px-1 !py-2 rounded-md"
        >
          <option className="px-3" value="All">
            All
          </option>
          {[1, 2, 3, 4, 5, 6, 7].map((item, i) => (
            <option key={i} className="!px-3 py-4" value={`test option${item}`}>
              test
              {item}
            </option>
          ))}
        </select>
      </div>

      <input
        type="text"
        placeholder="I'm shopping for..."
        value={query}
        className="w-full h-full px-4 py-2 min-[500px]:py-[11px] outline-none border-none text-sm lg:text-md "
        onChange={handleQuery}
      />
      <button
        type="submit"
        className="absolute top-0 right-0 text-black px-2 min-[500px]:px-6 cursor-pointer bg-yellow h-full font-semibold"
      >
        Search
      </button>
    </form>
  );
}
