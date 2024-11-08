import React from "react";
import HighlightedText from "../HighlightedText/HighlightedText";

export default function Final() {
  return (
    <section className="h-screen bg-[#FEF4D4] flex flex-col relative overflow-hidden ">
      <div className="sec-container w-full  h-full">
        <h1 className="text-5xl text-[#1D234E] mt-[5%] w-[60%] ">
          Built on{" "}
          <HighlightedText wrapperClass="bottom-2 h-[35%]" text="Trust" />{" "}
        </h1>
      </div>
    </section>
  );
}
