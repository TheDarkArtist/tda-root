import { Post, Project } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import { deletePost } from "@/lib/actions/posts/delete-post";
import { useRouter } from "next/navigation";

const Settings = ({
  content,
  setContent,
}: {
  content: Project | Post;
  setContent: Dispatch<SetStateAction<Project | Post>>;
}) => {
  const router = useRouter();

  return (
    <main>
      <div className="h-full p-6 dark:bg-grid-sm-red-800 bg-grid-sm-gray-200 space-y-6 max-w-screen-lg mx-auto w-full">
        <section className="grid grid-rows-2 gap-4 h-min w-full border dark:border-zinc-800 border-gray-200 dark:bg-black bg-white rounded-md p-4 shadow">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-sky-600">Slug</h1>
            <p className="text-sm text-zinc-400">
              This is the url of your post on this websapp, you can custumize it
              to your liking
            </p>
          </div>
          <input
            className="dark:bg-black border dark:border-zinc-800 border-zinc-300 rounded-sm h-min px-4 py-2 placeholder:text-zinc-600"
            placeholder="create a meaningfull slug"
            defaultValue={content.slug}
            onChange={(e) => {
              setContent((prev) => ({
                ...prev,
                slug: e.target.value.split(" ").join("-").toLowerCase(),
              }));
            }}
            type="text"
          />
        </section>

        <section className="grid grid-rows-2 gap-4 w-full border dark:border-zinc-800 border-gray-200 dark:bg-black bg-white rounded-md p-4 shadow">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-sky-600">Font</h1>
            <p className="text-sm text-zinc-400">
              You can change your post fonts here
            </p>
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a font" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </section>

        <section className="grid grid-rows-2 gap-4 w-full border dark:border-zinc-800 border-gray-200 dark:bg-black bg-white rounded-md p-4 shadow">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-red-600">Delete post</h1>
            <p className="text-sm text-zinc-400">
              Caution! This action is irreversable
            </p>
          </div>
          <Dialog>
            <DialogTrigger className="text-left">
              <Button variant="destructive">Delete</Button>
            </DialogTrigger>
            <DialogContent className="space-y-4">
              <DialogHeader className="space-y-2">
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your post and remove your post data from my server.
                </DialogDescription>
              </DialogHeader>
              <form
                className="flex gap-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  await deletePost(content.id);
                  router.replace("/posts");
                  router.refresh();
                }}
              >
                <Button type="button" variant="secondary" className="w-full">
                  Cancle
                </Button>
                <Button
                  type="submit"
                  variant={"destructive"}
                  className="w-full"
                >
                  Delete
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </section>
      </div>
    </main>
  );
};

export default Settings;
