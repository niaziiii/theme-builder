"use client";
import React from "react";
import { X } from "lucide-react";

export default function CustomModal({ open, closeModal, content }) {
  return (
    <div>
      {open && content && (
        <div
          className="bg-black/50 fixed top-0 left-0 h-screen w-full flex items-center justify-center z-10"
          onClick={closeModal}
        >
          <div
            className="bg-white relative rounded-sm w-fit max-w-[95%] md:max-w-[80%] xl:max-w-[70%] p-6 overflow-y-auto max-h-[calc(100vh-5rem)]"
            onClick={(e) => e.stopPropagation()}
          >
            <X
              className="absolute text-yellow top-1 right-1 z-10 cursor-pointer"
              onClick={closeModal}
            />
            {content}
          </div>
        </div>
      )}
    </div>
  );
}
