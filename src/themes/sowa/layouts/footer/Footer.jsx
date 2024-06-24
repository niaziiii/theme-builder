import React from "react";

import Link from "next/link";
import SocialInfo from "./socialInfo/SocialInfo";
import MobileList from "./MobileList";
import { footerNavItems } from "@/themes/sowa/utils/menu/constant.utils";

export default function Footer() {
  const { account, company, downloads } = footerNavItems;
  const data = [
    {
      name: "Account",
      content: <ListRender list={account} />,
    },
    {
      name: "Downloads",
      content: <ListRender list={downloads} />,
    },
    {
      name: "Company",
      content: <ListRender list={company} />,
    },
  ];

  return (
    <div className="w-full bg-yellow grid grid-cols-1 md:grid-cols-2 py-14  px-6 lg:px-20">
      <div className=" grid-cols-3 text-black hidden md:grid">
        {data.map((link, i) => (
          <div key={i} className="mt-4 md:mt-0">
            <b className="font-bold uppercase">{link.name}</b>
            {link.content}
          </div>
        ))}
      </div>{" "}
      <div className=" grid-cols-1 gap-y-4 text-black grid md:hidden mb-4">
        {data.map((link, i) => (
          <div key={i}>
            <MobileList link={link} />
          </div>
        ))}
      </div>
      <div className="bg-blue-500 grid grid-cols-1 gap-y-3 md:gap-y-0 md:grid-cols-2">
        <div>
          <Link href={"#"} className="text-lightBlue hover:text-blue font-bold">
            FIND A DISTRIBUTOR
          </Link>
        </div>
        <div>
          <b className="font-bold uppercase text-black"> {"WE'RE"} SOCIAL</b>
          <div className="mt-2">
            <SocialInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

const ListRender = ({ list }) => {
  return (
    <ul className="mt-2 flex flex-col gap-3 w-full bg-s">
      {list.map((item, i) => (
        <li
          key={i}
          className="w-fit inline-block hover:translate-x-3 transition-all"
        >
          <Link
            title={item.name}
            className="text-[15px]  w-[100%]"
            href={item.link}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
