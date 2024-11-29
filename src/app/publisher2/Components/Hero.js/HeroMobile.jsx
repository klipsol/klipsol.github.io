"use client";
import Navbar from "@/app/roi-calculator/Components/Navbar";
import DPVideo from "../DPVideo/DPVideo";
import HighlightedText from "../HighlightedText/HighlightedText";
import { useParams } from "next/navigation";

const HeroMobile = () => {
  const params = useParams();
  const publisher = params?.publisherId?.[0];
  return (
    <div className="block md:hidden ">
      <Navbar customBg="#eebe50" />
      <div
        className="absolute bg-[#eebe50] w-full min-h-[400px] top-2"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)" }}
      ></div>

      <div className="text-primaryTextColor p-4 relative min-h-[400px] flex">
        <div>
          <h2 className="text-white mt-6 text-xl leading-8">
            <span className="text-white title">
              <span className="text-[#023046] font-extrabold">Discovery</span>{" "}
              Meets <br /> Commerce
            </span>
          </h2>
          <p className="font-medium mt-5 leading-5 lg:w-full sm:w-[95%]">
            Benefits of Discovery +{" "}
            <span className="font-semibold">Commerce </span> on TikTok, Meta,
            Google & Amazon To You
          </p>
        </div>
        <div className="relative mt-0">
          <DPVideo
            id="videoDiv"
            className="max-w-[180px] sm:max-w-[150px] p-[4px] bg-[#023046] rounded-xl"
            src="/HeroVideo2.mp4"
          />
        </div>
        <div className="top-[280px]  pointer-events-auto text-sm z-30 w-full sec-container absolute  inset-0">
          <a
            href="/theBump"
            className="flex flex-col z-[9999] cursor-pointer bg-[#023046] rounded-[46px] py-2 xxl:py-3 xxl:rounded-[50px] w-fit px-6 "
            style={{ lineHeight: "1.5" }}
          >
            <div className="flex gap-x-2 items-center relative">
              {/* <span className="bg-[#F7BA30]/80 w-2 h-2 rounded-full "></span> */}
              <span className="bg-[#F7BA30] w-2 h-2 xxl:w-2.5 xxl:h-2.5 rounded-full animate-ping [animation-duration:0.9s] absolute top-2 md:top-2 md:-left-4"></span>
              <span className="bg-[#F7BA30] w-2 h-2 xxl:w-2.5 xxl:h-2.5 rounded-full  absolute top-2 md:top-2 md:-left-4"></span>
              <span className="text-white text-center font-medium ml-4 xxl:ml-3.5 md:m-auto ">
                Live Preview
              </span>
            </div>
            <p className="text-[#F7BA30] text-[10px] xxl:text-[0.7em] text-center ml-3 md:m-auto">
              {publisher && `for ${publisher}`}
            </p>
          </a>
        </div>
      </div>
      <div className="text-primaryTextColor p-4 pb-0 mb-10">
        <p className="text-[#000000] w-[60%] text-lg font-medium mt-5">
          Big Tech is Transforming Discovery to Commerce
        </p>
        <h1 className="custom-text-sm-medium mt-5 font-medium xxl:text-3xl sm:text-2xl">
          <HighlightedText text={"Bringing"} /> That Power To You
        </h1>
        <div className="mt-4 grid grid-cols-2 gap-3 max-w-[80%] font-semibold">
          <div className="text-base py-4 p-2 bg-[#FEF4D3] sm:text-center lg:p-5 lg:py-1.5 rounded-lg 2xl:py-2 relative rounded-b-xl">
            Technology
            <div className="absolute lg:h-full bg-[#F7BB30] sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
          </div>
          <div className="text-base py-4 p-2 bg-[#FEF4D3] sm:text-center lg:p-5 lg:py-1.5 rounded-lg 2xl:py-2 relative rounded-b-xl">
            Operations
            <div className="absolute lg:h-full bg-[#F7BB30] sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
          </div>
          <div className="text-base py-4 p-2 bg-[#FEF4D3] sm:text-center lg:p-5 lg:py-1.5 rounded-lg 2xl:py-2 relative rounded-b-xl">
            Brand Supply
            <div className="absolute lg:h-full bg-[#F7BB30] sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
          </div>
          <div className="text-base py-4 p-2 bg-[#FEF4D3] sm:text-center lg:p-5 lg:py-1.5 rounded-lg 2xl:py-2 relative rounded-b-xl">
            Intelligence
            <div className="absolute lg:h-full bg-[#F7BB30] sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMobile;
