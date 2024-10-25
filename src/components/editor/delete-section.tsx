"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useEditorDataContext } from "@/providers/editor-data-provider";
import DeleteButton from "../utils/buttons/delete-button";

const DeleteSection = ({ type }: { type: "project" | "post" }) => {
  const { data } = useEditorDataContext();

  return (
    <div className="border dark:border-red-800 border-zinc-200 space-y-4 h-min dark:bg-zinc-950 bg-zinc-100 p-4 rounded-sm">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-red-600">🗑️ Delete Post</h2>
        <p className="">
          Deleting this post is a permanent action and cannot be undone. Once
          you confirm, all associated data will be removed and you will not be
          able to recover any information. Please proceed with caution.
        </p>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete</Button>
        </DialogTrigger>
        <DialogContent className="space-y-2">
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your post
            and remove your post data from my server.
          </DialogDescription>
          <div className="flex gap-4">
            <DialogClose className="w-full">
              <Button className="w-full">Cancle</Button>
            </DialogClose>
            <div className="w-full">
              <DeleteButton
                className="w-full"
                route={type === "project" ? "/projects" : "/posts"}
                id={data?.id as string}
                type={type}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteSection;
