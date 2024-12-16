import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import os from "os";

function getTempFilePath(filename) {
  return path.join(os.tmpdir(), filename);
}
const tempMetaData = getTempFilePath("metaData.json");
const tempVideoconfig = getTempFilePath("videoconfig.json");
const tempThemeconfig = getTempFilePath("themeconfig.json");

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
export async function GET(request) {
  try {
    // Define file paths
    const { searchParams } = request.nextUrl;
    const publisher = searchParams.get("publisher");
    const configName = searchParams.get("configName");

    let metadataPath;
    let videoConfigPath;
    let themeConfigPath;
    const temp = await readJsonFile(tempMetaData);
    if (Object.keys(temp).length > 0) {
      metadataPath = tempMetaData;
      videoConfigPath = tempVideoconfig;
      themeConfigPath = tempThemeconfig;
    } else {
      metadataPath = path.resolve("./Data/metaData.json");
      videoConfigPath = path.resolve("./Data/videoconfig.json");
      themeConfigPath = path.resolve("./Data/themeconfig.json");
    }

    const metadata = await readJsonFile(metadataPath);
    const videoConfig = await readJsonFile(videoConfigPath);
    const themeConfig = await readJsonFile(themeConfigPath);

    let response = {};
    if (publisher) {
      response = {
        metadata: metadata[publisher],
        videoconfig: videoConfig[publisher],
        themeconfig: themeConfig[publisher],
      };
    } else {
      response = {
        metadata,
        videoconfig: videoConfig,
        themeconfig: themeConfig,
      };
    }

    // Return the configurations
    return NextResponse.json(configName ? response[configName] : response, {
      status: 200,
    });
  } catch (error) {
    console.error("Configuration retrieval error:", error);

    // Handle server errors
    return NextResponse.json(
      { error: "Unable to retrieve configurations" },
      { status: 500 }
    );
  }
}
