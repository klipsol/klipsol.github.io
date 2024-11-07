import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

export default function Operations() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="bg-[#003046] h-screen flex justify-between  overflow-hidden relative"
    >
      <div className="h-[70%] flex items-center  text-7xl font-extrabold  w-1/2 pl-[10%] mt-[5%] ">
        <div className="h-[70%] flex items-center  text-6xl font-extrabold  w-1/2 pl-[10%] mt-[5%]">
          <h2 className="text-white">
            <span className="text-[#F7B801] mt-2">One-Step</span>
            <br /> Technology
          </h2>
        </div>
      </div>
      <div className="h-[70%] w-1/2 pl-[5%]  z-20 mt-[5%]">
        <div className="relative w-fit h-full">
          <div
            id="O-brand"
            className="flex items-center px-6 py-2 bg-[#FFDF74] gap-x-3 rounded-3xl absolute -top-3 w-fit -left-24 "
          >
            <img className="h-8 w-8" src="/brand.png" alt="end to end" />
            <p className="text-black text-sm font-semibold ">
              Brand <br /> Supply
            </p>
          </div>
          <div
            id="O-payments"
            className="flex items-center px-6 py-2 bg-[#FFDF74] gap-x-3 rounded-3xl absolute bottom-14 w-fit -left-24 "
          >
            <img className="h-8 w-8" src="/payment.png" alt="end to end" />
            <p className="text-black text-sm font-semibold ">
              Payments & <br /> Settlements{" "}
            </p>
          </div>

          <div
            id="O-catalogue"
            className="flex items-center px-6 py-2 bg-[#FFDF74] gap-x-3 rounded-3xl absolute top-10 w-fit  -right-32"
          >
            <img className="h-8 w-8" src="/catalogue.png" alt="end to end" />
            <p className="text-black text-sm font-semibold ">
              Catalogue <br /> & Pricing
            </p>
          </div>

          <div
            // id="O-catalogue"
            className="flex items-center px-6 py-2 bg-[#FFDF74] gap-x-3 rounded-3xl absolute top-14 w-fit  -left-24"
          >
            <img className="h-8 w-8" src="/catalogue.png" alt="end to end" />
            <p className="text-black text-sm font-semibold ">
              Data & <br /> Analytics{" "}
            </p>
          </div>

          <div
            // id="O-catalogue"
            className="flex items-center px-6 py-2 bg-[#FFDF74] gap-x-3 rounded-3xl absolute bottom-52 w-fit  -left-36"
          >
            <img className="h-8 w-8" src="/catalogue.png" alt="end to end" />
            <p className="text-black text-sm font-semibold ">Personalization</p>
          </div>

          <div
            // id="O-catalogue"
            className="flex items-center px-6 py-2 bg-[#FFDF74] gap-x-3 rounded-3xl absolute bottom-32 w-fit  -left-24"
          >
            <img className="h-8 w-8" src="/catalogue.png" alt="end to end" />
            <p className="text-black text-sm font-semibold ">
              Pricing <br />
              Intelligence
            </p>
          </div>

          <div
            id="O-customer"
            className="flex items-center px-6 py-2 bg-[#FFDF74] gap-x-3 rounded-3xl absolute bottom-32 w-fit -right-32 "
          >
            <img className="h-8 w-8" src="/customer.png" alt="end to end" />
            <p className="text-black text-sm font-semibold ">
              Customer <br /> Service
            </p>
          </div>
          <img className="h-full" src="/phone2.png" alt="phone" />
        </div>
      </div>
      <h2
        className="capitalize opacity-70 -bottom-6 text-center text-9xl z-10 absolute font-bold w-full text-[#274653]"
        style={{
          fontSize: "min(12vw, 9rem)", // Responsive font size
          lineHeight: "1",
          bottom: "-0.1em", // Adjust based on your needs
          letterSpacing: "-0.02em",
        }}
      >
        {" "}
        OPERATIONS
      </h2>
    </section>
  );
}
