import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest, res: NextResponse) => {
  const { headers } = req;

  const clientIP =
    headers.get("x-forwarded-for")?.split(",")[0] ||
    headers.get("remoteAddress") ||
    "IP not found";

  return NextResponse.json({ ip: clientIP });
};
