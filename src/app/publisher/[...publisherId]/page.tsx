import Publisher2 from "@/app/the-bump/page";
import type { Metadata } from "next";
import publisherMetaData from "../../../../Data/metaData.json";

export async function generateMetadata({ params }): Promise<Metadata> {
  const publisher = await params;
  const publisherName = publisher["publisherId"][0];
  const metaData = publisherMetaData[publisherName] ?? {};
  return {
    ...metaData,
  };
}

export default async function page({ params }) {
  const publisher = await params;
  const publisherName = publisher["publisherId"][0];
  return <Publisher2 publisher={publisherName} />;
}
