import { LiaGreaterThanSolid } from "react-icons/lia";
import Image from "next/image";
import bannerImage from "../../public/bannerImg-1.jpg";
import bannerImage2 from "../../public/bannerImg-2.jpg";
import bannerImage3 from "../../public/bannerImg3.jpg";

function Banner({ section }) {
  const data = section.result;

  return (
    <div className="flex justify-between items-center w-full h-screen bg-white">
    <div className="text-black  grid content-center h-full ml-5">
      <p className="text-6xl font-extralight my-5">
        Sell Online. <br /> <span className="font-light"> Easily.</span>
      </p>
      <p className="text=left w-[66%] my-5 font-extralight">
        This is a simple jumbotron-style for calling extra attention to
        featured content or information
      </p>
      <hr className="my-5" />
      <button className="w-1/3 px-3 py-4 bg-[#64cbb3] text-black font-normal my-2 flex items-center justify-center">
        Start Now &nbsp; &nbsp;
        <LiaGreaterThanSolid  />
      </button>
    </div>
  
    <div className="relative left-[20%]">
      <Image
        className="w-2/4 h-auto rounded-lg"
        width={"0"}
        height={"0"}
        src={bannerImage}
      />
      <div className="absolute right-1/4 top-1/4">
        <Image
          className="w-2/4 h-[200px] rounded-lg"
          width={"0"}
          height={"0"}
          src={bannerImage2}
        />
      </div>
      <div className="absolute -left-[15%] -bottom-1/4">
        <Image
          className="w-3/4 h-[200px] rounded-lg"
          width={"0"}
          height={"0"}
          src={bannerImage3}
        />
      </div>
    </div>
  </div>
  
  );
}
export default Banner;
