// app/api/posts/route.js
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

// Helper function to safely read JSON file
async function readJsonFile(filePath) {
  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
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

    // Prepare update results
    const updateResults = {};

    // Update metadata if provided
    if (body.metadata) {
      const existingMetadata = await readJsonFile(metadataPath);
      const updatedMetadata = deepMerge(existingMetadata, body.metadata);
      console.log(">>>>>>>>>>>>>>> file path >>>>>>>>>>>>>>>>>>", tempMetaData);
      await writeJsonFile(tempMetaData, updatedMetadata);
      updateResults.metadata = updatedMetadata;
    }

    // Update video config if provided
    if (body.videoconfig) {
      const existingVideoConfig = await readJsonFile(videoConfigPath);
      const updatedVideoConfig = deepMerge(
        existingVideoConfig,
        body.videoconfig
      );
      await writeJsonFile(tempVideoconfig, updatedVideoConfig);
      updateResults.videoconfig = updatedVideoConfig;
    }

    // Update theme config if provided
    if (body.themeconfig) {
      const existingThemeConfig = await readJsonFile(themeConfigPath);
      const updatedThemeConfig = deepMerge(
        existingThemeConfig,
        body.themeconfig
      );
      await writeJsonFile(tempThemeconfig, updatedThemeConfig);
      updateResults.themeconfig = updatedThemeConfig;
    }

    // Prepare response with confirmation
    const response = {
      message: "Configurations updated successfully",
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

// import fs from "fs/promises";
// import path from "path";
// import os from "os";
// import { NextResponse } from "next/server";

// // Utility function to get a file path in the system's temp directory
// function getTempFilePath(filename) {
//   return path.join(os.tmpdir(), filename);
// }

// // Async function to read JSON file with error handling
// async function readJsonFile(filePath) {
//   try {
//     const fileContents = await fs.readFile(filePath, "utf8");
//     return JSON.parse(fileContents);
//   } catch (error) {
//     // If file doesn't exist or is invalid, return an empty object
//     console.warn(`Error reading file ${filePath}:`, error);
//     return {};
//   }
// }

// // Async function to write JSON file
// async function writeJsonFile(filePath, data) {
//   try {
//     await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
//     console.log(`Successfully wrote file: ${filePath}`);
//   } catch (error) {
//     console.error(`Error writing file ${filePath}:`, error);
//     throw error;
//   }
// }

// export async function GET() {
//   try {
//     // Define file paths in the system's temp directory
//     const metadataPath = getTempFilePath("metaData.json");
//     const videoConfigPath = getTempFilePath("videoconfig.json");
//     const themeConfigPath = getTempFilePath("themeconfig.json");

//     // Read all configuration files
//     const metadata = await readJsonFile(metadataPath);
//     const videoConfig = await readJsonFile(videoConfigPath);
//     const themeConfig = await readJsonFile(themeConfigPath);

//     // Prepare response object
//     const response = {
//       metadata,
//       videoconfig: videoConfig,
//       themeconfig: themeConfig,
//     };

//     // Return the configurations
//     return NextResponse.json(response, { status: 200 });
//   } catch (error) {
//     console.error("Configuration retrieval error:", error);

//     // Handle server errors
//     return NextResponse.json(
//       { error: "Unable to retrieve configurations" },
//       { status: 500 }
//     );
//   }
// }

// // Optional: Export a POST method for updating configurations
// export async function POST(request) {
//   try {
//     // Parse the incoming JSON data
//     const data = await request.json();

//     // Write files to temp directory
//     if (data.metadata) {
//       await writeJsonFile(getTempFilePath("metaData.json"), data.metadata);
//     }

//     if (data.videoconfig) {
//       await writeJsonFile(
//         getTempFilePath("videoconfig.json"),
//         data.videoconfig
//       );
//     }

//     if (data.themeconfig) {
//       await writeJsonFile(
//         getTempFilePath("themeconfig.json"),
//         data.themeconfig
//       );
//     }

//     return NextResponse.json(
//       { message: "Configurations updated successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Configuration update error:", error);
//     return NextResponse.json(
//       { error: "Unable to update configurations" },
//       { status: 500 }
//     );
//   }
// }
