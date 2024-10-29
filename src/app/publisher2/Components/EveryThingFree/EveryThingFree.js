import React from "react";

export default function EveryThingFree() {
  return (
    <section className="bg-[#FFFAEA] h-screen flex  flex-col items-center px-20 overflow-hidden relative">
      <h2 className="text-5xl text-[#013046] font-semibold pt-7 pb-4">
        Everything <span className="text-[#EFBA09] font-medium ">FREE:</span>
      </h2>
      <h3 className="text-3xl font-normal mt-2 text-black pb-5">
        We Earn After You Do
      </h3>
      <img src="/dollar.png" className="w-[50%] " alt="dollar" />
      <h2 className="capitalize opacity-70 -bottom-7 text-center text-9xl absolute font-bold w-full text-[#FFEFB9]">
        EVERYTHING FREE
      </h2>
    </section>
  );
}
