import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getSiteData } from "../utils/editUtils";

export default function useAssets() {
  const params = useParams();
  const publisher = params?.publisherId?.[0] || "dpanda";
  const [assets, setAssets] = useState({
    heroVideo: null,
    a2: null,
    b2: null,
    c: null,
    d: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const videoConfig = await getSiteData({
        publisher,
        configName: "videoconfig",
      });
      // Update the state with the fetched values
      setAssets({
        heroVideo: videoConfig?.["1"],
        a2: videoConfig?.["2a"],
        b2: videoConfig?.["2b"],
        c: videoConfig?.["3b"],
        d: videoConfig?.["4b"],
      });
      setLoading(false);
    })();
  }, [publisher]);

  return { ...assets, loading }; // Return the state object
}
