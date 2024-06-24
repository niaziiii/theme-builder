import React from "react";
import { Rocket, RefreshCcw, CreditCard, MessageCircle } from "lucide-react";

export default function SowaInfo({ section, editMode, dispatch }) {
  const data = section.result.data;

  const items = [
    {
      icon: <Rocket size={36} />,
    },
    {
      icon: <RefreshCcw size={36} />,
    },
    {
      icon: <CreditCard size={36} />,
    },
    {
      icon: <MessageCircle size={36} />,
    },
  ];

  const updateSection = (newData) => {
    dispatch({
      info: [...newData],
    });
  };

  console.log({
    section,
    editMode,
    data,
  });
  return (
    <div className="p-10 bg-black rounded-md w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 ">
        {data.info.map((item, i) => (
          <>
          <List key={i} item={{ ...item, icon: items[i].icon }} index={i} />
          </>
        ))}
      </div>
    </div>
  );
}

const List = ({ item, index }) => {

  return (
    <div className="flex items-center gap-4 text-white">
      <div className="text-yellow">{item.icon}</div>
      <div>
        <h2 className="font-semibold text-lg">{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};
