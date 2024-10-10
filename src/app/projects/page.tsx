import Footer from "@/components/footer/footer";
import ProjectsList from "@/components/projects/projects-list";
import CreateButton from "@/components/utils/buttons/create-button";
import Search from "@/components/utils/search";
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
    <main className="h-full flex flex-col justify-between">
      <div className="px-4 lg:px-0 mt-16 pb-4">
        <div className="max-w-screen-lg mx-auto w-full">
          <section className="space-y-6">
            <h1 className="text-4xl text-sky-600 font-black">Projects</h1>
            <p>
              This is my personal space where I showcase my self-developed
              projects and blog about my private coding adventures. It’s updated
              when I feel like posting bigger news to the world, for more
              frequent and smaller updates, follow me on Instagram or X. All of
              my public source are available over at my github repository.
            </p>
          </section>

          <section className="flex gap-4 items-center">
            <Search placeholder="Search Projects..." className="my-10" />
            <CreateButton type="project" />
          </section>

          <Suspense fallback={<div>Searching....</div>}>
            <ProjectsList query={query} currentPage={currentPage} />
          </Suspense>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProjectsPage;
