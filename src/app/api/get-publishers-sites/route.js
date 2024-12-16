import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
// GET request handler

async function readJsonFile(filePath) {
  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    // If file doesn't exist or is invalid, return an empty object
    console.warn(`Error reading file ${filePath}:`, error);
    return {};
  }
}
export async function GET() {
  try {
    // Define file paths
    const metadataPath = path.resolve("./Data/metaData.json");
    const videoConfigPath = path.resolve("./Data/videoconfig.json");
    const themeConfigPath = path.resolve("./Data/themeconfig.json");

    // Read all configuration files
    const metadata = await readJsonFile(metadataPath);
    const videoConfig = await readJsonFile(videoConfigPath);
    const themeConfig = await readJsonFile(themeConfigPath);

    // Prepare response object
    const response = {
      metadata,
      videoconfig: videoConfig,
      themeconfig: themeConfig,
    };

    // Return the configurations
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Configuration retrieval error:", error);

    // Handle server errors
    return NextResponse.json(
      { error: "Unable to retrieve configurations" },
      { status: 500 }
    );
  }
}
