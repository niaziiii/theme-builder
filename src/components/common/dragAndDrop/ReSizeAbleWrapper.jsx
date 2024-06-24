import useSections from "@/hooks/useSections";
import useTheme from "@/hooks/useTheme";
import { globalThemeColors } from "@/utils/editAble/handlers.utils";
import React, { useMemo, useState } from "react";
import { RiDeleteBin5Line, RiDragMove2Fill } from "react-icons/ri";

function ReSizeAbleWrapper({ Element, section, index }) {
  const { theme } = useTheme();
  const colors = useMemo(() => globalThemeColors({}, theme), [theme]);

  const { removeSection, updateSection } = useSections();
  const [editAble, setEditAble] = useState(false);

  const remove = () => removeSection(index);
  const update = (section, data) =>
    updateSection(index, {
      ...section,
      result: {
        ...section.result,
        data: {
          ...section.result.data,
          ...data,
        },
      },
    });
  return (
    <div className="w-full flex flex-col justify-center items-center m-auto">
      <div
        onDoubleClick={() => setEditAble(!editAble)}
        style={{
          borderColor: editAble ? `${colors.bg.primary}` : "transparent",
        }}
        className={` w-full h-fit relative border-2 ${
          editAble ? `border-[${colors.bg.primary}]` : "border-transparent"
        } z-0`}
      >
        {editAble && (
          <div className="absolute top-[0px] left-[0%]">
            <RiDeleteBin5Line
              onClick={remove}
              className={`${"absolute top-[-20px] left-[50%] text-white  bg-red-500 cursor-pointer"}`}
            />
            <RiDragMove2Fill
              className={`${"absolute top-[-20px] left-[50%] mx-5 text-white bg-[#595964] cursor-pointer"}`}
            />
          </div>
        )}
        {
          <Element
            section={section}
            editMode={editAble}
            dispatch={(data) => update(section, data)}
          />
        }
        {editAble && (
          <>
            <Dots
              position={{
                top: "-.5%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              x
            />
            <Dots
              position={{
                top: "50%",
                right: "0%",
                transform: "translate(50%, -50%)",
              }}
            />
            <Dots
              position={{
                top: "50%",
                left: "0%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <Dots
              position={{
                bottom: "0%",
                left: "50%",
                transform: "translate(-50%, .7rem)",
              }}
              x
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ReSizeAbleWrapper;

const Dots = ({ onMouseDown, position, x = false }) => {
  const { theme } = useTheme();
  const colors = useMemo(() => globalThemeColors({}, theme), [theme]);

  if (x) {
    return (
      <div
        className={`z-10 w-5 h-5 cursor-pointer border-2 rounded-full !border-[${colors.bg.primary}]
           hover:w-7 hover:h-4  hover:rounded-2xl z-50 bg-white`}
        // onMouseDown={onMouseDown}
        style={{
          position: "absolute",
          transform: `translate("-50%", "-50%")`,
          borderColor: colors.bg.primary,
          ...position,
        }}
      />
    );
  }
  return (
    <div
      className={`z-10 w-5 h-5 cursor-pointer border-2 rounded-full 
       !border-[${colors.bg.primary}]  hover:border-2 hover:w-4 
       hover:h-7  hover:rounded-2xl z-50 bg-white`}
      // onMouseDown={onMouseDown}
      style={{
        position: "absolute",
        borderColor: colors.bg.primary,
        ...position,
      }}
    />
  );
};
