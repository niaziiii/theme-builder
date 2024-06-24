import React from 'react'

const ExclusiveOffers = () => {
    return (
        <div>
            <div>
                <p className="text-[#0072CE] text-[15px] font-semibold">
                    GET EXCLUSIVE OFFERS
                </p>
                <p className="text-[#54595F] max-w-[531px] w-full text-[14px] py-[5px] font-medium cursor-pointer hover:text-[#A6CE39] lg:text-center">
                    Be the first to receive discounts, contests, giveaways and
                    naturally calming health tips.
                </p>
                <div className="flex flex-wrap">
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
    )
}

export default ExclusiveOffers
