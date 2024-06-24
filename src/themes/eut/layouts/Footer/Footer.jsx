'use client'
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import ExclusiveOffers from "./exclusiveOffers";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
// import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const menuItems = [{ name: "About Us", href: "/company/aboutUs" },
{ name: "The Stay Calm Blog", href: "/company/stayCalmBlog" },
{ name: "Testimonials", href: "/company/testimonial" },
{ name: "Awards", href: "/company/awards" },
{ name: "Giving Back", href: "/company/givingBack" },
{ name: "News & Media", href: "/company/news" }
];

const menuItems2 = [{ name: "FAQs", href: "/customerService/faq" },
{ name: "Shipping & Returns", href: "/customerService/shipping" },
{ name: "Privacy Policy", href: "/customerService/privacy" },
{ name: "Contact", href: "/contact" }
];
const menuItems3 = [
  { name: "Store Locator", href: "/shopaddress/storelocator"},
];

const Footer = () => {
  const [leftList, setLeftList] = useState(false);
  const [midList, setMidList] = useState(false);
  const [rightList, setRightList] = useState(false);

  function checkClicked() {
    setLeftList(!leftList)
  }
  function checkedClicked2() {
    setMidList(!midList)
  }
  function checkClicked3() {
    setRightList(!rightList)
  }

  // const route = useRouter();
  const path = usePathname();
  return (
    <>
      {path == "/sign_in" ? null : (
        <div
          className={`bg-fixed ${path == "/contact" ? "mt-28" : ""}`}
          style={{
            backgroundImage:
              "url(https://naturalcalm.ca/wp-content/uploads/2020/05/background-only-web.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundColor: "white",
            width: "100%",
          }}
        >
          <div className="w-full h-[50px] bg-[#A6CE39] flex justify-center gap-8 lg:px-[15px] lg:py-[0px]  md:px-[20px] md:py-[5px] xs:px-[10px] xs:py-[5px] px-[10px] py-[5px]  ">
            <div className="h-full w-[20px] flex justify-center items-center ">
              <FaFacebookF className="text-white text-[23px] " />
            </div>
            <div className="h-full w-[20px] flex justify-center items-center ">
              <FaTwitter className="text-white text-[23px] " />
            </div>
            <div className="h-full w-[20px] mx-2 flex justify-center items-center ">
              <FaInstagram className="text-white text-[23px] " />
            </div>
            <div className="h-full w-[20px] mx-2 flex justify-center items-center ">
              <FaPinterest className="text-white text-[23px] " />
            </div>
          </div>

          {/* footer  */}
          <div className="footerBG bg-white opacity-[0.75] px-20 overflow-x-hidden  py-10">
            {/* large device footer */}
            <div className="lg:flex items-start justify-between gap-2 h-[350px] m-auto py-[50px] hidden">
              <div className="xs:my-2 my-3">
                <p className="text-[#0072CE] text-[15px] font-semibold">
                  COMPANY
                </p>
                {menuItems.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-[#54595F] text-[14px] py-[5px] font-[500] cursor-pointer hover:text-[#A6CE39] block"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <div className="xs:my-2 my-3">
                <p className="text-[#0072CE] text-[15px] font-semibold">
                  CUSTOMER SERVICE
                </p>
                {menuItems2.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-[#54595F] text-[14px] py-[5px] font-[500] cursor-pointer hover:text-[#A6CE39] block"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <div className="xs:my-2 my-3">
                <p className="text-[#0072CE] text-[15px] font-semibold">
                  More Ways To Shop
                </p>
                {menuItems3.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-[#54595F] text-[14px] py-[5px] font-[500] cursor-pointer hover:text-[#A6CE39] block"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <div className=" xs:my-2 my-3 ">
                <p className="text-[#0072CE] text-[15px] font-semibold">
                  GET EXCLUSIVE OFFERS
                </p>
                <p className="text-[#54595F] max-w-[531px] w-full text-[14px] py-[5px] font-medium cursor-pointer hover:text-[#A6CE39]">
                  Be the first to receive discounts, contests, giveaways and
                  naturally calming health tips.
                </p>
                <div className="flex">
                  <div className="text-center mr-1">
                    <p className="text-[#54595F] text-[14px] py-[5px] font-medium cursor-pointer hover:text-[#A6CE39]">
                      Name*
                    </p>
                    <input
                      type="text"
                      className="bg-[#D7F0FF] outline-none p-2 lg:w-[166px] md:w-[166px] xs:w-[66px] w-[66px]"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-[#54595F] text-[14px] py-[5px] font-medium cursor-pointer hover:text-[#A6CE39]">
                      Email*
                    </p>
                    <input
                      type="text"
                      className="bg-[#D7F0FF] outline-none p-2 lg:w-[166px] md:w-[166px] xs:w-[66px] w-[66px]"
                    />
                  </div>
                  <div className="flex justify-center items-center px-4 pt-6">
                    <div className="bg-[#0477BE] rounded-full text-[13px] font-bold text-white h-[51px] flex items-center justify-center cursor-pointer hover:bg-[#A6CE39] transition ease-in-out delay-150 px-10">
                      SUBMIT
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* medium device footer */}
            <div className="lg:hidden">
              <div className="items-start justify-between xs:py-5 md:flex gap-2 h-[220px] m-auto py-[50px]">
                <div className="my-2 lg:my-3">
                  <p className="text-[#0072CE] text-[15px] font-semibold">
                    COMPANY
                  </p>
                  <div>
                    {leftList ?
                      <>
                        <IoCloseOutline className="text-lg" onClick={checkClicked} />
                        <div className="xs:mb-5 lg:12" >
                          {menuItems.map((item, index) => {
                            return (
                              <div className="" >
                                <Link
                                  key={index}
                                  href={item.href}
                                  className="text-[#54595F] text-[14px] py-[5px] font-[500] cursor-pointer hover:text-[#A6CE39] block bg-[#ffffff]"
                                >
                                  {item.name}
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </>
                      :
                      <RxHamburgerMenu className="text-lg" onClick={checkClicked} />
                    }


                  </div>
                </div>
                <div className="my-2 lg:my-3">
                  <p className="text-[#0072CE] text-[15px] font-semibold">
                    CUSTOMER SERVICE
                  </p>
                  <div>
                    {midList ?
                      <div >
                        <IoCloseOutline className="text-lg" onClick={checkedClicked2} />
                        <div className="xs:mb-5 lg:12">
                          {menuItems2.map((item, index) => {
                            return (
                              <div>
                                <Link
                                  key={index}
                                  href={item.href}
                                  className="text-[#54595F] text-[14px] py-[5px] font-[500] cursor-pointer hover:text-[#A6CE39] block"
                                >
                                  {item.name}
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      :
                      <RxHamburgerMenu className="text-lg" onClick={checkedClicked2} />
                    }


                  </div>
                </div>
                <div className="my-2 lg:my-3">
                  <p className="text-[#0072CE] text-[15px] font-semibold">
                    MORE WAYS TO SHOP
                  </p>
                  <div>
                    {rightList ?
                      <div className="xs:mb-5 lg:12">
                        <IoCloseOutline className="text-lg" onClick={checkClicked3} />

                        <div className="xs:mb-5 lg:12">
                          {menuItems3.map((item, index) => {
                            return (
                              <div>
                                <Link
                                  key={index}
                                  href={item.href}
                                  className="text-[#54595F] text-[14px] py-[5px] font-[500] cursor-pointer hover:text-[#A6CE39] block"
                                >
                                  {item.name}
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      :
                      <RxHamburgerMenu onClick={checkClicked3} />

                    }
                  </div>
                </div>

              </div>

              {leftList && midList ?

                <div className="xs:block xs:mt-80 lg:my-24 md:mx-auto xs:w-full lg:w-[50%] lg:text-center">
                  <ExclusiveOffers />
                </div>
                :
                leftList || midList
                  ?
                  <div className="xs:block xs:mt-[140px] lg:my-24 md:mx-auto xs:w-full lg:w-[50%] lg:text-center">
                    <ExclusiveOffers />
                  </div>
                  :
                  <div className="xs: block xs:my-2 my-3 md:mx-auto xs:w-full lg:w-[50%] lg:text-center">
                  <ExclusiveOffers />
                  </div>
              }
            </div>


          </div>

          <div className="w-full h-[50px] bg-[#A6CE39] flex justify-center items-center lg:px-[15px] lg:py-[0px]  md:px-[20px] md:py-[5px] xs:px-[10px] xs:py-[5px] px-[10px] py-[5px] ">
            <p className="text-[11px] text-white">
              © 2022 NATURAL CALM CANADA – ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
