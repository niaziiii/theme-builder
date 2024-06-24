
import { RiArrowDropRightLine} from 'react-icons/ri'


const Welcome = () => {
  return (
    <div className="w-full mt-4  flex flex-col gap-4  xs:px-4 lg:px-0">
      <div className="flex items-start gap-4 flex-col md:flex-row justify-between">
        <h2 className="font-bold text-[25px]  text-[#242124] max-w-[300px] ">
          HI, Muhammad Tufail A.C.T EQPT SALES LTD
        </h2>
        <div className="flex items-center gap-4">
          <button className=" bg-[#0477BE] rounded-[50px] py-[14px] px-[30px] hover:bg-[#A6CE39] text-white duration-300 cursor-pointer font-[600]">
            Refresh
          </button>
          <button className="bg-[#0477BE] rounded-[50px] py-[14px] px-[30px] hover:bg-[#A6CE39] text-white duration-300 cursor-pointer font-[600]">
            New Order
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-[25px] text-[#242124]">
          WELCOME!
        </div>
        <p className=" m-0 paragraf">
          Everything you need to track your order, upadate your edit book, edit your account information and more is righe here.
        </p>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-[14px] text-[#0477BE]">
          {/* <Link href='#'> */}
          Your Account
          {/* </Link> */}
        </span>
        <span>
          <RiArrowDropRightLine  className=" text-gray-400"/>
        </span>
        <span className="text-[14px] text-[#A6CE39]">
          {/* <Link herf='#' > */}
          Your Orders
          {/* </Link> */}
        </span>
      </div>
    </div>
  );
};

export default Welcome;
