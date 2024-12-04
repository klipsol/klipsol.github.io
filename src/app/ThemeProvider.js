"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ThemeProvider = () => {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    switch (pathname) {
      case "/publisher/the-bump":
        root.style.setProperty("--primary-color", "255 255 255"); // RGB for #fff
        root.style.setProperty("--secondary-color", "8 19 56"); // RGB for #081338
        root.style.setProperty("--action-color", "142 45 129"); // RGB for #8a317d
        root.style.setProperty("--brand-color", "142 45 129"); // RGB for #8a317d
        break;
      case "/the-bump":
        root.style.setProperty("--primary-color", "255 255 255"); // RGB for #fff
        root.style.setProperty("--secondary-color", "8 19 56"); // RGB for #081338
        root.style.setProperty("--action-color", "142 45 129"); // RGB for #8a317d
        root.style.setProperty("--brand-color", "8 19 56"); // RGB for #8a317d
        break;
      case "/publisher/buzzfeed":
        root.style.setProperty("--primary-color", "250 233 234"); // RGB for #fff
        root.style.setProperty("--secondary-color", "0 0 0"); // RGB for #081338
        root.style.setProperty("--action-color", "205 52 55"); // RGB for #8a317d
        root.style.setProperty("--brand-color", "205 52 55"); // RGB for #8a317d
        break;
      case "/publisher/readers-digest":
        root.style.setProperty("--primary-color", "255 255 255"); // RGB for #fff
        root.style.setProperty("--secondary-color", "0 0 0"); // RGB for #081338
        root.style.setProperty("--action-color", "205 52 55"); // RGB for #8a317d
        root.style.setProperty("--brand-color", "205 52 55"); // RGB for #8a317d
        break;
      case "/publisher/gq":
        root.style.setProperty("--primary-color", "249 245 236"); // RGB for #fff
        root.style.setProperty("--secondary-color", "0 0 0"); // RGB for #081338
        root.style.setProperty("--action-color", "198 161 73"); // RGB for #8a317d
        root.style.setProperty("--brand-color", "198 161 73"); // RGB for #8a317d
        break;
      case "/publisher/people":
        root.style.setProperty("--primary-color", "198 241 255"); // RGB for #fff
        root.style.setProperty("--secondary-color", "0 0 0"); // RGB for #081338
        root.style.setProperty("--action-color", "0 180 236"); // RGB for #8a317d
        root.style.setProperty("--brand-color", "0 180 236"); // RGB for #8a317d
        break;
      case "/publisher/bestproducts":
        root.style.setProperty("--primary-color", "198 241 255"); // RGB for #fff
        root.style.setProperty("--secondary-color", "0 0 0"); // RGB for #081338
        root.style.setProperty("--action-color", "28 28 156"); // RGB for #8a317d
        root.style.setProperty("--brand-color", "28 28 156"); // RGB for #8a317d
        break;
      case "/publisher/foodnetwork":
        root.style.setProperty("--primary-color", "250 191 194"); // RGB for #fff
        root.style.setProperty("--secondary-color", "0 0 0"); // RGB for #081338
        root.style.setProperty("--action-color", "216 33 44"); // RGB for #8a317d
        root.style.setProperty("--brand-color", "216 33 44"); // RGB for #8a317d
        break;
      case "/publisher/fandom":
        root.style.setProperty("--primary-color", "245 217 255"); // RGB for #fff
        root.style.setProperty("--secondary-color", "0 0 0"); // RGB for #081338
        root.style.setProperty("--action-color", "229 49 94"); // RGB for #8a317d
        root.style.setProperty("--brand-color", "229 49 94"); // RGB for #8a317d
        break;
      case "/publisher/techradar":
        root.style.setProperty("--primary-color", "255 240 249"); // RGB for #fff
        root.style.setProperty("--secondary-color", "0 0 0"); // RGB for #081338
        root.style.setProperty("--action-color", "10 14 32"); // RGB for #8a317d
        root.style.setProperty("--brand-color", "10 14 32"); // RGB for #8a317d
        break;
      case "/publisher/nymag":
        root.style.setProperty("--primary-color", "255 255 255"); // RGB for #fff
        root.style.setProperty("--secondary-color", "0 0 0"); // RGB for #081338
        root.style.setProperty("--action-color", "0 0 0"); // RGB for #8a317d
        root.style.setProperty("--brand-color", "0 0 0"); // RGB for #8a317d
        break;
      default:
        root.style.setProperty("--primary-color", "247 186 48"); // RGB for #f7ba30
        root.style.setProperty("--secondary-color", "0 48 69"); // RGB for #003045
        root.style.setProperty("--action-color", "0 48 69"); // RGB for #003045
        root.style.setProperty("--brand-color", "247 186 48"); // RGB for #003045
        break;
    }
  }, [pathname]);

  return null;
};

export default ThemeProvider;
