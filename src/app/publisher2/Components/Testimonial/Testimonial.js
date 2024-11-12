import HighlightedText from "../HighlightedText/HighlightedText";
import Marquee from "../Marquee/Marquee";

export const Testimonial = () => (
  <section className="h-screen w-full bg-[#EEF0F8] pt-[5%]">
    <h1 className=" mb-[3%] sec-container text-[#013046] title font-bold">
      Brands <span className="font-medium">&</span> Publishers
    </h1>
    <Marquee className="bg-white px-3 py-3" />
    <div className="h-[50vh] flex items-center sec-container w-full bg-red-50 border-t border-gray-200">
      <h1 className="title text-[#1D234E] font-medium">
        Dpanda in the{" "}
        <HighlightedText text="news" wrapperClass="bottom-2 h-[30%]" />
      </h1>
    </div>
  </section>
);
