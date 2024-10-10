import Tags from "@/components/projects/card/tags";
import { getProjectBySlug } from "@/lib/actions/projects/get-project";
import { getViews } from "@/lib/actions/projects/get-views";
import { Project } from "@prisma/client";
import React from "react";

const RightSidebar = async ({ id }: { id: string }) => {
  const content = await getProjectBySlug(id);
  const views = await getViews(content?.id as string);
  return (
    <div className="sticky top-12 pt-1 space-y-2">
      <div className="overflow-y-scroll">
        <section className="border dark:border-zinc-900 border-zinc-200 dark:bg-black bg-white rounded-sm p-2 m-2 text-xs">
          <h4>Last updated At</h4>
          <p>
            {content?.updatedAt.toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            {content?.updatedAt
              .toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              })
              .replace("am", "AM")
              .replace("pm", "PM")}
          </p>
          <hr className="dark:border-zinc-800 border-zinc-300 mt-3 mb-2" />
          <h4>Created At</h4>
          <p>
            {content?.createdAt.toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            {content?.createdAt
              .toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              })
              .replace("am", "AM")
              .replace("pm", "PM")}
          </p>
        </section>

        <div className="flex justify-evenly border dark:border-zinc-900 border-zinc-200 dark:bg-black bg-white p-2 m-2 gap-4 sm:text-xs overflow-hidden">
          <section className="text-center">
            <h3>views</h3>
            <p>{views}</p>
          </section>
          <section className="text-center">
            <h3>upvotes</h3>
            <p>0</p>
          </section>
          <section className="text-center">
            <h3>comments</h3>
            <p>0</p>
          </section>
        </div>

        <section className="border dark:border-zinc-900 border-zinc-200 dark:bg-black bg-white rounded-sm p-2 m-2 text-sm">
          <h3 className="indent-2 font-bold">Tags</h3>
          <Tags tags={content?.tags as string[]} limit={100} />
        </section>
      </div>
    </div>
  );
};

export default RightSidebar;
