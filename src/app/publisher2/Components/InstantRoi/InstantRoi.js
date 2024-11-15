import React from "react";
import HighlightedText from "../HighlightedText/HighlightedText";

export default function InstantRoi() {
  return (
    <section
      className="sec-container lg:h-screen sm:h-fit relative flex lg:flex-row sm:flex-col-reverse  w-full"
      id="feature"
    >
      <div className="lg:w-[65%] h-[50vh] sm:w-full flex gap-x-3">
        <div className="lg:h-screen sm:h-full bg-[#EEF0F8] rounded-t-3xl overflow-hidden w-[50%]">
          <div className=" bg-[#C4C7D5] h-[10%] text-[#234651] rounded-t-3xl mt-10 items-center subtitle font-semibold flex justify-center">
            Build In-House
          </div>
          <div className="mt-[30%] flex flex-col w-full gap-y-10 2xl:gap-y-14 items-end text-[#505C6E]">
            <div className="flex justify-end w-[80%] gap-x-10 items-center 2xl:text-2xl">
              <h2 className="font-semibold">Cost</h2>
              <div className="text-center min-w-[90%] inline-flex items-center justify-center h-10  2xl:py-10 2xl:rounded-l-[45px]  bg-white rounded-l-3xl  text-[#505C6E]">
                1M + per year
              </div>
            </div>
            <div className="flex justify-end w-[80%] gap-x-10 items-center 2xl:text-2xl">
              <h2 className="font-semibold">Time</h2>
              <div className="text-center  min-w-[90%] inline-flex items-center justify-center h-10 2xl:py-10 2xl:rounded-l-[45px]   bg-white rounded-l-3xl  text-[#505C6E]">
                1 + Year
              </div>
            </div>
            <div className="flex justify-end w-[80%] gap-x-10 items-center 2xl:text-2xl">
              <h2 className="font-semibold">Risk</h2>
              <div className="text-center min-w-[90%] inline-flex items-center justify-center h-10  2xl:py-10 2xl:rounded-l-[45px] bg-white rounded-l-3xl  text-[#505C6E]">
                Uncertain Quality & Output
              </div>
            </div>
          </div>
        </div>
        <div className="lg:h-screen sm:h-full bg-[#FEF4D3] rounded-t-3xl overflow-hidden w-[50%]">
          {" "}
          <div className=" bg-[#FFE89B] h-[10%] text-[#234651] rounded-t-3xl mt-10   items-center  subtitle font-semibold flex justify-center">
            Conventional
          </div>
          <div className="mt-[30%] flex flex-col w-full gap-y-10 2xl:gap-y-14 items-start text-[#505C6E]">
            <div className="flex justify-start w-[90%] gap-x-10 items-center">
              <div className="text-center font-bold text-[#9B771F] 2xl:py-10 2xl:rounded-r-[45px] custom-text-sm-medium h-10 justify-center inline-flex items-center   w-full bg-[#FFE89C] rounded-r-3xl   ">
                Free
              </div>
            </div>
            <div className="flex justify-start w-[90%] gap-x-10 items-center">
              <div className="text-center font-bold text-[#9B771F] 2xl:py-10 2xl:rounded-r-[45px] custom-text-sm-medium h-10 justify-center inline-flex items-center w-full   bg-[#FFE89C] rounded-r-3xl   ">
                {"< 5 Days"}
              </div>
            </div>
            <div className="flex justify-start w-[90%] gap-x-10 items-center">
              <div className="text-center font-bold text-[#9B771F] 2xl:py-10 2xl:rounded-r-[45px] custom-text-sm-medium h-10 justify-center inline-flex items-center w-full    bg-[#FFE89C] rounded-r-3xl   ">
                Delivered Upfront
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[35%] flex lg:flex-col sm:my-4 lg:my-0 sm:flex-row sm:gap-x-2 lg:justify-center lg:px-8 gap-y-3 sm:p-0 sm:w-full">
        <h1 className="title text-[#1D234E] font-medium sm:leading-[2rem] lg:leading-[3rem] xxl:leading-[5rem]">
          Instant <HighlightedText text="ROI" wrapperClass="bottom-2 h-[30%]" />{" "}
        </h1>
        <p className="2xl:text-2xl text-[#505C6E]">
          Product delivered upfront.
          <span className="font-semibold"> Fast and Free.</span>
        </p>
      </div>
      <hr className="bottom-0 absolute w-full custom-hr sm:hidden lg:block" />
    </section>
  );
}
