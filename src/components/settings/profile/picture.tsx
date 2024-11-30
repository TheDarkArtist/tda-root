"use client";

import { updateUserById } from "@/lib/actions/users/update-user";
import { currentUser } from "@/lib/actions/utils/auth";
import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function AvatarUploadPage() {
  const [previewUrl, setPreviewUrl] = useState<string | null>();
  const [uploadUrl, setUploadUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const { data } = useSession();

  useEffect(() => {
    setPreviewUrl(data?.user.image);
  }, [data?.user.image]);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const user = await currentUser();

    if (!user) {
      return notFound();
    }

    if (!event.target.files || event.target.files.length === 0) {
      throw new Error("No file selected");
    }

    const file = event.target.files[0];
    const filePreview = URL.createObjectURL(file);
    setPreviewUrl(filePreview);

    setIsUploading(true);

    try {
      const response = await fetch(
        `/api/avatar/upload?filename=${encodeURIComponent(file.name)}`,
        {
          method: "POST",
          body: file,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload avatar");
      }

      const data = await response.json();

      updateUserById(user?.id as string, { image: data.url } as User);

      setUploadUrl(data.url);
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
      URL.revokeObjectURL(filePreview);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-6 border bg-zinc-950 border-zinc-700 p-4 rounded-t-sm">
        <Image
          src={previewUrl ? previewUrl : ""}
          alt="Preview"
          className="h-40 w-40 rounded-full border-4 border-red-800 object-cover"
          height={400}
          width={400}
        />
        <div className="flex flex-col items-start space-y-4 h-40 w-full">
          <h1 className="text-2xl font-semibold text-gray-400">
            Upload Your Avatar
          </h1>
          <label
            className={[
              "cursor-pointer rounded-sm px-4 py-1 shadow-md",
              "border border-zinc-600 text-zinc-400 text-sm",
              "bg-zinc-900 hover:bg-zinc-800",
            ].join(" ")}
          >
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            Choose Picture
          </label>
          {isUploading && <p className="text-blue-500">Uploading...</p>}
          {uploadUrl && (
            <div className="text-center">
              <p className="text-zinc-400">Avatar uploaded successfully!</p>
              <a
                href={uploadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Uploaded Avatar
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="h-min border-x border-b text-sm bg-zinc-950 border-zinc-700 p-2 rounded-b-sm">
        <div className="font-semibold ">Profile Picture Public URL</div>
        {previewUrl && (
          <Link
            className="hover:text-blue-400 text-blue-500"
            href={previewUrl || ""}
          >
            {previewUrl}
          </Link>
        )}
      </div>
    </div>
  );
}
