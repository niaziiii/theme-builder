import React from "react";
import DropableEffect from "./DropAbleEffect";
import { useDrop } from "react-dnd";
import useSections from "@/hooks/useSections";
import ReSizeAbleWrapper from "./ReSizeAbleWrapper";

function DropAbleSection({ Elements, sections }) {
  const { addSection } = useSections();

  const [{ isDroping }, drop] = useDrop({
    accept: "BLOCKS",
    collect: (monitor) => ({
      isDroping: monitor.canDrop(),
    }),
    drop: (item) => {
      addSection({
        id: item.id,
        refComponent: item.refComponent,
        result: {
          name: item.name,
          data: item.data,
        },
      });
    },
  });

  return (
    <div
      ref={drop}
      className="min-h-[85vh] flex flex-col justify-center w-full gap-4 relative"
    >
      {isDroping && <DropableEffect className="top-0" />}
      <div
        className={`bg-blue-100 flex items-center gap-y-6 justify-center flex-col w-full h-full flex-1 ${
          isDroping && "py-2"
        }`}
      >
        {sections && sections.length > 0
          ? sections.map((section, i) => {
              const ref = section.refComponent;
              const Element = Elements[ref];

              return (
                <div key={i} className="w-full">
                  <ReSizeAbleWrapper
                    index={i}
                    section={section}
                    Element={Element}
                  />
                </div>
              );
            })
          : " Drop components here..."}
      </div>
      {isDroping && <DropableEffect className="bottom-0" />}
    </div>
  );
}

export default DropAbleSection;
