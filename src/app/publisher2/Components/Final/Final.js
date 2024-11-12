import React from "react";
import HighlightedText from "../HighlightedText/HighlightedText";

export default function Final() {
  return (
    <section className="h-screen bg-white flex flex-col relative overflow-hidden ">
      <div className="sec-container w-full  h-full">
        <h1 className="title font-medium text-[#1D234E] mt-[4%] w-[60%] ">
          Built on{" "}
          <HighlightedText wrapperClass="bottom-2 h-[35%]" text="Trust" />{" "}
        </h1>
        <div className="flex justify-around text-[#013046] mt-[5%]">
          <div className="flex items-center  gap-x-8">
            <img className="xl:h-72 " src="/ceo.png" alt="ceo" />
            <div className="">
              <h2 className="font-medium custom-text-sm-medium">
                Rajat Dhanda
              </h2>
              <h6 className="custom-text-sm">CEO & Co-founder</h6>
              <div className="flex mt-5 gap-x-3">
                <img className="h-7" src="/uniliver-sm.png" />
                <img className="h-7" src="/sb.png" />
              </div>
            </div>
          </div>
          <div className="flex items-center  gap-x-8">
            <img className="xl:h-72 " src="/cto.png" alt="ceo" />
            <div className="">
              <h2 className="font-medium custom-text-sm-medium">
                Gaurav Gupta
              </h2>
              <h6 className="custom-text-sm">CTO & Co-founder</h6>
              <div className="flex mt-5 gap-x-3">
                <img className="h-7" src="/google.png" />
                <img className="h-7" src="/amazon.png" />
                <img className="h-7" src="/yahoo.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[4%] flex gap-x-4 title items-center text-[#1D234E] ">
          <div className="lg:text-[1.3em] font-bold ml-[10%]">
            Backed <span className="font-medium">By</span>
          </div>
          <div className="flex gap-x-4">
            <div className="bg-[#FEF4D4] h-fit rounded-3xl px-5 py-4 shadow-sm  transition-shadow">
              <img
                src="/accel.png"
                alt="accel"
                className="h-5 object-contain"
              />
            </div>
            <div className="bg-[#FEF4D4] h-fit rounded-3xl px-5 py-4 shadow-sm  transition-shadow">
              <img
                src="/lightspeed.png"
                alt="accel"
                className="h-5 object-contain"
              />
            </div>
            <div className="bg-[#FEF4D4] h-fit rounded-3xl px-5 py-4 shadow-sm  transition-shadow">
              <img
                src="/sauce.png"
                alt="accel"
                className="h-5 object-contain"
              />
            </div>
            <div className="bg-[#FEF4D4] h-fit rounded-3xl px-5 py-3 shadow-sm  transition-shadow">
              <img
                src="/whiteboard2.png"
                alt="accel"
                className="h-7 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
