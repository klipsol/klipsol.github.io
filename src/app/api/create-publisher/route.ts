// app/api/posts/route.js
import fs from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

interface UpdateResponse {
  message: string;
  metadata?: Metadata;
  videoconfig?: VideoConfig;
  themeconfig?: ThemeConfig;
}

// Helper function to safely read JSON file
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

// Helper function to write JSON file safely
async function writeJsonFile(filePath, data) {
  try {
    // Ensure the directory exists
    await fs.mkdir(path.dirname(filePath), { recursive: true });

    // Write the file with proper formatting
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error);
    return false;
  }
}

// Deep merge function
function deepMerge(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] instanceof Object && !(source[key] instanceof Array)) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMerge(target[key], source[key]);
      } else if (source[key] instanceof Array) {
        Object.assign(target, { [key]: source[key] });
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return target;
}

// POST request handler
export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate incoming data
    if (!body.metadata && !body.videoconfig && !body.themeconfig) {
      return NextResponse.json(
        { error: "No configuration data provided" },
        { status: 400 }
      );
    }

    // Define file paths
    const metadataPath = path.resolve("./Data/metaData.json");
    const videoConfigPath = path.resolve("./Data/videoconfig.json");
    const themeConfigPath = path.resolve("./Data/themeconfig.json");

    // Prepare update results
    const updateResults:UpdateResponse = {
      message: "Configurations updated successfully",
    };

    // Update metadata if provided
    if (body.metadata) {
      const existingMetadata = await readJsonFile(metadataPath);
      const updatedMetadata = deepMerge(existingMetadata, body.metadata);
      await writeJsonFile(metadataPath, updatedMetadata);
      updateResults.metadata = updatedMetadata;
    }

    // Update video config if provided
    if (body.videoconfig) {
      const existingVideoConfig = await readJsonFile(videoConfigPath);
      const updatedVideoConfig = deepMerge(
        existingVideoConfig,
        body.videoconfig
      );
      await writeJsonFile(videoConfigPath, updatedVideoConfig);
      updateResults.videoconfig = updatedVideoConfig;
    }

    // Update theme config if provided
    if (body.themeconfig) {
      const existingThemeConfig = await readJsonFile(themeConfigPath);
      const updatedThemeConfig = deepMerge(
        existingThemeConfig,
        body.themeconfig
      );
      await writeJsonFile(themeConfigPath, updatedThemeConfig);
      updateResults.themeconfig = updatedThemeConfig;
    }

    // Prepare response with confirmation
    const response = {
      
      ...updateResults,
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error("Configuration update error:", error);

    // Handle different types of errors
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    // Generic server error
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
