import { brands } from "@/app/Data/brandsData";

export const BrandList = () => (
  <div className=" text-[#1D234E] mt-14 sec-container">
    <h1 className="custom-text-sm-medium font-medium text-center mb-7  ">
      Trusted by <span className="font-semibold"> 1500+ Brands</span>,
      Publishers with <span className="font-semibold">200M+ Users </span> and
      <span className="font-semibold"> Marquee Investors</span>
    </h1>
    <div className="pb-12 flex w-full justify-center">
      <div className="relative flex overflow-hidden">
        <div className="flex whitespace-nowrap">
          {[
            ...brands,
            { name: "lightspeed", img: "/lightspeed.png" },
            { name: "accel", img: "/accel.png" },
          ].map((brand, index) => (
            <div key={index} className="flex items-center justify-center mx-1">
              <div className="bg-[#FFFDF5] rounded-3xl px-5 py-4 ">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="h-8 2xl:h-11 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
