import { brands } from "@/app/Data/brandsData";

export const BrandList = () => {
  const allBrands = [
    ...brands,
    { name: "lightspeed", img: "/lightspeed.png" },
    // { name: "accel", img: "/accel.png" },
  ];

  return (
    <div className="text-[#1D234E] py-4  mt-8 sm:bg-[#EEF0F8] sm:pb-5 lg:bg-[#FFF9E6] lg:py-12">
      <h1 className="custom-text-sm-medium font-normal text-center mb-7 sec-container">
        Trusted by <span className="font-semibold">1500+ Brands</span>,
        <br className="lg:hidden" />
        Publishers with <span className="font-semibold">
          200M+ Users{" "}
        </span> and <br className="lg:hidden" />
        <span className="font-semibold"> Marquee Investors</span>
      </h1>

      <div className="sec-container">
        {/* Mobile View (2 rows) */}
        <div className="lg:hidden grid grid-cols-4 gap-3 px-4">
          {allBrands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="bg-white rounded-xl p-3 w-full">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="h-6 w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View (Single scrolling line) */}
        <div className="hidden lg:flex w-full justify-center">
          <div className="relative flex overflow-hidden">
            <div className="flex whitespace-nowrap animate-scroll">
              {allBrands.map((brand, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center mx-1"
                >
                  <div className="bg-[#FFFDF5] rounded-3xl px-5 py-4">
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
    </div>
  );
};
