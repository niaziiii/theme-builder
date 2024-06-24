"use client";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowUp } from "react-icons/io";

const FaqTableContent = () => {
  const listItems = [
    "Magnesium Citerate",
    "Ingredients",
    "Dosing",
    "Use",
    "Children",
    "Safety",
    "Side Effects",
    "Your Order",
    "Calm Sleep",
    "Natural Calm Gummies",
    "Heavenly Sleep Melatonin",
    "Ask a Question! We're happy to help.",
  ];
  return (
    <div className="w-[60%] mx-auto">
      <p className="text-[#7A7A7A]">
        Find answers to the most frequently asked questions about Natural Calm
        magnesium products here. If you have a question not answered below,
        please ask via the form at the bottom of the page. &nbsp;{" "}
        <span className="text-green font-medium my-2 text-[#A6CE39]">
          Or give us a call!
        </span>{" "}
      </p>

      {/* Accordion  */}

      <div className="w-full rounded-2xl bg-white my-5">
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between  bg-white p-4 text-left border border-gray font-medium text-[#7A7A7A]   focus:outline-none">
                <span>Table of Contents</span>
                <IoIosArrowUp
                  className={`${
                    open ? "rotate-0 transform" : "rotate-180 transform"
                  } h-5 w-5 text-black  font-lg`}
                />
              </Disclosure.Button>
              <Disclosure.Panel
                className={`${
                  open ? "border border-gray" : ""
                } px-4 pb-2 pt-4 text-sm text-gray-500`}
              >
                {listItems.map((item, i) => (
                  <>
                    <ul>
                      <li className="text-[#7A7A7A] text-base my-1">
                        {i + 1}. &nbsp;{" "}
                        <span className=" cursor-pointer hover:underline">
                          {item}
                        </span>{" "}
                      </li>
                    </ul>
                  </>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default FaqTableContent;
