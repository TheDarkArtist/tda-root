"use client";

import React from "react";
import TagsSection from "../tags-section";
import GithubRepoSection from "../github-repo-section";
import LivePreviewSection from "../live-preview-section";
import Note from "@/components/utils/note";

const MetaPage = ({ type }: { type: "project" | "post" }) => {
  return (
    <div className="h-full space-y-4 p-4 overflow-y-scroll mr-auto max-w-screen-lg">
      <Note
        title="Save your post"
        description="Your post will only get saved when you press the save button, don't forget to save it"
      />
      <TagsSection />
      {type === "project" && (
        <>
          <GithubRepoSection />
          <LivePreviewSection />
        </>
      )}
    </div>
  );
};

export default MetaPage;
