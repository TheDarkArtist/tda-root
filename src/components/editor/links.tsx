import { Post, Project } from "@prisma/client";
import React, { Dispatch, SetStateAction } from "react";

interface LinksProps {
  content: Project | Post;
  setContent: Dispatch<SetStateAction<Project | Post>>;
}

const Links: React.FC<LinksProps> = ({ content, setContent }) => {
  return (
    <div className="h-full p-6 dark:bg-grid-sm-red-800 bg-grid-sm-gray-200 space-y-6">
      <section className="grid grid-rows-2 gap-4 h-min w-full border dark:border-zinc-800 border-gray-200 dark:bg-black bg-white rounded-md p-4 shadow">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-sky-600">
            GitHub Repository Link
          </h1>
          <p className="text-sm text-zinc-400">
            Source code link, it could very well be, gitlab or bitbucket, drive
            etc.
          </p>
        </div>
        <input
          className="dark:bg-black border dark:border-zinc-800 border-zinc-300 rounded-sm h-min px-4 py-2 placeholder:text-zinc-600"
          placeholder="Repo link"
          defaultValue={(content as Project).repo as string}
          onChange={(e) => {
            setContent((prev) => ({
              ...prev,
              repo: e.target.value,
            }));
          }}
          type="text"
        />
      </section>

      <section className="grid grid-rows-2 gap-4 h-min w-full border dark:border-zinc-800 border-gray-200 dark:bg-black bg-white rounded-md p-4 shadow">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-sky-600">Preview Links</h1>
          <p className="text-sm text-zinc-400">
            External link where your app is hosted
          </p>
        </div>
        <input
          className="dark:bg-black border dark:border-zinc-800 border-zinc-300 rounded-sm h-min px-4 py-2 placeholder:text-zinc-600"
          placeholder="External link"
          defaultValue={(content as Project).link as string}
          onChange={(e) => {
            setContent((prev) => ({
              ...prev,
              link: e.target.value,
            }));
          }}
          type="text"
        />
      </section>
    </div>
  );
};

export default Links;
