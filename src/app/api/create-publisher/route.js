// app/api/posts/route.js
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

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

// POST request handler
export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate incoming data
    if (!body.metadata || !body.videoconfig || !body.themeconfig) {
      return NextResponse.json(
        { error: "Missing required configuration data" },
        { status: 400 }
      );
    }

    const metadataPath = path.resolve("./app/Data/metaData.json");
    const videoConfigPath = path.resolve("./app/Data/videoconfig.json");
    const themeConfigPath = path.resolve("./app/Data/themeconfig.json");

    // Write each configuration file
    const metadataWrite = await writeJsonFile(metadataPath, body.metadata);
    const videoConfigWrite = await writeJsonFile(
      videoConfigPath,
      body.videoconfig
    );
    const themeConfigWrite = await writeJsonFile(
      themeConfigPath,
      body.themeconfig
    );

    if (!metadataWrite || !videoConfigWrite || !themeConfigWrite) {
      return NextResponse.json(
        { error: "Failed to write one or more configuration files" },
        { status: 500 }
      );
    }

    // Prepare response with confirmation
    const response = {
      message: "Configurations updated successfully",
      metadata: body.metadata,
      videoconfig: body.videoconfig,
      themeconfig: body.themeconfig,
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
