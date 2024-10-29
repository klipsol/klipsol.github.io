import React from "react";

export default function Operations() {
  return (
    <section className="bg-[#003046] h-screen flex justify-between  overflow-hidden relative">
      <div className="h-[65%] flex items-center  text-7xl font-extrabold  w-1/2 pl-[10%] mt-[5%] ">
        <h2 className="text-white">
          We Deliver <br /> Everything:
          <br /> <span className="text-[#F7B801] mt-2">Free & Fast</span>
        </h2>
      </div>
      <div className="h-[70%] w-1/2 pl-[10%] relative z-20 mt-[5%]">
        <img className="h-full" src="/phone2.png" alt="phone" />
      </div>
      <h2 className="capitalize opacity-70 -bottom-7 text-center text-9xl z-10 absolute font-bold w-full text-[#274653]">
        OPERATIONS
      </h2>
    </section>
  );
}
