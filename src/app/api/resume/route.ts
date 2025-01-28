import { getUserByEmail } from "@/lib/actions/users/get-user";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const tdaEmail = "sparrow.kushagra@gmail.com";

  try {
    const tda = await getUserByEmail(tdaEmail);
    const tdaResumeUrl = tda?.resumeUrl;

    if (!tda || !tdaResumeUrl) {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 });
    }

    const response = await fetch(tdaResumeUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch resume file");
    }
    const fileContent = await response.arrayBuffer();

    const headers = new Headers({
      "Content-Type":
        response.headers.get("Content-Type") || "application/octet-stream",
      "Content-Disposition": `attachment; filename="tda-resume.pdf"`,
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    });

    return new NextResponse(fileContent, {
      status: 200,
      headers,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};
