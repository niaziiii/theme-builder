"use client";
import Image from "next/image";
import { Users, ShoppingBag, Heart, GitCompare } from "lucide-react";
import Link from "next/link";
import { FixedBadge } from "./badge/Badge";
import CustomModal from "./modal/CustomModal";
import { useState } from "react";
import CountryModal from "./CountryModal";

export default function SideMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col ml-auto min-[500px]:gap-2 ">
      {open && (
        <CustomModal
          closeModal={() => setOpen(false)}
          content={<CountryModal />}
          open={open}
        />
      )}
      <div className=" flex gap-x-1 min-[500px]:gap-x-4 items-center mx-0 justify-end">
        <Link href="#" className="flex items-center gap-2 hover:text-blue">
          <Users size={20} />
          Login
        </Link>

        <Link
          href="#"
          className="flex items-center gap-2 hover:text-blue relative"
        >
          <GitCompare size={20} />
          <FixedBadge value={2} />
        </Link>
        <Link href="#" className="flex items-center gap-2 hover:text-blue">
          <Heart size={20} />
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 hover:text-blue relative"
        >
          <ShoppingBag size={20} />
          <FixedBadge value={10} />
        </Link>
        <Link href="#" className="flex items-center gap-2 hover:text-blue">
          <Image
            src={"/country/usa.png"}
            alt="language flag"
            width={30}
            height={30}
            onClick={() => setOpen(true)}
          />
        </Link>
      </div>
      <div className="max-[500px]:flex-col max-[500px]:gap-0 max-[500px]:mt-2 flex items-center justify-end gap-2">
        <Link className=" max-[500px]:leading-4" href={"1-800-265-8221"}>
          <p className="text-yellow font-bold">1-800-265-8221</p>
        </Link>
        <Link
          className=" max-[500px]:leading-4"
          href={"mailto:sales@sowatool.com"}
        >
          <small className="text-yellow hover:text-blue">
            sales@sowatool.com
          </small>
        </Link>
      </div>
    </div>
  );
}
