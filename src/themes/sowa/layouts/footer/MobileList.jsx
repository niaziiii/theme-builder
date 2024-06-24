"use client";
import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

export default function MobileList({ link }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full justify-between cursor-pointer"
      >
        <b className="font-bold uppercase">{link.name} </b>
        {isOpen ? <ChevronDown /> : <ChevronRight />}
      </div>
      {isOpen && link.content}
    </div>
  );
}
