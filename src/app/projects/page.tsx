import ProjectsList from "@/components/projects/projects-list";
import Search from "@/components/utils/search";
import { cn } from "@/lib/utils";
import { os } from "@/utils/fonts";
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
    <main className="px-4 lg:px-0">
      <div className="max-w-screen-lg mx-auto w-full">
        <section className="space-y-6">
          <h1
            className={cn(
              "mt-6 text-4xl font-black text-green-600",
              os.className
            )}
          >
            Projects
          </h1>
          <p>
            This is my personal space where I showcase my self-developed
            projects and blog about my private coding adventures. It’s updated
            when I feel like posting bigger news to the world, for more frequent
            and smaller updates, follow me on Instagram or X. All of my public
            source are available over at my github repository.
          </p>
        </section>

        <Search placeholder="Search Projects..." className="my-10" />

        <Suspense fallback={<div>Searching....</div>}>
          <ProjectsList query={query} currentPage={currentPage} />
        </Suspense>
      </div>
    </main>
  );
};

export default ProjectsPage;
