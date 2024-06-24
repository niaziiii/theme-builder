import Image from "next/image";
const DiscoverImg = () => {
  return (
    <div className="w-full mt-6 grid justify-items-center">
      <Image width={300} height={500} className="" src="/discover.jpg" alt="img_discover" />
      <div className="flex items-center justify-center w-[145px] bg-[#0477BE] rounded-full text-[13px] font-bold text-white h-[51px] cursor-pointer hover:bg-[#A6CE39] transition ease-in-out delay-150 ">
        SHOP NOW
      </div>
    </div>
  );
};

export default DiscoverImg;
