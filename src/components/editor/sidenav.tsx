import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import React from "react";

const Sidenav = ({
  onTabClick,
  type,
}: {
  onTabClick: (tab: string) => void;
  type: "Project" | "Post";
}) => {
  const tabs = [
    "Edit",
    "Cover",
    "Tags",
    ...(type === "Project" ? ["Links"] : []),
    "Settings",
    "Help",
  ];

  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab");

  return (
    <section className="h-full border-r border-t border-gray-300 dark:border-zinc-900 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-200 dark:from-zinc-950 dark:via-zinc-950 dark:to-black cursor-pointer">
      <h2 className="p-2 border-b-2 dark:border-zinc-900 font-bold">Menu</h2>
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={cn(
              "relative",
              activeTab === tab && "border-l-4 bg-sky-800/20",
              "border-sky-600 p-2"
            )}
            onClick={() => onTabClick(tab)}
          >
            {tab}
            <span
              className={cn(
                "hidden",
                activeTab === tab && "block",
                "absolute w-0 h-0 right-0 bottom-1/4",
                "border-t-[10px] border-b-[10px] border-r-[14px]",
                "border-t-transparent border-b-transparent border-r-zinc-950"
              )}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidenav;
