import { auth } from "@/lib/auth";
import MarkdownRenderer from "@/utils/markdown-provider";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

const Initial = async () => {
  const session = await auth();

  if (!session) return notFound();

  const filePath = path.join(process.cwd(), "src/data/md/initial.md");

  let markdownContent = "";
  try {
    markdownContent = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.error("Error reading markdown file:", error);
  }

  return (
    <div className="mr-auto max-w-screen-lg overflow-y-auto h-full">
      <div className="grid grid-cols-1 p-2 md:p-6 w-full mx-auto max-w-screen-md">
        <MarkdownRenderer content={markdownContent} />
      </div>
    </div>
  );
};

export default Initial;
