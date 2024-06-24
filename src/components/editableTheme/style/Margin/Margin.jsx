"use client";

import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { GoWorkflow } from "react-icons/go";
import Input from "@/components/common/theme/input/Input";

const initState = {
  normal: {
    x: "",
    y: "",
  },
  large: {
    x: "",
    y: "",
  },
  small: {
    x: "",
    y: "",
  },
};

const Margin = ({ value = initState, callback }) => {
  const [isUp, setIsUp] = useState(true);
  const [showAdditionalRows, setShowAdditionalRows] = useState(false);
  const [state, setState] = useState(value ?? initState);

  const updateState = (key, axis, value) => {
    setState((prev) => ({ ...prev, [key]: { ...prev[key], [axis]: value } }));

    handleChange({ ...state, [key]: { ...state[key], [axis]: value } });
  };

  const handleClick = () => {
    setShowAdditionalRows(!showAdditionalRows);
    setIsUp(!isUp);
  };

  const handleChange = (data) => {
    const params = {
      refComponent: "MARGIN",
      value: {
        margin: data,
      },
    };
    if (callback) callback(params);
  };

  return (
    <div className="w-full">
      <div className="w-full border-0 flex items-center">
        <div className="flex w-full items-center">
          <button onClick={handleClick} className="">
            {isUp ? (
              <IoMdArrowDropright className="text-white text-sm" />
            ) : (
              <IoMdArrowDropdown className="text-white text-sm" />
            )}
          </button>
          <h1 className="text-white text-xs">Margin</h1>
          <div className="w-full flex ">
            <div className="flex gap-2 ml-auto mr-[42px]">
              <div className="w-[50px]">
                <Input
                  value={state.normal.x}
                  prefix="px"
                  callback={(data) => {
                    updateState("normal", "x", data);
                  }}
                />
              </div>
              <div className="w-[50px]">
                <Input
                  value={state.normal.y}
                  prefix="px"
                  callback={(data) => {
                    updateState("normal", "y", data);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAdditionalRows && (
        <>
          <div className="w-full mt-2 border-0 flex gap-2 items-center">
            <h1 className="text-white text-xs ml-4 flex items-baseline gap-2">
              <GoWorkflow size={16} />
              Small
            </h1>
            <div className="w-full flex ">
              <div className="flex gap-2 ml-auto mr-[42px]">
                <div className="w-[50px]">
                  <Input
                    value={state.small.x}
                    prefix="px"
                    callback={(data) => {
                      updateState("small", "x", data);
                    }}
                  />
                </div>
                <div className="w-[50px]">
                  <Input
                    value={state.small.y}
                    prefix="px"
                    callback={(data) => {
                      updateState("small", "y", data);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-2 border-0 flex gap-2 items-center">
            <h1 className="text-white text-xs ml-4 flex items-baseline gap-2">
              <GoWorkflow size={16} />
              Large
            </h1>
            <div className="w-full flex ">
              <div className="flex gap-2 ml-auto mr-[42px]">
                <div className="w-[50px]">
                  <Input
                    value={state.large.x}
                    prefix="px"
                    callback={(data) => {
                      updateState("large", "x", data);
                    }}
                  />
                </div>
                <div className="w-[50px]">
                  <Input
                    value={state.large.y}
                    prefix="px"
                    callback={(data) => {
                      updateState("large", "y", data);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Margin;
