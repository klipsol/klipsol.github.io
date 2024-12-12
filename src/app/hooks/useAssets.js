import { useParams } from "next/navigation";
// import { publisherConfig } from '../Data/PublisherConfig';

import publisherConfig from "../../../app/Data/videoconfig.json";

export default function useAssets() {
  const params = useParams();
  const publisher = params?.publisherId?.[0] || "dpanda";

  const heroVideo = publisherConfig[publisher]?.["1"];
  const a2 = publisherConfig[publisher]?.["2a"];
  const b2 = publisherConfig[publisher]?.["2b"];
  const c = publisherConfig[publisher]?.["3b"];
  const d = publisherConfig[publisher]?.["4b"];

  return { heroVideo, a2, b2, c, d };
}
