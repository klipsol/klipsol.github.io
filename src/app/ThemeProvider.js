"use client";

import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";

import themeconfig from "../../Data/themeconfig.json";

const ThemeProvider = () => {
  const params = useParams();
  const publisher = params?.publisherId?.[0] || "dpanda";
  useEffect(() => {
    const root = document.documentElement;

    const publisherTheme = themeconfig[publisher] ?? themeconfig.default;

    root.style.setProperty("--primary-color", publisherTheme["primary-color"]);
    root.style.setProperty(
      "--secondary-color",
      publisherTheme["secondary-color"]
    );
    root.style.setProperty("--action-color", publisherTheme["action-color"]);
    root.style.setProperty("--brand-color", publisherTheme["8 19 56"]);
  }, [publisher]);

  return null;
};

export default ThemeProvider;
