import React from "react";
import HighlightedText from "../HighlightedText/HighlightedText";

export default function Final() {
  return (
    <section className="h-screen bg-[#FEF4D4] flex flex-col relative overflow-hidden ">
      <div className="sec-container w-full  h-full">
        <div className="text-[#013046]">
          <div className="flex w-full">
            <h1 className="text-5xl text-[#1D234E] mt-[5%] w-[60%] ">
              Built on Live
              <HighlightedText
                wrapperClass="bottom-2 h-[35%]"
                text="Trust"
              />{" "}
            </h1>
            <h1 className="text-5xl text-[#1D234E] mt-[5%] w-[40%] pl-8 ">
              <HighlightedText wrapperClass="bottom-2 h-[35%]" text="Backed" />{" "}
              By
            </h1>
          </div>

          <div className="w-full h-[90vh] flex">
            <div className="w-[60%] h-full flex gap-x-4 pt-[5%]">
              <div className="w-[50%] h-full">
                <div className=" rounded-3xl bg-[#F7B801] h-[60%] w-full"></div>
                <div className="mt-[8%]">
                  <h2 className="text-3xl font-semibold">Rajat, CEO</h2>
                  <h5 className="text-xl">10+ Years with Brands</h5>
                </div>
              </div>
              <div className="w-[50%] h-full ">
                <div className=" rounded-3xl bg-[#F7B801] h-[60%] w-full"></div>
                <div className="mt-[8%]">
                  <h2 className="text-3xl font-semibold">Gaurav, CTO</h2>
                  <h5 className="text-xl">25+ Years in Technology</h5>
                </div>
              </div>
            </div>
            <div className="w-[40%] pt-[5%] pl-8">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-[8%]">
                <div className="bg-white p-4 rounded-2xl flex items-center justify-center">
                  <img src="/accel.png" alt="img" />
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center justify-center">
                  <img src="/lightspeed.png" alt="img" />
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center justify-center">
                  <img src="/sauce.png" alt="img" />
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center justify-center">
                  <img src="/whiteboard.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
