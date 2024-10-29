import React from "react";
import DPVideo from "../DPVideo/DPVideo";

export default function LifeTimeValue() {
  return (
    <section className="bg-[#FFFAEA] h-screen flex justify-center  px-20 overflow-hidden relative">
      <div className="h-[65%] mx-16 flex gap-x-8 relative z-20 mt-[5%]">
        <div className="h-full flex items-center">
          <DPVideo className="h-full object-cover" src="/vid3.mp4" />
          <div className=" ">
            <h2 className="text-primaryTextColor text-3xl font-extrabold ml-4">
              Higher User:
            </h2>
            <div className="text-primaryTextColor font-semibold text-4xl bg-[#EEBC11] px-8 py-4 rounded-r-[42px] mt-4">
              <ul className="list-disc pl-5">
                <li>Conversion</li>
                <li>Sessions / visit</li>
                <li>Repeat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h2 className="capitalize opacity-70 -bottom-7 text-center text-9xl absolute font-bold w-full text-[#FFEFB9]">
        LIFETIME VALUE
      </h2>
    </section>
  );
}
