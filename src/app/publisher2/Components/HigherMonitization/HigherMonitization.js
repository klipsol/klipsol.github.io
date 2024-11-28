import React from "react";
import HighlightedText from "../HighlightedText/HighlightedText";

export default function HigherMonitization() {
  return (
    <section className="bg-[#FEF4D4] lg:bg-white py-10 ">
      <div className="sec-container flex flex-col lg:flex-row lg:justify-between">
        {" "}
        <div>
          <h1 className="title text-[#1D234E] font-medium">
            <HighlightedText text="Higher" /> <br className="" /> Monetization{" "}
          </h1>
          <div className="flex gap-x-4 mt-10 xxl:mt-[7%] justify-start text-primaryTextColor ">
            <div className="bg-[#FFF9E6] rounded-2xl lg:p-3 2xl:p-4 xxl:pt-8 lg:pt-4 whitespace-nowrap custom-text-sm relative 2xl:min-w-[188px] lg:w-[120px] sm:rounded-xl sm:w-[110px] sm:px-2 sm:py-2">
              <h1 className="absolute lg:-top-[35%] xxl:top-[-50%] font-medium title left-4 text-[#9E8637] sm:-top-[30%] ">
                01
              </h1>
              <h1 className="font-medium custom-text-sm">
                User <br />
                Experience
              </h1>
            </div>
            <div className="bg-[#FFF9E6] rounded-2xl font-medium lg:p-3 lg:pt-4 2xl:p-4 xxl:pt-8 whitespace-nowrap custom-text-sm 2xl:min-w-[188px] relative h-fit lg:w-[120px] sm:rounded-xl sm:w-[110px] sm:px-2 sm:py-2">
              <h1 className="absolute lg:-top-[35%] xxl:top-[-50%] title left-4 text-[#9E8637] sm:-top-[30%]">
                02
              </h1>
              <h1 className="font-medium custom-text-sm ">
                Lifetime <br />
                Value
              </h1>
            </div>
            <div className="bg-[#FFF9E6] rounded-2xl lg:p-3 2xl:p-4  xxl:pt-8 lg:pt-4 whitespace-nowrap custom-text-sm 2xl:min-w-[188px] relative w-fit h-fit lg:w-[120px] sm:rounded-xl sm:w-[110px] sm:px-2 sm:py-2">
              <h1 className="absolute lg:-top-[35%] xxl:top-[-50%] font-medium title left-4 text-[#9E8637] sm:-top-[30%]">
                03
              </h1>
              <h1 className="font-medium custom-text-sm">
                First-Party <br />
                Data
              </h1>
            </div>
          </div>
        </div>
        <div className=""></div>
        <hr className="w-full my-8 border-gray-400/50 lg:hidden " />
        <div className="w-0.5 bg-gray-300"></div>
        <div>
          <h1 className="title text-[#1D234E] font-medium">
            <span className="font-semibold">At </span>{" "}
            <HighlightedText text="Zero" /> <br className="" />
            Upfront Cost{" "}
          </h1>
          <div className="flex gap-x-4 mt-10 xxl:mt-[7%] justify-start text-primaryTextColor">
            <div className="bg-[#FFF9E6] rounded-2xl lg:p-3 2xl:p-4 xxl:pt-8 lg:pt-4 whitespace-nowrap custom-text-sm relative 2xl:min-w-[188px] lg:w-[120px] sm:rounded-xl sm:w-[110px] sm:px-2 sm:py-2">
              <h1 className="absolute lg:-top-[35%] xxl:top-[-50%] font-medium title left-4 text-[#9E8637] sm:-top-[30%] ">
                01
              </h1>
              <h1 className="font-medium custom-text-sm">
                One Time <br /> Plugins
              </h1>
            </div>
            <div className="bg-[#FFF9E6] rounded-2xl font-medium lg:p-3 lg:pt-4 2xl:p-4 xxl:pt-8 whitespace-nowrap custom-text-sm 2xl:min-w-[188px] relative h-fit lg:w-[120px] sm:rounded-xl sm:w-[110px] sm:px-2 sm:py-2">
              <h1 className="absolute lg:-top-[35%] xxl:top-[-50%] title left-4 text-[#9E8637] sm:-top-[30%]">
                02
              </h1>
              <h1 className="font-medium custom-text-sm ">
                Everything <br /> Commerce
              </h1>
            </div>
            <div className="bg-[#FFF9E6] rounded-2xl lg:p-3 2xl:p-4  xxl:pt-8 lg:pt-4 whitespace-nowrap custom-text-sm 2xl:min-w-[188px] relative w-fit h-fit lg:w-[120px] sm:rounded-xl sm:w-[110px] sm:px-2 sm:py-2">
              <h1 className="absolute lg:-top-[35%] xxl:top-[-50%] font-medium title left-4 text-[#9E8637] sm:-top-[30%]">
                03
              </h1>
              <h1 className="font-medium custom-text-sm">
                Direct From <br /> Brands
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
