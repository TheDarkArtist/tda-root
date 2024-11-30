import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");

  console.log(filename);

  if (!filename) {
    return NextResponse.json(
      { error: "Filename is required." },
      { status: 400 },
    );
  }

  const uniqueFilename = `${uuidv4()}.${filename.split(".").pop()}`;

  const bodyStream = request.body;

  if (!bodyStream) {
    return NextResponse.json(
      { error: "Request body is empty." },
      { status: 400 },
    );
  }

  const blob = await put(uniqueFilename, bodyStream, {
    access: "public",
  });

  return NextResponse.json(blob);
}
