"use client";
import { memo } from "react";
import { useDrag } from "react-dnd";

const DragAbleSection = memo(({ item, type, children }) => {
  const [{ dragStart }, drag] = useDrag(() => {
    return {
      type,
      item,
      collect: (monitor) => ({
        dragStart: monitor.isDragging(),
      }),
    };
  });

  return (
    <div
      className={`w-full border-2 border-dotted ${
        dragStart ? "border-blue-300" : "border-transparent"
      }`}
      ref={drag}
    >
      {children}
    </div>
  );
});

export default DragAbleSection;
