import ProjectCreateButton from "@/components/projects/project-create-button";
import ProjectsList from "@/components/projects/projects-list";
import Search from "@/components/utils/search";
import { cn } from "@/lib/utils";
import React, { Suspense } from "react";

const ProjectsPage = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <main className="p-4 lg:px-0">
      <div
        className={cn(
          "invert top-0 dark:invert-0 bg-fixed",
          "fixed w-full bg-cover right-0 h-full bg-center -z-50"
        )}
        style={{
          backgroundImage: "url('/bg/projects-bg.jpg')",
        }}
      />
      <div
        className={cn(
          "absolute w-full h-full top-0 -z-40 ",
          "dark:bg-gradient-to-r bg-gradient-to-r",
          "dark:from-black/80 from-white/80",
          "dark:via-black/70 via-white/70",
          "dark:to-black/60 to-white/40"
        )}
      />
      <div className="max-w-screen-lg mx-auto w-full">
        <section className="space-y-6">
          <h1 className="text-4xl text-sky-600 font-black mt-6">Projects</h1>
          <p>
            This is my personal space where I showcase my self-developed
            projects and blog about my private coding adventures. It’s updated
            when I feel like posting bigger news to the world, for more frequent
            and smaller updates, follow me on Instagram or X. All of my public
            source are available over at my github repository.
          </p>
        </section>

        <section className="flex gap-4 items-center">
          <Search placeholder="Search Projects..." className="my-10" />
          <ProjectCreateButton />
        </section>

        <Suspense fallback={<div>Searching....</div>}>
          <ProjectsList query={query} currentPage={currentPage} />
        </Suspense>
      </div>
    </main>
  );
};

export default ProjectsPage;
