import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const GET = (
  request: NextRequest,
  { params }: { params: { testId: string } },
) => {
  const publicDict = path.join(process.cwd());

  console.log(publicDict);

  return NextResponse.json({
    testId: params.testId,
  });
};
