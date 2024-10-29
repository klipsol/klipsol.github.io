import React from "react";

export default function Final() {
  return (
    <section className="min-h-screen section bg-secondaryBg px-20 flex flex-col relative overflow-hidden">
      <div className="mt-[5%] w-full flex justify-center h-72 ">
        <img src="laptop.png" className=" h-full" alt="laptop" />
      </div>

      <div className="mt-6">
        <h2 className="text-3xl text-[#EEBC11] font-semibold">
          Built on Trust
        </h2>
        <div className="mt-5 flex gap-x-4">
          <div className="rounded-3xl h-64 w-64 bg-[#EEBC11]"> </div>{" "}
          <div className="rounded-3xl h-64 w-64 bg-[#EEBC11]"> </div>
        </div>
      </div>
    </section>
  );
}
