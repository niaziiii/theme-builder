
import calmImg from "../public/calm.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import TopCards from "./TopCards";
const Header = () => {
  const path = usePathname();
  return (
    <>
      {path == "/sign_in" ? null : (
        <div className="w-full bg-[#A6CE39]">
       <TopCards/>
          <div className=" lg:pb-0 md:pb-3 sm:pb-3 z-30 pb-3 w-fit fixed -top-5  lg:mt-[9px] md:-mt-[45px] sm:-mt-[50px] -mt-[50px] ">
            <Image
              className="object-cover lg:ml-[100px] md:ml-5 sm:ml-5 ml-5"
              src={calmImg}
              priority
              width={200}
              height={160}
              alt="img"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
