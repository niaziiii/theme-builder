"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  shopAllProductItems,
  navMenu,
} from "@/themes/sowa/utils/menu/constant.utils";
import Link from "next/link";
import DropDownMenu from "./DropDownMenu";
import SearchBox from "../SearchBox";
import SideBar from "../sideBar/SideBar";

export default function NavBar() {
  const [shopAllModal, setShopAllModalOpen] = useState(false);
  const [mainMenuModal, setMainMenuModal] = useState(false);
  const [subNavMenu, setSubNavMenu] = useState(null);
  const [sideShowOpen, setSideShowOpen] = useState(false);

  return (
    <div className="bg-darkBlue flex gap-y-3 md:gap-x-8 text-black py-3 justify-between shadow px-1 min-[500px]:px-6 lg:px-20">
      <div className="flex gap-4 text-white md:text-black items-center">
        <div className="block md:hidden">
          <button
            onClick={() => setSideShowOpen(true)}
            className="font-medium flex items-center gap-2 border-none outline-none"
          >
            <Menu size={40} />
          </button>

          {sideShowOpen && <SideBar close={() => setSideShowOpen(false)} />}
        </div>
        <div className="relative hidden md:block">
          <button
            onClick={() => setMainMenuModal(true)}
            onMouseLeave={() => setMainMenuModal(false)}
            className="font-medium flex items-center gap-2 border-none outline-none"
          >
            <Menu />
          </button>

          {mainMenuModal && (
            <DropDownMenu
              callback={(value) => setMainMenuModal(value)}
              nav={navMenu.mainMenu}
              className="left-[-50%]"
            />
          )}
        </div>
        <div className="relative hidden md:block">
          <button
            onMouseEnter={() => setShopAllModalOpen(true)}
            onMouseLeave={() => setShopAllModalOpen(false)}
            className="font-medium flex items-center gap-2 border-none outline-none"
          >
            Shop All Product
          </button>
          {shopAllModal && (
            <DropDownMenu
              callback={(value) => setShopAllModalOpen(value)}
              nav={shopAllProductItems}
              className="left-[25%]"
            />
          )}
        </div>
      </div>
      <div className="items-center gap-2 ml-2 sm:ml-10 flex-1 flex md:hidden">
        <SearchBox />
      </div>
      <div className="items-center gap-2 hidden md:flex">
        {navMenu.sideMenu.map((menu, i) => {
          return (
            <div key={menu.name} className="flex items-center gap-2">
              <Link
                className="text-[13px] font-medium relative"
                href={menu.link}
                onMouseEnter={() => setSubNavMenu(menu.name)}
                onMouseLeave={() => setSubNavMenu(null)}
              >
                {menu.name}
                {subNavMenu === menu.name && menu.subNavMenu && (
                  <DropDownMenu
                    callback={(value) =>
                      setSubNavMenu(value ? menu.name : null)
                    }
                    nav={menu.subNavMenu}
                  />
                )}
              </Link>
              {i != navMenu.sideMenu.length - 1 && (
                <div className="w-[2px] h-[13px] bg-black"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
