"use client";

import { Post, Project } from "@prisma/client";
import React, { useState } from "react";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import { EditorDataContextProvider } from "@/providers/editor-data-provider";
import { useParams } from "next/navigation";
import Footer from "./footer/footer";

interface EditorProps {
  response: Project | Post | null;
  children: React.ReactNode;
  type: "project" | "post";
}

const Editor: React.FC<EditorProps> = ({ type, response, children }) => {
  const [data, setData] = useState<Project | Post | null>(response);
  const params = useParams();

  const slug =
    type === "project" ? params.projectId ?? "" : params.postId ?? "";

  return (
    <EditorDataContextProvider value={{ data, setData }}>
      <div className="flex max-h-screen h-full pt-12 overflow-hidden">
        <aside className="">
          <Sidebar slug={slug as string} />
        </aside>
        <div className="flex flex-col w-full h-full">
          <header className="sticky top-0 z-10">
            <Header slug={slug as string} />
          </header>
          <main className="flex-grow overflow-hidden dark:bg-zinc-950 bg-white">
            {children}
          </main>
          <footer className="sticky bottom-0 z-10">
            <Footer />
          </footer>
        </div>
      </div>
    </EditorDataContextProvider>
  );
};

export default Editor;
