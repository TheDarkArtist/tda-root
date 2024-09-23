import React, { Dispatch, SetStateAction } from "react";
import Preview from "./preview";
import Body from "./body";
import { Post, Project } from "@prisma/client";

const Edit = ({
  content,
  setContent,
}: {
  content: Project | Post;
  setContent: Dispatch<SetStateAction<Project | Post>>;
}) => {
  return (
    <div className="grid grid-cols-2 h-full overflow-y-auto">
      <Body content={content} setContent={setContent} />
      <Preview content={content.body} />
    </div>
  );
};

export default Edit;
