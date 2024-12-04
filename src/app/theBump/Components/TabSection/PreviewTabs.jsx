"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import MicrositeTab from "./MicrositeTab";
import WidgetTab from "./WidgetTab";
import Incentive from "./IncentiveTab";

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
      title: "Incentivize Your Subscription",
      content: <Incentive selectedTab={selectedTab} />,
    },
  ];

  return (
    <div className="mx-2 md:mx-auto mt-4">
      <div className="mx-auto max-w-3xl flex mb-4">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 text-center py-2 px-4 text-lg font-semibold transition-colors duration-300 ease-in-out ${
              selectedTab === index
                ? "border-b-4 border-blue-500 text-blue-600"
                : "text-gray-400 hover:text-gray-300"
            }`}
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
