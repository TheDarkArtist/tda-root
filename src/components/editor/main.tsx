import React, { Dispatch, SetStateAction, useEffect } from "react";
import Edit from "./edit";
import Help from "./help";
import Settings from "./settings";
import Tags from "./tags";
import { Post, Project } from "@prisma/client";
import { notFound, useSearchParams } from "next/navigation";
import Cover from "./cover";
import Links from "./links";

interface MainProps {
  content: Project | Post;
  setContent: Dispatch<SetStateAction<Project | Post>>;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const Main: React.FC<MainProps> = ({
  content,
  setContent,
  activeTab,
  setActiveTab,
}) => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const tabsMap: Record<
    string,
    React.FC<{
      content: Project | Post;
      setContent: Dispatch<SetStateAction<Project | Post>>;
    }>
  > = {
    Edit,
    Cover,
    Tags,
    Links,
    Settings,
    Help,
  };

  useEffect(() => {
    if (!tab) {
      notFound();
    } else {
      setActiveTab(tab);
    }
  }, [tab, setActiveTab]);

  const ActiveTab = tabsMap[activeTab];

  if (!ActiveTab) return null;

  return (
    <section className="h-full">
      {<ActiveTab content={content} setContent={setContent} />}
    </section>
  );
};

export default Main;
