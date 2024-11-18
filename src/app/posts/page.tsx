import Footer from "@/components/footer/footer";
import PostList from "@/components/posts/post-list";
import CreateButton from "@/components/utils/buttons/create-button";
import Loader from "@/components/utils/loader";
import Search from "@/components/utils/search";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blogs, Articles, Insights and Much More",
  description:
    "Explore a wide range of blogs, articles, and insights on technology, programming, and life lessons. Stay informed and inspired with quality content.",
  keywords: [
    "blogs",
    "articles",
    "insights",
    "technology",
    "programming",
    "life lessons",
    "tech trends",
    "developer content",
  ],
  authors: [{ name: "Kushagra Sharma", url: "https://www.thedarkartist.in" }],
  robots: "index, follow",
  publisher: "TheDarkArtist",
  twitter: {
    card: "summary_large_image",
    title: "Blogs, Articles, Insights and Much More",
    description:
      "Explore insightful articles and blogs on technology and beyond.",
    site: "@TheDarkArtist",
    creator: "@TheDarkArtist",
  },
  openGraph: {
    title: "Blogs, Articles, Insights and Much More",
    type: "website",
    url: "https://thedarkartist.in/posts",
    description:
      "Quality articles on technology, programming, and life insights.",
    images: "https://thedarkartist.in/assets/posts-preview.png",
  },
};

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
      <div className="px-4 xl:px-0 mt-12 pb-4">
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

          <section className="bg-white dark:bg-zinc-950 h-min z-20 my-10 p-4 flex gap-4 items-center rounded-md">
            <Search placeholder="Search posts..." />

            <Suspense fallback={<div></div>}>
              <CreateButton type="post" />
            </Suspense>
          </section>
          <Suspense
            fallback={
              <div className="flex w-full justify-center">
                <Loader width="28" color="green" strokeWidth="5" />
              </div>
            }
          >
            <PostList query={query} currentPage={currentPage} />
          </Suspense>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PostPage;
