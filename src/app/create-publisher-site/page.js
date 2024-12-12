"use client";

import React, { useState } from "react";
import { ChevronRight, Upload, Palette, Globe } from "lucide-react";

// Utility function to convert RGB to Hex
const rgbToHex = (r, g, b) => {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = parseInt(x).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
};

// Utility function to convert Hex to RGB
const hexToRgb = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
};

export default function SiteConfigurationPage() {
  // State management for form inputs
  const [siteName, setSiteName] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [colors, setColors] = useState({
    primary: [59, 130, 246],
    secondary: [16, 185, 129],
    action: [239, 68, 68],
  });
  const [previewConfig, setPreviewConfig] = useState(null);

  const saveMetaData = () => {
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
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create configuration object
    const siteConfig = {
      name: siteName,
      logoUrl: logoUrl,
      theme: colors,
    };
    saveMetaData();
    // Set preview (in a real app, this might be sent to a backend)
    // setPreviewConfig(siteConfig);

    // Optional: You could add toast notification or modal here
    alert("Site Configuration Saved!");
  };

  // Color input component
  const RGBColorInput = ({ label, value, onChange }) => {
    const updateColor = (index, newValue) => {
      const newColors = [...value];
      newColors[index] = Math.min(255, Math.max(0, parseInt(newValue) || 0));
      onChange(newColors);
    };

    return (
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          {label} Color
        </label>
        <div className="flex space-x-2">
          {["R", "G", "B"].map((channel, index) => (
            <div key={channel} className="flex-1">
              <label className="block text-xs text-gray-600 mb-1">
                {channel}
              </label>
              <input
                type="number"
                value={value[index]}
                onChange={(e) => updateColor(index, e.target.value)}
                min="0"
                max="255"
                className="w-full px-2 py-1 border border-gray-300 text-black rounded-md text-center"
              />
            </div>
          ))}
          <div>
            <label className="block text-xs text-gray-600 mb-1">Preview</label>
            <div
              className="w-16 h-10 rounded-md border"
              style={{ backgroundColor: `rgb(${value.join(",")})` }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6">
          <h1 className="text-3xl font-bold text-white flex items-center">
            <Globe className="mr-3" /> Site Configuration
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Site Name Section */}
          <div className="space-y-2">
            <label className="text-lg font-semibold text-gray-800 flex items-center">
              <Globe className="mr-2 text-blue-600" /> Enter Site Name
            </label>
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              placeholder="My Awesome Site"
              className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              //   required
            />
          </div>

          {/* Metadata Section */}
          <div className="space-y-2">
            <label className="text-lg font-semibold text-gray-800 flex items-center">
              <Upload className="mr-2 text-green-600" /> Upload metadata image
              URL
            </label>
            <input
              type="url"
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
              placeholder="https://example.com/logo.png"
              className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50"
            />
          </div>

          {/* Theme Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center">
              <Palette className="mr-2 text-purple-600" /> Theme Colors
            </h2>
            <div className="space-y-4">
              <RGBColorInput
                label="Primary"
                value={colors.primary}
                onChange={(newColor) =>
                  setColors((prev) => ({ ...prev, primary: newColor }))
                }
              />
              <RGBColorInput
                label="Secondary"
                value={colors.secondary}
                onChange={(newColor) =>
                  setColors((prev) => ({ ...prev, secondary: newColor }))
                }
              />
              <RGBColorInput
                label="Action"
                value={colors.action}
                onChange={(newColor) =>
                  setColors((prev) => ({ ...prev, action: newColor }))
                }
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg hover:opacity-90 transition-all flex items-center justify-center space-x-2"
          >
            <span>Save Configuration</span>
            <ChevronRight />
          </button>
        </form>

        {/* Preview Section */}
        {previewConfig && (
          <div className="p-8 bg-gray-50 border-t">
            <h3 className="text-xl font-bold mb-4">Configuration Preview</h3>
            <div className="space-y-2">
              <p>
                <strong>Site Name:</strong> {previewConfig.name}
              </p>
              <p>
                <strong>Logo URL:</strong>{" "}
                {previewConfig.logoUrl || "No logo uploaded"}
              </p>
              <div className="flex space-x-4">
                {Object.entries(previewConfig.theme).map(([name, color]) => (
                  <div key={name} className="space-y-2">
                    <p>
                      <strong>
                        {name.charAt(0).toUpperCase() + name.slice(1)} Color:
                      </strong>
                    </p>
                    <div
                      className="w-16 h-8 rounded-md"
                      style={{ backgroundColor: `rgb(${color.join(",")})` }}
                    />
                    <p className="text-xs text-gray-600">
                      RGB: {color.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
