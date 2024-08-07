import React from "react";

import { cn } from "@/lib/utils";
import { os } from "@/utils/fonts";
import Search from "@/components/utils/search";

const ArticlesPage = () => {
  return (
    <main className="">
      <div className="max-w-screen-lg mx-auto w-full">
        <section className="space-y-6">
          <h1
            className={cn(
              "mt-6 text-4xl font-black text-sky-600",
              os.className
            )}
          >
            Read Blogs
          </h1>
          <p>
            Welcome to my blogging page, where I share my perspectives,
            insights, and experiences on a wide range of topics, with a focus on
            technology and beyond. Through my blog posts, I aim to offer
            thought-provoking discussions, personal reflections, and
            explorations of emerging trends in areas such as artificial
            intelligence, software development, digital innovation and so much
            more.
          </p>
        </section>
        <Search placeholder="Search blogs..." className="my-10" />
      </div>
    </main>
  );
};

export default ArticlesPage;
