"use client";

import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { GoWorkflow } from "react-icons/go";
import Input from "@/components/common/theme/input/Input";

const initState = {
  normal: "",
  large: "",
  small: "",
};

const RoundCorners = ({ value = initState, callback }) => {
  const [isUp, setIsUp] = useState(true);
  const [showAdditionalRows, setShowAdditionalRows] = useState(false);
  const [state, setState] = useState(value ?? initState);

  const updateState = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value }));
    handleChange({ ...state, [key]: value });
  };

  const handleClick = () => {
    setShowAdditionalRows(!showAdditionalRows);
    setIsUp(!isUp);
  };

  const handleChange = (data) => {
    const params = {
      refComponent: "RoundCorners",
      value: {
        roundCorners: data,
      },
    };
    if (callback) callback(params);
  };

  return (
    <div className="py-2">
      <div className="w-full border-0 flex items-center">
        <div className="flex w-full items-center">
          <div className="w-full mx-0 flex gap-0 items-center">
            <button onClick={handleClick} className="">
              {isUp ? (
                <IoMdArrowDropright className="text-white text-sm" />
              ) : (
                <IoMdArrowDropdown className="text-white text-sm" />
              )}
            </button>
            <h1 className="text-white text-xs">Round Corners</h1>
            <div className="flex gap-2 min-w-[50px] w-[50px] ml-auto mr-[101px]">
              <Input
                value={state.normal}
                callback={(e) => {
                  updateState("normal", e);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {showAdditionalRows && (
        <>
          <div className="w-full mt-2 border-0 flex items-center">
            <h1 className="text-white text-xs ml-4 flex items-baseline gap-2">
              <GoWorkflow size={16} />
              Small
            </h1>
            <div className="flex gap-2 min-w-[50px] w-[50px] ml-auto mr-[101px]">
              <Input
                value={state.small}
                callback={(e) => {
                  updateState("small", e);
                }}
              />
            </div>
          </div>
          <div className="w-full mt-2 border-0 flex items-center">
            <h1 className="text-white text-xs ml-4 flex items-baseline gap-2">
              <GoWorkflow size={16} />
              Large
            </h1>
            <div className="flex gap-2 min-w-[50px] w-[50px] ml-auto mr-[101px]">
              <Input
                value={state.large}
                callback={(e) => {
                  updateState("large", e);
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RoundCorners;
