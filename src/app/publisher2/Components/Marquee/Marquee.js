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
      {/* Heading Section */}
      {/* <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 inline">
          Trusted by{" "}
          <span className="relative">
            <span className="relative z-10">1500+ Brands</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-200 -z-0"></span>
          </span>
          , Publishers with{" "}
          <span className="relative">
            <span className="relative z-10">200M+ Users</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-200 -z-0"></span>
          </span>{" "}
          and{" "}
          <span className="relative">
            <span className="relative z-10">Marquee Investors</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-200 -z-0"></span>
          </span>
        </h2>
      </div> */}

      {/* Marquee Section */}
      <div className="relative flex overflow-hidden">
        {/* First Animation */}
        <div className="flex animate-marquee whitespace-nowrap">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center mx-4">
              <div
                className={twMerge(
                  "bg-[#FFFDF5] rounded-3xl px-5 py-4 shadow-sm  transition-shadow",
                  className
                )}
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="h-12 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second Animation (duplicate) */}
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center mx-4">
              <div
                className={twMerge(
                  "bg-[#FFFDF5] rounded-3xl px-5 py-4 shadow-sm  transition-shadow",
                  className
                )}
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="h-12 object-contain"
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
