import { useParams } from "next/navigation";
import React from "react";
import { publisherConfig } from "../Data/PublisherConfig";

export default function useAssets() {
  const params = useParams();
  const publisher = params?.publisherId?.[0];

  const heroVideo =
    publisherConfig[publisher]?.["1"] ??
    "https://imagekit.dpanda.in/publisher-banner/1733312634_thebump-1.mp4";
  const a2 =
    publisherConfig[publisher]?.["2a"] ??
    "https://imagekit.dpanda.in/publisher-banner/1733312634_thebump-1.mp4";
  const b2 =
    publisherConfig[publisher]?.["2b"] ??
    "https://imagekit.dpanda.in/publisher-banner/1733312634_thebump-1.mp4";
  const c =
    publisherConfig[publisher]?.["3b"] ??
    "https://imagekit.dpanda.in/publisher-banner/1733312634_thebump-1.mp4";
  const d =
    publisherConfig[publisher]?.["4b"] ??
    "https://imagekit.dpanda.in/publisher-banner/1733312634_thebump-1.mp4";

  return { heroVideo, a2, b2, c, d };
}
