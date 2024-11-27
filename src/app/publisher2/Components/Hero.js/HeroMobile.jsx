"use client";
import Navbar from "@/app/roi-calculator/Components/Navbar";
import DPVideo from "../DPVideo/DPVideo";
import HighlightedText from "../HighlightedText/HighlightedText";

const HeroMobile = () => {
  return (
    <div className="block md:hidden ">
      <Navbar customBg="#eebe50" />
      <div
        className="absolute bg-[#eebe50] w-full min-h-[400px] top-2"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)" }}
      ></div>

      <div className="text-primaryTextColor p-4 relative min-h-[400px]">
        <h2 className="text-white mt-6 text-xl leading-8 w-1/2">
          <span className="text-white title">
            <span className="text-[#023046] font-extrabold">Discovery</span>{" "}
            Meets <br /> Commerce
          </span>
        </h2>
        <p className="font-medium w-1/2 mt-5">
          Benefits of Discovery +{" "}
          <span className="font-semibold">Commerce </span> on TikTok, Meta,
          Google & Amazon To You
        </p>
        <div className="flex gap-4 justify-between my-8 mt-0">
          <DPVideo
            id="videoDiv"
            className="absolute right-4 bottom-0 max-w-[180px] border-4 border-[#023046] rounded-xl"
            src="/HeroVideo2.mp4"
          />
        </div>
      </div>
      <div className="text-primaryTextColor p-4 pb-0 mb-10">
        <p className="text-[#000000] w-[60%] text-lg font-medium mt-5">
          Big Tech is Transforming Discovery to Commerce
        </p>
        <h1 className="custom-text-sm-medium mt-5 font-medium xxl:text-3xl sm:text-2xl">
          <HighlightedText text={"Bringing"} /> All That Power To You
        </h1>
        <div className="mt-4 grid grid-cols-2 gap-3 max-w-[80%] font-semibold">
          <div className="text-base py-4 p-2 bg-[#FEF4D3] sm:text-center lg:p-5 lg:py-1.5 rounded-lg 2xl:py-2 relative">
            Technology
            <div className="absolute lg:h-full bg-[#F7BB30] sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
          </div>
          <div className="text-base py-4 p-2 bg-[#FEF4D3] sm:text-center lg:p-5 lg:py-1.5 rounded-lg 2xl:py-2 relative">
            Operations
            <div className="absolute lg:h-full bg-[#F7BB30] sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
          </div>
          <div className="text-base py-4 p-2 bg-[#FEF4D3] sm:text-center lg:p-5 lg:py-1.5 rounded-lg 2xl:py-2 relative">
            Brand Supply
            <div className="absolute lg:h-full bg-[#F7BB30] sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
          </div>
          <div className="text-base py-4 p-2 bg-[#FEF4D3] sm:text-center lg:p-5 lg:py-1.5 rounded-lg 2xl:py-2 relative">
            Intelligence
            <div className="absolute lg:h-full bg-[#F7BB30] sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMobile;
