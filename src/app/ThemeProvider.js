"use client";

import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";
import { getSiteData } from "./utils/editUtils";

const ThemeProvider = () => {
  const params = useParams();
  const publisher = params?.publisherId?.[0] || "dpanda";
  useEffect(() => {
    (async () => {
      const root = document.documentElement;

      const publisherTheme = await getSiteData({
        publisher,
        configName: "themeconfig",
      });

      root.style.setProperty(
        "--primary-color",
        publisherTheme["primary-color"]
      );
      root.style.setProperty(
        "--secondary-color",
        publisherTheme["secondary-color"]
      );
      root.style.setProperty("--action-color", publisherTheme["action-color"]);
      root.style.setProperty("--brand-color", publisherTheme["8 19 56"]);
    })();
  }, [publisher]);

  return null;
};

export default ThemeProvider;
