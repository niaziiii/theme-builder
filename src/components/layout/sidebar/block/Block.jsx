import React, { useMemo, useState } from "react";
import DragAbleSection from "@/components/common/dragAndDrop/DragAbleSection";
import { defaultBlocks, EUTBlocks, SowaBlocks } from "@/utils/home/home.utils";
import { APP_THEMES } from "@/utils/theme/theme.utils";
import useTheme from "@/hooks/useTheme";

const Block = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { theme } = useTheme();

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const _defaultBlocks = useMemo(() => {
    const themeBlocks = {
      [APP_THEMES.eut]: EUTBlocks,
      [APP_THEMES.sowa]: SowaBlocks,
    };
    return {
      [theme.name]: themeBlocks[theme.name],
      ...defaultBlocks,
    };
  }, [theme.name]);

  const keys = Object.keys(_defaultBlocks);

  return (
    <div className="w-full">
      <input
        type="text"
        className="w-full py-3 px-2 font-normal italic bg-[#2B2B33] hover:bg-[#363640] text-xs text-[#D9D9D9] outline-none"
        placeholder="Search components"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <div className="overflow-y-auto scroll-ml-20  hover:cursor-grab h-[85vh] pb-10">
        {keys.map((key) => {
          const blocks = _defaultBlocks[key];

          return (
            <div key={key} className="my-3 mx-2">
              <div className="text-xs mb-2 text-[#D9D9D9] capitalize">
                {key}
              </div>
              <div className="grid grid-cols-3 gap-1">
                {blocks
                  .filter((block) =>
                    block.name.toLowerCase().includes(searchQuery)
                  )
                  .map((block, i) => (
                    <DragAbleSection type="BLOCKS" item={block} key={i}>
                      <div className="text-center bg-[#3E3E46] hover:bg-[#4c4c55]">
                        <img
                          src={block.image}
                          alt="image"
                          className="mx-auto"
                          style={{ maxWidth: "80px" }}
                        />
                        <div className="py-1 text-xs text-[#D9D9D9]">
                          {block.name}
                        </div>
                      </div>
                    </DragAbleSection>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Block);
