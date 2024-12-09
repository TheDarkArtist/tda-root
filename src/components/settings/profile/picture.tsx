"use client";

import { updateUserById } from "@/lib/actions/users/update-user";
import { currentUser } from "@/lib/actions/utils/auth";
import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";

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
    <div className="shadow">
      <div className="flex items-center gap-6 border dark:bg-zinc-950 border-gray-300 dark:border-zinc-700 p-4 rounded-t-sm">
        {previewUrl ? (
          <Image
            src={previewUrl ? previewUrl : ""}
            alt="Preview"
            className="h-40 w-40 rounded-full border-4 border-sky-400 dark:border-red-800 object-cover"
            height={400}
            width={400}
          />
        ) : (
          <div className="flex justify-center items-center size-40 rounded-full border-4 border-dashed border-sky-400 dark:border-red-800 object-cover">
            <FaUpload className="text-sky-400 dark:text-red-800 size-10" />
          </div>
        )}
        <div className="flex flex-col items-start space-y-4 h-40">
          <h1 className="text-2xl font-semibold text-gray-400">
            Upload Your Avatar
          </h1>
          <label
            className={[
              "cursor-pointer rounded-sm px-4 py-1 shadow",
              "border border-gray-300 dark:border-zinc-600 dark:text-zinc-400 text-sm",
              "dark:bg-zinc-900 bg-gray-100 hover:bg-gray-200 dark:hover:bg-zinc-800",
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
      <div className="h-min border-x border-b text-sm dark:bg-zinc-950 border-gray-300 dark:border-zinc-700 p-2 rounded-b-sm">
        <div className="font-semibold">
          Your profile picture public URL{" "}
          <span className="font-light">(It&apos;s not your profile URL)</span>
        </div>
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
