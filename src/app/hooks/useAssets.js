import { useParams } from "next/navigation";
import React from "react";
import { publisherconfig } from "../Data/PublisherConfig";

export default function useAssets() {
  const params = useParams();
  const publisher = params?.publisherId?.[0];

  const heroVideo =
    publisherconfig[publisher]?.heroVideo ??
    "https://imagekit.dpanda.in/publisher-banner/1733312634_thebump-1.mp4";

  return { heroVideo };
}
