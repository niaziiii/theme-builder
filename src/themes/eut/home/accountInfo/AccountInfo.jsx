
import { PiAddressBookFill } from "react-icons/pi";

const AccountInfo = () => {
  return (
    <div className="flex flex-col gap-2 w-full my-10">
      <h3 className="md:text-[25px] text-[#242124] text-lg font-[500] xs:px-4 lg:px-0">
        Your Account
      </h3>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-4 w-full">
        {[1, 2, 3, 4, 5, 6].map((_ , id) => (
          <div key={id} className="flex items-center border border-[#dddcdc] rounded-xl  bg-white  w-full gap-2 py-4 px-6">
            <div className="w-[46px] h-[46px] bg-[#0477BE] flex items-center justify-center rounded-full">
              <PiAddressBookFill className=" fill-[white] w-[36px] h-[36px]" />
            </div>
            <div className=" flex flex-col">
              <p className="font-medium text-[15px]">Your Orders</p>
              <span className="text-[11px] max-w-[170px] w-full text-[#7A7A7A]">
                Track, return, cancle an order, download invoice or buy again
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountInfo;
