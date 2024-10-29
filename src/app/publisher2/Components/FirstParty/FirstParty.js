import React from "react";
import DPVideo from "../DPVideo/DPVideo";

export default function FirstParty() {
  return (
    <section className="bg-[#003046] h-screen flex justify-center  px-20 overflow-hidden relative">
      <div className="h-[65%] mx-16 flex gap-x-8 relative z-20 mt-[5%]">
        <div className="h-full flex items-center">
          <DPVideo className="h-full object-cover" src="/vid2.mp4" />
          <div className=" ">
            <h2 className="text-primaryTextColor text-3xl font-extrabold ml-4">
              Higher User:
            </h2>
            <div className="text-primaryTextColor font-semibold text-4xl bg-[#EEBC11] px-8 py-4 rounded-r-[42px] mt-4">
              <ul className="list-disc pl-5">
                <li>Better Targeting</li>
                <li>Higher CPMs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h2 className="capitalize opacity-70 -bottom-7 text-center text-9xl absolute font-bold w-full text-[#274653]">
        FIRST-PARTY DATA
      </h2>
    </section>
  );
}
