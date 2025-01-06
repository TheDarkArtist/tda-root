import { currentUser } from "@/lib/actions/utils/auth";
import { db } from "@/lib/db";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  resumeUploader: f({
    pdf: { maxFileSize: "8MB", maxFileCount: 1 },
  })
    .middleware(async () => {
      try {
        const self = await currentUser();
        if (!self) {
          throw new Error("User not authenticated");
        }
        return { user: self };
      } catch (error) {
        console.error("Error in middleware:", error);
        throw error;
      }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      try {
        console.log("Upload complete. Metadata:", metadata);
        await db.user.update({
          where: {
            id: metadata.user?.id,
          },
          data: {
            resumeUrl: file.url,
          },
        });
        console.log("Database updated with file URL:", file.url);
        return { fileUrl: file.url };
      } catch (error) {
        console.error("Error in onUploadComplete:", error);
        throw error;
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
