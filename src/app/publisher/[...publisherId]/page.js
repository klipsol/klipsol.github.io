import { publisherMetaData } from "@/app/Data/metaData";
import Publisher2 from "@/app/the-bump/page";

export async function generateMetadata({ params, headers }) {
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
