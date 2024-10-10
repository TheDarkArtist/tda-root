import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

interface FolderStructure {
  [key: string]: string | FolderStructure;
}

async function buildFolderStructure(
  directory: string,
): Promise<FolderStructure> {
  const contents = await fs.readdir(directory, { withFileTypes: true });

  let structure: FolderStructure = {};

  for (const item of contents) {
    const itemPath = path.join(directory, item.name);

    if (item.isDirectory()) {
      structure[item.name] = await buildFolderStructure(itemPath);
    } else if (item.isFile()) {
      structure[item.name] =
        `${process.env.NEXT_PUBLIC_BASE_URL}/${path.relative(path.join(process.cwd(), "public"), itemPath)}`;
    }
  }

  return structure;
}

export const GET = async (request: NextRequest) => {
  try {
    const publicDir = path.join(process.cwd(), "public");
    const files = await buildFolderStructure(publicDir);

    return NextResponse.json(files);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to retrieve files" },
      { status: 500 },
    );
  }
};
