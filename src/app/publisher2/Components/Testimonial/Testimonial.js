import { brands, brands2, news } from "@/app/Data/brandsData";
// import Marquee from "../Marquee/Marquee";
import Marquee from "react-fast-marquee";
import HighlightedText from "../HighlightedText/HighlightedText";
export const Testimonial = () => (
  <section className="w-full bg-[#EEF0F8] pb-10 ">
    <div className=" flex flex-col items-center h-full sec-container justify-evenly">
      <div className="sec-container w-full  py-10  ">
        <h1 className=" mb-[3%] sec-container text-[#013046] title font-bold">
          Brands <span className="font-medium">&</span> Publishers
        </h1>
        <div className="flex justify-between">
          {[...brands, ...brands2].map((brand) => (
            <div
              className="bg-white h-fit rounded-3xl px-5 py-5 mx-0.5   transition-shadow"
              key={brand.name}
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="h-6 2xl:h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <hr className="w-full border border-gray-300" />
      <div className="sec-container w-full  py-10">
        <h1 className=" mb-[3%] sec-container text-[#013046] title font-bold">
          Dpanda in the{" "}
          <HighlightedText text="news" wrapperClass="bottom-2 h-[30%]" />
        </h1>
        <div className="flex justify-between">
          {news.map((brand) => (
            <div
              className="bg-white h-fit rounded-3xl px-5 py-5 mx-0.5   transition-shadow"
              key={brand.name}
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="h-6 2xl:h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
