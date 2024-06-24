'use client'
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const OrderInformation = () => {
  const [openItems, setOpenItems] = useState(Array(3).fill(false)); 

  const toggleItem = (index) => {
    setOpenItems((prevOpenItems) => {
      const newOpenItems = [...prevOpenItems];
      newOpenItems[index] = !newOpenItems[index];
      return newOpenItems;
    });
  };

  return (
    <div className="flex flex-col items-start mb-10 gap-1">
      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          className="mt-3 border w-full border-[#dddcdc]  rounded-md "
        >
          <div className="flex items-center  justify-between bg-[#f5f3f3] px-3 border-b-[1px] py-2 border-[#dddcdc] rounded-t-md ">
            <div className=" flex flex-col items-start">
              <span className="text-sm font-medium text-[#242124]">
                Order Date
              </span>
              <span className=" text-xs text-[#7A7A7A]">October 5, 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#A6CE39] hover:text-gray-200 duration-300 ease-in-out cursor-pointer">
                {/* <Link href='#'> */}
                View order details
                {/* </Link> */}
              </span>
              <span className="text-gray-300"> | </span>
              <span className="text-xs text-[#A6CE39] hover:text-gray-200 duration-300 ease-in-out cursor-pointer">
                {/* <Link herf='#' > */}
                Invoice
                {/* </Link> */}
              </span>
            </div>
          </div>

          <div className="flex justify-between gap-3 relative flex-wrap md:flex-nowrap items-center px-3 py-2">
            <div className="flex items-start flex-col gap-2">
              <h3 className="text-lg font-semibold text-[#242124]">
                Order # 701-234232
              </h3>
              <div className="flex items-start flex-col">
                <span className="paragraf">Ship to</span>
                <span className="paragraf">Company Name</span>
                <span className="paragraf">Jhon McNeil</span>
                <span className="paragraf">520 Luzon Crest</span>
                <span className="paragraf">Mississauge ON N3C O&P</span>
              </div>
              <div className="flex items-start flex-col">
                <h3 className="text-lg font-semibold text-[#242124]">
                  Delivered 10 October
                </h3>
                <span className="paragraf">
                  Package was handled to customer
                </span>
                <span className="paragraf mt-2">
                  Return item : Eligible through November 5, 2023
                </span>
              </div>
            </div>
            <div className="flex flex-col md:pb-[4rem]">
              <span className="text-xs paragraf">Item: 4</span>
              <span className="text-xs paragraf">Buyer: Company Name</span>
              <span className="text-xs paragraf">
                Total: <span className="paragraf font-semibold">$482.45</span>
              </span>
            </div>
            <div className=" hidden md:flex flex-col gap-1">
              {[1, 2, 3, 4, 5, 6].map((buttonIndex) => (
                <button
                  key={buttonIndex}
                  className="max-w-[240px] py-[7px] flex items-center justify-center text-xs focus:bg-[#A6CE39] focus:text-white rounded-2xl px-4 hover:text-[#4d484d] cursor-pointer duration-500 ease-in-out text-[#7A7A7A] font-[400] shadow-xs border border-[#dddcdc]"
                >
                  View order details
                </button>
              ))}
            </div>
            <button
              className="flex md:hidden absolute top-3 right-4"
              onClick={() => toggleItem(index)}
            >
              {openItems[index] ? (
                <IoClose
                  className="block h-6 w-6 text-[#A6CE39]"
                  aria-hidden="true"
                />
              ) : (
                <GiHamburgerMenu
                  className="block h-6 w-6 text-[#A6CE39]"
                  aria-hidden="true"
                />
              )}
            </button>
            {openItems[index] && (
              <div className=" md:hidden w-full flex flex-col gap-2">
                {[1, 2, 3, 4, 5, 6].map((buttonIndex) => (
                  <button
                    key={buttonIndex}
                    className="w-full py-[7px]  flex items-center justify-center text-xs focus:bg-[#A6CE39] focus:text-white rounded-2xl px-4 hover:text-[#4d484d] cursor-pointer duration-500 ease-in-out text-[#7A7A7A] font-[400] shadow-xs border border-[#dddcdc]"
                  >
                    View order details
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderInformation;
