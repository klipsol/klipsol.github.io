import DPVideo from "../DPVideo/DPVideo";
import HighlightedText from "../HighlightedText/HighlightedText";

const listItems = [
  "Personalised Targeting",
  "Selection Control",
  "AI Powered Recommendations",
];
export const DirectRelationShip = () => (
  <section className="bg-[#FEF4D4] h-screen  ">
    <div className="w-full  sec-container flex justify-center items-center h-full">
      <div className="h-[70vh] flex gap-x-[8%] items-center">
        <div className="h-fit rounded-3xl overflow-hidden w-1/2">
          <DPVideo
            className="h-full w-[85%] rounded-3xl "
            src={"/directrelationship.mp4"}
          />
        </div>
        <div className="h-full rounded-3xl w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl text-[#1D234E] font-medium">
            Direct Relationship <br />{" "}
            <HighlightedText
              text="With Brands"
              wrapperClass="bottom-2 h-[35%]"
            />
          </h2>

          <ul className="space-y-2 text-[#505C6E] text-lg mt-[5%]">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 whitespace-nowrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 flex-shrink-0"
                >
                  <path
                    d="M3 12.5l6 6 12-12"
                    stroke="#22c55e"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
