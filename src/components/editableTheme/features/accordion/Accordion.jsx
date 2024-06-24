"use client";

import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

const Accordion = () => {
  const [oneIsOpen, setoneIsOpen] = useState(false);
  const [twoIsOpen, setTwoIsOpen] = useState(false);
  const [threeIsOpen, setThreeIsOpen] = useState(false);

  return (
    <div className="w-[90%] m-auto mx-10 mt-10">
      <div
        className={`w-full border rounded-xl overflow-hidden ${
          oneIsOpen ? "border-cyan-400" : ""
        }`}
      >
        <div
          onClick={() => {
            setoneIsOpen(!oneIsOpen);
            setTwoIsOpen(false);
            setThreeIsOpen(false);
          }}
          className="w-full cursor-pointer flex items-center p-3 gap-4"
        >
          {oneIsOpen ? (
            <FaCircleMinus className="text-gray-600" />
          ) : (
            <FaCirclePlus className="text-gray-600" />
          )}
          <h1>Terms of service</h1>
        </div>

        <div
          className={`border ${
            oneIsOpen ? "max-h-[500px] opacity-100 p-4" : "max-h-0 opacity-0"
          } transition-max-height transition-opacity ease-in-out duration-1000 overflow-hidden drop-animation`}
        >
          <p>
            These terms of service ("Terms", "Agreement") are an agreement
            between the website ("Website operator", "us", "we" or "our") and
            you ("User", "you" or "your"). This Agreement sets forth the general
            terms and conditions of your use of this website and any of its
            products or services (collectively, "Website" or "Services").
          </p>
        </div>
      </div>

      <div
        className={`w-full border rounded-xl overflow-hidden ${
          twoIsOpen ? "border-cyan-400" : ""
        }`}
      >
        <div
          onClick={() => {
            setTwoIsOpen(!twoIsOpen);
            setoneIsOpen(false);
            setThreeIsOpen(false);
          }}
          className="w-full cursor-pointer flex items-center p-3 gap-4"
        >
          {twoIsOpen ? (
            <FaCircleMinus className="text-gray-600" />
          ) : (
            <FaCirclePlus className="text-gray-600" />
          )}
          <h1>Terms of service</h1>
        </div>

        <div
          className={`border ${
            twoIsOpen ? "max-h-[500px] opacity-100 p-4" : "max-h-0 opacity-0"
          } transition-max-height transition-opacity ease-in-out duration-1000 overflow-hidden drop-animation`}
        >
          <p>
            These terms of service ("Terms", "Agreement") are an agreement
            between the website ("Website operator", "us", "we" or "our") and
            you ("User", "you" or "your"). This Agreement sets forth the general
            terms and conditions of your use of this website and any of its
            products or services (collectively, "Website" or "Services").
          </p>
        </div>
      </div>

      <div
        className={`w-full border rounded-xl overflow-hidden ${
          threeIsOpen ? "border-cyan-400" : ""
        }`}
      >
        <div
          onClick={() => {
            setThreeIsOpen(!threeIsOpen);
            setTwoIsOpen(false);
            setoneIsOpen(false);
          }}
          className="w-full cursor-pointer flex items-center p-3 gap-4"
        >
          {threeIsOpen ? (
            <FaCircleMinus className="text-gray-600" />
          ) : (
            <FaCirclePlus className="text-gray-600" />
          )}
          <h1>Terms of service</h1>
        </div>

        <div
          className={`border ${
            threeIsOpen ? "max-h-[500px] opacity-100 p-4" : "max-h-0 opacity-0"
          } transition-max-height transition-opacity ease-in-out duration-1000 overflow-hidden drop-animation`}
        >
          <p>
            These terms of service ("Terms", "Agreement") are an agreement
            between the website ("Website operator", "us", "we" or "our") and
            you ("User", "you" or "your"). This Agreement sets forth the general
            terms and conditions of your use of this website and any of its
            products or services (collectively, "Website" or "Services").
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
