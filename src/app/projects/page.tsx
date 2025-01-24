import Footer from "@/components/footer/footer";
import ProjectsList from "@/components/projects/projects-list";
import CreateButton from "@/components/utils/buttons/create-button";
import Loader from "@/components/utils/loader";
import Search from "@/components/utils/search";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Showcasing a collection of projects I've built, complete with code walkthroughs, insights, and learnings from each endeavor.",
  keywords: [
    "Kushagra Sharma projects",
    "Software projects",
    "Code walkthrough",
    "Programming insights",
    "Web development projects",
    "Software engineering",
    "Tech portfolio",
    "Project explanations",
    "Development insights",
  ],
  authors: [{ name: "Kushagra Sharma", url: "https://www.thedarkartist.in" }],
  robots: "index, follow",
  publisher: "Kushagra Sharma",
  twitter: {
    card: "summary_large_image",
    title: "Projects - Kushagra Sharma",
    description:
      "Explore detailed insights, code walkthroughs, and the stories behind the projects I've created.",
    site: "@TheDarkArtist",
    creator: "@TheDarkArtist",
  },
  openGraph: {
    title: "Projects - Kushagra Sharma",
    type: "website",
    url: "https://thedarkartist.in/projects",
    description:
      "A showcase of projects developed by Kushagra Sharma, featuring detailed explanations, insights, and coding practices.",
    images: "https://i.imgur.com/pMWcbsU.png",
  },
};

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
      <div className="px-4 xl:px-0 mt-16 pb-4">
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

          <section className="bg-white dark:bg-zinc-950 h-min z-20 my-10 p-4 flex gap-4 items-center rounded-md">
            <Search placeholder="Search Projects..." />

            <Suspense fallback={<div></div>}>
              <CreateButton type="project" />
            </Suspense>
          </section>
          <Suspense
            fallback={
              <div className="flex w-full justify-center">
                <Loader width="28" color="green" strokeWidth="5" />
              </div>
            }
          >
            <ProjectsList published query={query} currentPage={currentPage} />
          </Suspense>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProjectsPage;
