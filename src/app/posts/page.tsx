import React, { Suspense } from "react";
import Search from "@/components/utils/search";
import PostList from "@/components/posts/post-list";
import PostCreateButton from "@/components/posts/post-create-button";
import PostWidget from "@/components/posts/post-widget";

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
    <main className="p-4 my-6 lg:p-0">
      <div className="max-w-screen-lg mx-auto w-full">
        <div className="grid grid-cols-6">
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

            <section className="flex gap-4 items-center">
              <Search placeholder="Search blogs..." className="my-10" />
              <PostCreateButton />
            </section>
          </section>

          <section className="col-span-2">
            <PostWidget />
          </section>
        </div>

        <Suspense fallback={<div>Searching....</div>}>
          <PostList published query={query} currentPage={currentPage} />
        </Suspense>
      </div>
    </main>
  );
};

export default ArticlesPage;
