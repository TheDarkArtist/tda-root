import { currentUser } from "@/lib/actions/utils/auth";
import { db } from "@/lib/db";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  resumeUploader: f({
    pdf: { maxFileSize: "8MB", maxFileCount: 1 },
  })
    .middleware(async () => {
      const self = await currentUser();

      return { user: self };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log({ metadata });
      await db.user.update({
        where: {
          id: metadata.user?.id,
        },
        data: {
          resumeUrl: file.url,
        },
      });

      return { fileUrl: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
