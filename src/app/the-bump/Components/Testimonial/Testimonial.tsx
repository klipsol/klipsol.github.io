import { brands, brands2, news } from '@/app/Data/brandsData';
// import Marquee from "../Marquee/Marquee";
import Marquee from 'react-fast-marquee';
import HighlightedText from '../HighlightedText/HighlightedText';
export const Testimonial = () => (
  <section className="w-full pb-10 ">
    <div className=" flex flex-col items-center h-full justify-evenly">
      <div className="bg-[#EEF0F8] w-full py-10">
        <h1 className="sec-container w-full mb-[3%] sec-container text-[#013046] title font-bold sm:text-center lg:text-left">
          <HighlightedText text="Brands & Publishers" wrapperClass="bottom-1" />
          {/* Brands <span className="font-medium">&</span> Publishers */}
        </h1>
        <div className="lg:flex sm:hidden sec-container justify-between">
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
        <div className="w-full mt-8 lg:hidden">
          <Marquee>
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
          </Marquee>
        </div>
      </div>
      <hr className="w-full border border-gray-300" />
      <div className="sec-container w-full py-10 sm:px-[15px] md:px-0">
        <h1 className="mb-[3%] text-center md:text-start sec-container text-[#013046] title font-bold">
          Dpanda in the{' '}
          <HighlightedText text="News" wrapperClass="bottom-1 h-[30%]" />
        </h1>
        <div className="flex sm:flex-wrap lg:flex-nowrap gap-2 2xl:justify-between">
          {news.map((newshouse) => (
            <a
              className="bg-[#EEF0F8] lg:bg-white h-fit rounded-3xl px-5 py-5 basis-[calc(50%-0.5rem)] lg:basis-auto mx-0 transition-shadow"
              key={newshouse.name}
              href={newshouse.href}
              target="_blank"
            >
              <img
                src={newshouse.img}
                alt={newshouse.name}
                className="h-6 2xl:h-10 object-contain mx-auto"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);
