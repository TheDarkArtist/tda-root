import Tags from "@/components/projects/card/tags";
import AvgReadingTime from "@/components/utils/avg-read-time";
import { getComments } from "@/lib/actions/projects/get-comments";
import { getProjectBySlug } from "@/lib/actions/projects/get-project";
import { getViews } from "@/lib/actions/projects/get-views";
import React from "react";

const RightSidebar = async ({ id }: { id: string }) => {
  const content = await getProjectBySlug(id);
  const comments = await getComments(id);
  const views = await getViews(content?.id as string);
  return (
    <div className="sticky top-12 ml-2 space-y-2">
      <div className="overflow-y-auto">
        <section className="border dark:border-zinc-800 border-zinc-200 dark:bg-black bg-white rounded-sm p-2 m-2 text-xs">
          <h2>Avg. Reading Time</h2>
          <p>
            <AvgReadingTime content={content?.body as string} />
          </p>
        </section>
        <section className="border dark:border-zinc-800 border-zinc-200 dark:bg-black bg-white rounded-sm p-2 m-2 text-xs">
          <h4>Last updated At</h4>
          <p>
            <strong>
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
            </strong>
          </p>
          <hr className="dark:border-zinc-800 border-zinc-300 mt-3 mb-2" />
          <h4>Created At</h4>
          <p>
            <strong>
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
            </strong>
          </p>
        </section>

        <div className="flex flex-wrap justify-evenly border dark:border-zinc-800 border-zinc-200 dark:bg-black bg-white p-2 m-2 gap-4 sm:text-xs overflow-hidden">
          <section className="text-center">
            <h3>views</h3>
            <p className="text-sm">
              <strong>{views}</strong>
            </p>
          </section>
          <section className="text-center">
            <h3>upvotes</h3>
            <p className="text-sm">
              <strong>0</strong>
            </p>
          </section>
          <section className="text-center">
            <h3>comments</h3>
            <p className="text-sm">
              <strong>{comments?.length}</strong>
            </p>
          </section>
        </div>

        <section className="border dark:border-zinc-800 border-zinc-200 dark:bg-black bg-white rounded-sm p-2 m-2 text-sm">
          <h3 className="indent-2 font-bold">Tags</h3>
          <Tags tags={content?.tags as string[]} limit={100} />
        </section>
      </div>
    </div>
  );
};

export default RightSidebar;
