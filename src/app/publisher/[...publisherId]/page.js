import publisherMetaData from "../../../../Data/metaData.json";
import Publisher2 from "@/app/the-bump/page";

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
