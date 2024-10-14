import React from "react";
import SaveButton from "./save-button";
import PublishButton from "./publish-button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Header = ({ slug }: { slug: string }) => {
  return (
    <div className=" sticky top-0 gap-2 border-b dark:border-zinc-800 border-zinc-200 flex flex-wrap sm:flex-nowrap justify-between items-center w-full dark:bg-zinc-900 bg-zinc-100 p-2 min-h-10">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <div className="text-xl">🛠️</div>
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">All projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/projects/${slug}`}>{slug}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Editor</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex gap-2 justify-end w-full sm:w-min">
        <PublishButton slug={slug} />
        <SaveButton slug={slug} />
      </div>
    </div>
  );
};

export default Header;
