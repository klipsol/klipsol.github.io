"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  Upload,
  Palette,
  Globe,
  Video,
  Eye,
  ImageIcon,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

import videoconfig from "../../../app/Data/videoconfig.json";
import metadata from "../../../app/Data/metadata.json";
import themeconfig from "../../../app/Data/themeconfig.json";
import { RGBColorInput } from "./Components/RGBColorInput";
import { MediaPreview } from "./Components/MediaPreview";
import { useRouter } from "next/navigation";

export default function SiteConfigurationPage() {
  const [siteName, setSiteName] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [colors, setColors] = useState({
    "primary-color": "59 130 246",
    "secondary-color": "16 185 129",
    "action-color": "239 68 68",
    "brand-color": "16 185 196",
  });

  const router = useRouter();

  const search = useSearchParams();

  const publisher = search.get("publisher");

  const [videoUrls, setVideoUrls] = useState({
    1: "",
    "2a": "",
    "2b": "",
    "3b": "",
    "4b": "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (publisher) {
      setSiteName(publisher);
      console.log("sdfs", { ...videoconfig[publisher] });
      if (videoconfig[publisher]) {
        setVideoUrls({ ...videoconfig[publisher] });
      }
      if (metadata[publisher]) {
        setLogoUrl(metadata[publisher]?.openGraph?.images?.[0]);
      }
      if (themeconfig[publisher]) {
        setColors({ ...themeconfig[publisher] });
      }
    }
  }, []);

  // Handler for video URL changes
  const handleVideoUrlChange = (key, value) => {
    setVideoUrls((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const metadata = {
      title: "Discovery Meets Commerce",
      description:
        "From Medium to Destination for Discovery, as mastered by Google, Amazon, TikTok and Meta",
      openGraph: {
        title: "Discovery Meets Commerce",
        description:
          "From Medium to Destination for Discovery, as mastered by Google, Amazon, TikTok and Meta",
        images: [logoUrl],
      },
    };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      videoconfig: {
        [siteName]: videoUrls,
      },
      metadata: { [siteName]: { ...metadata } },
      themeconfig: {
        [siteName]: { ...colors },
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/create-publisher", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    alert("Configuration saved");
    router.push("/edit-publisher-site");
  };

  //

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-4 md:p-8 flex justify-center items-center">
      <div className="w-full  bg-white shadow-2xl rounded-2xl overflow-hidden ">
        <div className="p-6 space-y-6 bg-gray-50">
          <div className=" bg-gray-700 p-4 rounded-lg">
            <h1 className="text-2xl font-bold text-white flex items-center">
              <Globe className="mr-3" /> Site Configuration
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 ">
            <div className="flex gap-x-8">
              <div className="space-y-2 w-1/2">
                <label className="text-lg font-semibold text-gray-800 flex items-center">
                  <Globe className="mr-2 text-blue-600" /> Site Name
                </label>
                <input
                  type="text"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  placeholder="My Awesome Site"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />

                {/* <div className="space-y-2 w-1/2"> */}
                <label className="text-lg font-semibold text-gray-800 flex items-center">
                  <Upload className="mr-2 text-green-600" /> Preview Image URL
                </label>
                <input
                  type="url"
                  value={logoUrl}
                  onChange={(e) => setLogoUrl(e.target.value)}
                  placeholder="https://example.com/logo.png"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50"
                />
                {/* </div> */}
              </div>
              <div className="space-y-2 w-1/2">
                <MediaPreview url={logoUrl} type="image" />
              </div>
            </div>

            {/* Theme Colors Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                <Palette className="mr-2 text-purple-600" /> Theme Colors
              </h2>
              <div className="space-y-3">
                {Object.keys(colors).map((colorKey) => (
                  <RGBColorInput
                    key={colorKey}
                    label={
                      colorKey.replace("-color", "").charAt(0).toUpperCase() +
                      colorKey.replace("-color", "").slice(1)
                    }
                    value={colors[colorKey]}
                    onChange={(newColor) =>
                      setColors((prev) => ({
                        ...prev,
                        [colorKey]: newColor,
                      }))
                    }
                  />
                ))}
              </div>
            </div>

            {/* Video URLs Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                <Video className="mr-2 text-red-600" /> Video URLs
              </h2>

              <div className="space-y-2 flex flex-wrap gap-x-4  items-center">
                {[
                  { key: "1", label: " 1" },
                  { key: "2a", label: " 2a" },
                  { key: "2b", label: " 2b" },
                  { key: "3b", label: " 3b" },
                  { key: "4b", label: " 4b" },
                ].map(({ key, label }) => (
                  <div key={key} className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                      {label} Video URL
                    </label>
                    <input
                      type="url"
                      value={videoUrls[key] || ""}
                      onChange={(e) =>
                        handleVideoUrlChange(key, e.target.value)
                      }
                      placeholder={`https://example.com/${key}.mp4`}
                      className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50"
                    />
                    <MediaPreview url={videoUrls[key]} type="video" />
                  </div>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-700 text-white py-3 rounded-lg hover:opacity-90 transition-all flex items-center justify-center space-x-2"
            >
              <span>Save Configuration</span>
              <ChevronRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
