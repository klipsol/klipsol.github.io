import React from "react";
import DPVideo from "../DPVideo/DPVideo";
import HighlightedText from "../HighlightedText/HighlightedText";

export default function InstantRoi() {
  return (
    <section
      className="sec-container h-screen relative flex  w-full"
      id="feature"
    >
      <div className="w-[70%] flex gap-x-3">
        <div className="h-screen bg-[#EEF0F8] overflow-hidden w-[50%]">
          <div className=" bg-[#C4C7D5] h-[10%] text-[#234651] rounded-t-3xl mt-10 py-3 subtitle font-semibold flex justify-center">
            Conventional
          </div>
          <div className="mt-[20%] flex flex-col w-full gap-y-10 items-end text-[#505C6E]">
            <div className="flex justify-end w-[80%] gap-x-10 items-center">
              <h2 className="font-semibold">Cost</h2>
              <div className="text-center py-1.5 px-4 min-w-[80%] inline-flex items-center justify-center h-[43px] bg-white rounded-l-3xl  text-[#505C6E]">
                1M + per year
              </div>
            </div>
            <div className="flex justify-end w-[80%] gap-x-10 items-center">
              <h2 className="font-semibold">Time</h2>
              <div className="text-center py-1.5 px-4 min-w-[80%] inline-flex items-center justify-center h-[43px] bg-white rounded-l-3xl  text-[#505C6E]">
                1 + Year
              </div>
            </div>
            <div className="flex justify-end w-[80%] gap-x-10 items-center">
              <h2 className="font-semibold">Risk</h2>
              <div className="text-center py-2 h-[60px] px-4 min-w-[80%] inline-flex items-center justify-center bg-white rounded-l-3xl  text-[#505C6E]">
                Uncertain Quality & Output
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen bg-[#FEF4D3] overflow-hidden w-[50%]">
          {" "}
          <div className=" bg-[#FFE89B] h-[10%] text-[#234651] rounded-t-3xl mt-10 py-3 subtitle font-semibold flex justify-center">
            Conventional
          </div>
          <div className="mt-[20%] flex flex-col w-full gap-y-10 items-start text-[#505C6E]">
            <div className="flex justify-start w-[80%] gap-x-10 items-center">
              <div className="text-center font-bold text-[#1ABE5A] custom-text-sm-medium  py-1.5 px-4 min-w-[80%] bg-[#FFE89C] rounded-r-3xl  text-[#505C6E]">
                Free
              </div>
            </div>
            <div className="flex justify-start w-[80%] gap-x-10 items-center">
              <div className="text-center font-bold text-[#1ABE5A] custom-text-sm-medium  py-1.5 px-4 min-w-[80%] bg-[#FFE89C] rounded-r-3xl  text-[#505C6E]">
                {"< 5 Days"}
              </div>
            </div>
            <div className="flex justify-start w-[80%] gap-x-10 items-center">
              <div className="text-center font-bold text-[#1ABE5A] custom-text-sm-medium h-[60px]  py-1.5 px-4 min-w-[80%] bg-[#FFE89C] rounded-r-3xl  text-[#505C6E]">
                Delivered Upfront
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%] flex flex-col justify-center px-8 gap-y-3">
        <h1 className="text-4xl whitespace-nowrap text-[#1D234E] font-medium">
          Instant <HighlightedText text="ROI" wrapperClass="bottom-2 h-[30%]" />{" "}
        </h1>
        <p className="custom-text-sm text-[#505C6E]">
          Product delivered upfront.
          <span className="font-semibold">Fast and Free.</span>
        </p>
      </div>
      {/* <hr className="bottom-0 absolute w-full custom-hr" /> */}
    </section>
  );
}
