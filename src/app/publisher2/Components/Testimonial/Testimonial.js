import { brands } from "@/app/Data/brandsData";
import HighlightedText from "../HighlightedText/HighlightedText";
// import Marquee from "../Marquee/Marquee";
import Marquee from "react-fast-marquee";
export const Testimonial = () => (
  <section className="h-screen w-full bg-[#EEF0F8] pt-[5%]">
    <h1 className=" mb-[3%] sec-container text-[#013046] title font-bold">
      Brands <span className="font-medium">&</span> Publishers
    </h1>
    <Marquee className="" direction="left" speed="30" pauseOnHover autoFill>
      {brands.map((brand) => (
        <div
          className="bg-white h-fit rounded-3xl px-5 py-5 mx-0.5   transition-shadow"
          key={brand.name}
        >
          <img
            src={brand.img}
            alt={brand.name}
            className="h-6 object-contain"
          />
        </div>
      ))}
    </Marquee>

    <div className="h-[50vh] flex items-center gap-x-6 sec-container w-full border-t-2 border-[#707070]/60 overflow-x-hidden mt-[5%]">
      <h1 className="title text-[#1D234E] font-medium min-w-[18%] leading-10">
        Dpanda in <br />
        {/* <span className="-mt-1"> */}
        the <HighlightedText text="news" wrapperClass="bottom-2 h-[30%]" />
        {/* </span> */}
      </h1>
      <div className="">
        <Marquee
          className=""
          direction="right"
          speed="30"
          pauseOnHover
          autoFill
        >
          <div className="bg-white h-fit rounded-3xl px-5 py-5 mx-1   transition-shadow">
            <img
              src="/bussinessline.png"
              alt="accel"
              className="h-5 object-contain"
            />
          </div>
          <div className="bg-white h-fit rounded-3xl px-5 py-5 mx-1   transition-shadow">
            <img src="/forbes.png" alt="accel" className="h-5 object-contain" />
          </div>
          <div className="bg-white h-fit rounded-3xl px-5 py-5 mx-1   transition-shadow">
            <img src="/mint.png" alt="accel" className="h-5 object-contain" />
          </div>
          <div className="bg-white h-fit rounded-3xl px-5 py-5 mx-1   transition-shadow">
            <img
              src="/yourstory.png"
              alt="accel"
              className="h-5 object-contain"
            />
          </div>
          <div className="bg-white h-fit rounded-3xl px-5 py-5 mx-1   transition-shadow">
            <img src="/tet.png" alt="accel" className="h-5 object-contain" />
          </div>
          <div className="bg-white h-fit rounded-3xl px-5 py-5 mx-1   transition-shadow">
            <img src="/inc.png" alt="accel" className="h-5 object-contain" />
          </div>
        </Marquee>
      </div>
    </div>
  </section>
);
