import React, { Suspense } from "react";
import Search from "@/components/utils/search";
import PostList from "@/components/posts/post-list";
import Footer from "@/components/footer/footer";
import CreateButton from "@/components/utils/buttons/create-button";
import Note from "@/components/utils/note";

const ArticlesPage = ({
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
      <div className="p-4 mt-12 lg:p-0">
        <div className="max-w-screen-lg mx-auto w-full">
          <section className="space-y-6 col-span-4">
            <h1 className="text-4xl text-green-600 font-black mt-6 hover:animate-pulse">
              Read Blogs & Informative Articles
            </h1>
            <p>
              This page is all about sharing my perspectives, insights, and
              experiences on a wide range of topics, with a focus on technology
              and beyond. Through my blog posts, I aim to offer
              thought-provoking discussions, personal reflections, and
              explorations of emerging trends in areas such as artificial
              intelligence, software development, digital innovation and so much
              more.
            </p>
            <p>
              Here, I plan to discuss discuss different books, tutorials and
              other stuff that might be interesting and fun to discuss, For my
              projects you should check out the projects page, which includes
              detailed information about the i&apos;ve done.
            </p>

            <Note
              title="Note: Under Active Development"
              description="This section (post page) is not yet ready, Once it is this note will be removed."
            />

            <section className="flex gap-4 items-center">
              <Search placeholder="Search blogs..." className="my-10" />
              <CreateButton type="post" />
            </section>
          </section>

          <Suspense fallback={<div>Searching....</div>}>
            <PostList published query={query} currentPage={currentPage} />
          </Suspense>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ArticlesPage;
