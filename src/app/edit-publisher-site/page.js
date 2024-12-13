"use client";

import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import { transformPublisherMetadata } from "../utils/editUtils";
import Card from "./components/Card";
import publisherMetaData from "../../../Data/metaData.json";
import { useRouter } from "next/navigation";

export default function page() {
  const [searchtext, setSearchtext] = useState("");
  const allSites = transformPublisherMetadata(publisherMetaData);
  const [siteList, setSiteList] = useState(allSites);

  const router = useRouter();

  const updateSearchTxt = (e) => setSearchtext(e.target.value);

  useEffect(() => {
    const filteredSites = allSites.filter((site) =>
      site.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    setSiteList(filteredSites);
  }, [searchtext]);
  return (
    <main className="bg-white h-screen pt-3">
      <nav className="sec-container w-full rounded-3xl p-3 flex justify-around bg-gray-700  shadow-xl ">
        <Search value={searchtext} updateSearchTxt={updateSearchTxt} />
        <button
          className="bg-white px-3 py-1 font-medium rounded-3xl text-gray-700"
          onClick={() => router.push("/create-publisher-site")}
        >
          Create New Site
        </button>
      </nav>
      <section className="h-[80vh] sec-container flex-col w-full overflow-y-scroll space-y-5 pt-3 pb-[150px]">
        {siteList.map(({ title, name, description, openGraph }, index) => (
          <Card
            indx={index}
            key={title + index}
            title={title}
            name={name}
            description={description}
            image={openGraph?.images[0]}
            label="Edit"
            onClick={() => {}}
          />
        ))}
      </section>
    </main>
  );
}
