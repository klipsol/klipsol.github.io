"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Incentive from "./IncentiveTab";
import MicrositeTab from "./MicrositeTab";
import WidgetTab from "./WidgetTab";

const PreviewTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabData = [
    {
      title: "Website - Widget",
      content: <WidgetTab selectedTab={selectedTab} />,
    },
    {
      title: "App - mWeb",
      content: <MicrositeTab selectedTab={selectedTab} />,
    },
    {
      title: "Bundle Your Subscription",
      content: <Incentive selectedTab={selectedTab} />,
    },
  ];

  return (
    <div className="mx-2 md:mx-auto mt-4">
      <div className="mx-auto max-w-3xl flex mb-4 gap-x-3 lg:gap-x-5 pt-4 text-center">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 text-white text-center py-2 px-4 text-xs lg:text-base 2xl:text-lg font-medium transition-colors duration-300 ease-in-out rounded-3xl 
    ${
      selectedTab === index
        ? "bg-[#3B81F6] hover:bg-[#4A8EF7]"
        : "bg-[#0C1D5F] hover:bg-[#1C2D7F]"
    } 
    hover:scale-103 active:scale-100 transform transition-all`}
            onClick={() => setSelectedTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={twMerge("", selectedTab !== 0 && "hidden")}>
        {tabData[0].content}
      </div>
      <div className={twMerge("", selectedTab !== 1 && "hidden")}>
        {tabData[1].content}
      </div>
      <div className={twMerge("", selectedTab !== 2 && "hidden")}>
        {tabData[2].content}
      </div>
    </div>
  );
};

export default PreviewTabs;
