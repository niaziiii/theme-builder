import React from "react";

export default function Wrapper({ children }) {
  return (
    <main className=" my-10 w-[calc(100%-1.5rem)] xl:w-[calc(100%-10rem)]">
      {children}
    </main>
  );
}
