import React from "react";
import SaveButton from "./save-button";
import PublishButton from "./publish-button";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

const Header = ({ type, slug }: { type: "project" | "post"; slug: string }) => {
  return (
    <div className=" sticky top-0 gap-2 border-b dark:border-zinc-800 border-zinc-200 flex flex-wrap sm:flex-nowrap justify-between items-center w-full dark:bg-zinc-900 bg-zinc-100 p-2 min-h-10 sm:max-h-10">
      <div className="flex items-center sm:text-sm gap-1 text-xs flex-wrap">
        <div className="text-sm pr-2">🛠️</div>
        <Link className="opacity-80 hover:opacity-100" href={`/${type}s`}>{`All ${type}s`}</Link>
        <LuChevronRight />
        <Link className="opacity-80 hover:opacity-100" href={`/${type}s/${slug}`}>
          {slug}
        </Link>
        <LuChevronRight />
        <div>Editor</div>
      </div>
      <div className="flex gap-2 justify-end w-full sm:w-min">
        <PublishButton />
        <SaveButton type={type} slug={slug} />
      </div>
    </div>
  );
};

export default Header;
