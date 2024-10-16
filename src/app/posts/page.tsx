import Footer from "@/components/footer/footer";
import PostList from "@/components/posts/post-list";
import CreateButton from "@/components/utils/buttons/create-button";
import Search from "@/components/utils/search";
import React, { Suspense } from "react";

const PostPage = ({
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
      <div className="px-4 lg:px-0 mt-12 pb-4">
        <div className="max-w-screen-lg mx-auto w-full">
          <section className="space-y-2 sm:space-y-6">
            <h1 className="text-2xl sm:text-4xl text-green-600 font-black mt-6 hover:animate-pulse">
              Read Blogs & Informative Articles
            </h1>
            <p className="text-sm">
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
          </section>

          <section className="sticky bg-white dark:bg-zinc-950 h-min z-20 my-10 py-4 top-12 flex gap-4 items-center">
            <Search placeholder="Search posts..." />

            <Suspense fallback={<div></div>}>
              <CreateButton type="post" />
            </Suspense>
          </section>
          <Suspense fallback={<div>Searching....</div>}>
            <PostList query={query} currentPage={currentPage} />
          </Suspense>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PostPage;
