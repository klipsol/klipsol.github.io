import { publisherMetaData } from "@/app/Data/metaData";
import Publisher2 from "@/app/publisher2/page";
import React from "react";

export async function generateMetadata({ params, headers }) {
  const publisher = await params;
  const publisherName = publisher["publisherId"][0];
  const metaData = publisherMetaData[publisherName] ?? {};
  return {
    ...metaData,
  };
}

export default function page() {
  return <Publisher2 />;
}
