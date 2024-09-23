"use client";

import React, { useEffect, useState } from "react";
import Header from "./header";
import Sidenav from "./sidenav";
import { Post, Project } from "@prisma/client";
import Footer from "./footer";
import Main from "./main";
import { useSearchParams } from "next/navigation";
import { deletePost } from "@/lib/actions/posts/delete-post";
import { deleteProject } from "@/lib/actions/projects/delete-project";

interface EditorProps {
  data: Project | Post;
  type: "Project" | "Post";
}

const Editor: React.FC<EditorProps> = ({ data, type }) => {
  const [content, setContent] = useState(data);
  const [activeTab, setActiveTab] = useState("Edit");
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  // useEffect(() => {
  //   const handleCleanup = async () => {
  //     if (content.body.trim().length < 1) {
  //       if (type === "Project") {
  //         await deleteProject(content.id);
  //       } else if (type === "Post") {
  //         await deletePost(content.id);
  //       }
  //     }
  //   };

  //   return () => {
  //     handleCleanup();
  //   };
  // }, [content, type]);

  const onTabClick = (tab: string) => {
    params.set("tab", tab);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div className="flex h-full overflow-hidden">
      <aside className="sticky top-0 w-52">
        <Sidenav type={type} onTabClick={onTabClick} />
      </aside>
      <div className="flex flex-col w-full">
        <Header content={content} setContent={setContent} type={type} />
        <Main
          content={content}
          setContent={setContent}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Footer content={content.body} />
      </div>
    </div>
  );
};

export default Editor;
