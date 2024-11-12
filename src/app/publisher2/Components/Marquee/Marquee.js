import React from "react";
import { twMerge } from "tailwind-merge";

const Marquee = ({ className }) => {
  const brands = [
    {
      name: "Unilever",
      img: "/uniliver.png",
    },
    {
      name: "ITC",
      img: "/itc.png",
    },
    {
      name: "Vahdam",
      img: "/vahdam.png",
    },
    {
      name: "GlobalBees",
      img: "/global.png",
    },
    {
      name: "Times Group",
      img: "/toi.png",
    },
    {
      name: "Fi",
      img: "/fi.png",
    },
    {
      name: "Truecaller",
      img: "/truecaller.png",
    },
  ];

  return (
    <div className="pb-12">
      {/* Marquee Section */}
      <div className="relative flex overflow-hidden">
        {/* First Animation */}
        <div className="flex animate-marquee whitespace-nowrap">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center mx-1">
              <div
                className={twMerge(
                  "bg-[#FFFDF5] rounded-3xl px-5 py-4 shadow-sm  transition-shadow",
                  className
                )}
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="h-8 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second Animation (duplicate) */}
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center mx-1">
              <div
                className={twMerge(
                  "bg-[#FFFDF5] rounded-3xl px-5 py-4 shadow-sm  transition-shadow",
                  className
                )}
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="h-8 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
