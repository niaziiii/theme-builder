"use client";
import Image from "next/image";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { GrFormSubtract } from "react-icons/gr";
const MagnesiumCiterate = () => {
  const [showText, setShowText] = useState(false);
  const count = 8;
  const heading = [
    `Magnesium Citrate`,
    `Ingredients`,
    `Dosing`,
    `Use`,
    `Children`,
    `Safety`,
    `Side Effects`,
    `Your Order`,
    `Calm Sleep`,
    `Natural Calm Gummies`,
    `Heavenly Sleep Melatonin`,
  ];
  const ImgCount = (
    <Image
      width={150}
      height={100}
      alt="img"
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid meet' overflow='visible' height='100%' viewBox='0 0 126 26' fill='%230477BE' stroke='none'%3E%3Cpath d='M3,10.2c2.6,0,2.6,2,2.6,3.2S4.4,16.5,3,16.5s-3-1.4-3-3.2S0.4,10.2,3,10.2z M18.8,10.2c1.7,0,3.2,1.4,3.2,3.2s-1.4,3.2-3.2,3.2c-1.7,0-3.2-1.4-3.2-3.2S17,10.2,18.8,10.2z M34.6,10.2c1.5,0,2.6,1.4,2.6,3.2s-0.5,3.2-1.9,3.2c-1.5,0-3.4-1.4-3.4-3.2S33.1,10.2,34.6,10.2z M50.5,10.2c1.7,0,3.2,1.4,3.2,3.2s-1.4,3.2-3.2,3.2c-1.7,0-3.3-0.9-3.3-2.6S48.7,10.2,50.5,10.2z M66.2,10.2c1.5,0,3.4,1.4,3.4,3.2s-1.9,3.2-3.4,3.2c-1.5,0-2.6-0.4-2.6-2.1S64.8,10.2,66.2,10.2z M82.2,10.2c1.7,0.8,2.6,1.4,2.6,3.2s-0.1,3.2-1.6,3.2c-1.5,0-3.7-1.4-3.7-3.2S80.5,9.4,82.2,10.2zM98.6,10.2c1.5,0,2.6,0.4,2.6,2.1s-1.2,4.2-2.6,4.2c-1.5,0-3.7-0.4-3.7-2.1S97.1,10.2,98.6,10.2z M113.4,10.2c1.2,0,2.2,0.9,2.2,3.2s-0.1,3.2-1.3,3.2s-3.1-1.4-3.1-3.2S112.2,10.2,113.4,10.2z'/%3E%3C/svg%3E"
    />
  );
  const questionContent = [
    {
      title: [
        "What is magnesium citrate?",
        "Can I try a sample of Natural Calm?",
        "Why should I choose a magnesium drink over a tablet?",
        "What is magnesium citrate used for?",
        "Can I get the magnesium I need from food?",
        "What does 'ionic' mean and why does it matter?",
      ],
    },
    {
      title: [
        "Is Natural Calm organic?",
        "Is there salt in Natural Calm magnesium?",
        "What is the source of Natural Calm Magnesium?",
        "Does Natural Calm contain any sugar, calories or carbohydrates?",
        "Does Natural Calm contain corn or any of its derivatives?",
        "Why does it say magnesium carbonate in the ingredients listing?",
        "I thought Natural Calm was Magnesium Citrate?",
        "What is the source of the citric acid in Natural Calm?",
      ],
    },
    {
      title: [
        "How much magnesium do I need?",
        "How much Natural Calm should I take?",
      ],
    },
    {
      title: [
        "What is the best way to scoop out Natural Calm powder?",
        "How do I prepare Natural Calm?",
        "Should I take Natural Calm with or without food?",
        "When should I take Natural Calm?",
        "My new bottle of Natural Calm is only half full. Why?",
        "Can I prepare Natural Calm in advance and drink it later?",
        "Is it necessary to use hot water, or can I add Natural Calm to cold water?",
      ],
    },
    {
      title: [
        "How is Natural Calm Kids different from your regular Natural Calm?",
        "Is Natural Calm safe for babies and children",
      ],
    },
  ];

  const dropContent = [
    {
      title: [
        "Experts indicate that short-term use (i.e., 3 months or less) of melatonin at the recommended dose does not raise concern of harm for healthy adults. Consult a healthcare professional if you are considering long term use, a higher or more frequent dose.",
      ],
    },
  ];
  const showDropText = (id) => {
    setShowText((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <div className="w-[60%] mx-auto text-[#7A7A7A]">
      <div>
        {[1, 2, 3, 4, 5].map((index) => (
          <>
            <p className="font-medium text-2xl text-gray">
              {heading[index - 1]}
            </p>

            <div className="w-full flex">
              {[...Array(count)].map((_) => (
                <div>{ImgCount}</div>
              ))}
            </div>

            <div>
              {questionContent[index - 1]?.title.map((item, id) => (
                <>
                  {showText[id] ? (
                    <div className="block">
                      <div className="w-full flex items-center my-5 ml-5">
                        <GrFormSubtract
                          className=" cursor-pointer text-[#A6CE39]"
                          onClick={() => showDropText(id)}
                        />
                        <span className="ml-5 font-semibold  cursor-pointer text-[#A6CE39]">
                          {item}
                        </span>
                      </div>

                      <div className="rounded-none border-[1px] border-gray-200 block my-5 ml-5 h-fit">
                        <p className="mt-5 mb-10 ml-5 mr-8 text-sm">
                          {" "}
                          {dropContent[0].title}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center my-5 ml-5">
                      <FaPlus
                        className="text-gray cursor-pointer hover:text-[#A6CE39]"
                        onClick={() => showDropText(id)}
                      />
                      <span className="ml-5 font-semibold text-[#0072CE] cursor-pointer hover:text-[#A6CE39]">
                        {item}
                      </span>
                      <br />
                    </div>
                  )}
                </>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default MagnesiumCiterate;
