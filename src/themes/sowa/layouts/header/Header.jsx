import Image from "next/image";
import SearchBox from "@/themes/sowa/layouts/header/SearchBox";
import SideMenu from "@/themes/sowa/layouts/header/SideMenu";
import NavBar from "@/themes/sowa/layouts/header/navbar/NavBar";

import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-grey md:bg-yellow text-white">
      {/* TopHeader */}
      <div className="flex items-center justify-between px-1 min-[500px]:px-6 lg:px-20 max-[500px]:pt-5 min-[500px]:py-5 bg-grey">
        <div className="flex flex-col">
          <Link href="/">
            <Image src="/logo.png" width={150} height={200} alt="logo" />
          </Link>
          <p className="mt-auto font-semibold text-sm hidden lg:block">
            TOOLING YOUR WORLD.
          </p>
        </div>
        <div className="flex-1 mx-2 hidden md:block">
          <SearchBox />
        </div>
        <SideMenu />
      </div>

      <NavBar />
    </div>
  );
}
