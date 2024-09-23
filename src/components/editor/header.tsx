import React, { Dispatch, SetStateAction } from "react";
import { Project, Post } from "@prisma/client";
import { cn } from "@/lib/utils";
import PublishButton from "./publish-button";
import SaveButton from "./save-button";
import BackButton from "./back-button";

const Header = ({
  content,
  setContent,
  type,
}: {
  content: Project | Post;
  setContent: Dispatch<SetStateAction<Project | Post>>;
  type: "Project" | "Post";
}) => {
  return (
    <header
      className={cn(
        `flex bg-gradient-to-b border-y border-gray-300 sticky top-0 items-center justify-between px-4 py-2 from-gray-100 via-gray-50 to-gray-100 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 dark:border-zinc-800`
      )}
    >
      <section>
        <h1>✨TDAEditor</h1>
      </section>
      <section className="flex gap-4">
        <PublishButton content={content} setContent={setContent} type={type} />
        <SaveButton content={content} type={type} />
        <BackButton type={type} content={content} />
      </section>
    </header>
  );
};

export default Header;
