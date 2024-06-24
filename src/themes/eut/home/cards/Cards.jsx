import React from "react";
import { PiAddressBookFill, } from "react-icons/pi";

const cardData = [
  {
    id: 1,
    title: "Billing",
    paragraf: "View, upadate billing info",
    icon: PiAddressBookFill,
  },
  {
    id: 2,
    title: "Feedback",
    paragraf: "We value your feedback",
    icon: PiAddressBookFill,
  },
  {
    id: 3,
    title: "Product Inquiry",
    paragraf: "Price check, stock avability",
    icon: PiAddressBookFill,
  },
  {
    id: 4,
    title: "Feedback",
    paragraf: "We value your feedback",
    icon: PiAddressBookFill,
  },
];

function Cards() {
  const colors = ["#fff", "#242124", "#0477BE", "#A6CE39"];
  return (
    <div className="mt-10 sm:grid-cols-2 grid md:grid-cols-4  gap-3  w-full">
      {cardData.map((item, idx) => (
        <div
          className="flex flex-col border border-[#dddcdc]  w-full rounded-md  px-4 py-6 gap-1"
          style={{ backgroundColor: colors[idx % colors.length] }}
          key={idx}
        >
          <div className="flex items-center gap-2">
            <span>
              {
                <item.icon
                  className={`${
                    colors[idx % colors.length] === "#fff"
                      ? "text-black"
                      : "text-white"
                  } w-8 h-6 mb-2`}
                />
              }
            </span>
            <p
              className={`${
                colors[idx % colors.length] === "#fff"
                  ? "text-black"
                  : "text-white"
              } font-medium text-[15px]`}
            >
              {item.title}
            </p>
          </div>
          <p
            className={`${
              colors[idx % colors.length] === "#fff"
                ? "text-black"
                : "text-white"
            } text-[13px] font-[500px] ml-2`}
          >
            {item.paragraf}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Cards;
