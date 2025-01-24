import Table from "@/components/posts/drafts/table";
import { Button } from "@/components/ui/button";
import CreateButton from "@/components/utils/buttons/create-button";
import Note from "@/components/utils/note";
import Search from "@/components/utils/search";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Draft Blogs",
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
    title: "All your unpublished posts",
    type: "website",
    url: "https://thedarkartist.in/posts/drafts",
    description:
      "Quality articles on technology, programming, and life insights.",
    images: "https://i.imgur.com/siQi89S.png",
  },
};

const DraftsPage = ({ searchParams }: { searchParams: { query: string } }) => {
  const { query } = searchParams;

  return (
    <div className="pt-14 max-w-screen-2xl mx-auto bg-white dark:bg-transparent rounded-md">
      <div className="p-4 m-4 shadow-lg dark:shadow-cyan-800/40 space-y-6">
        <section className="mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold dark:text-zinc-300 text-gray-800">
              Post Drafts
            </h1>
            <div className="flex items-center gap-2">
              <Button className="py-5" variant="outline">
                <Link href="/posts">Return</Link>
              </Button>
              <CreateButton type="post" />
            </div>
          </div>
          <p className="mt-4 dark:text-zinc-400 text-gray-600">
            This page displays all your unpublished posts. You can review, edit,
            and manage your drafts here before publishing them. Each draft
            includes a preview of its content, its creation date, and an option
            to continue editing.
          </p>
        </section>
        <Search placeholder="Search Drafts" />
        <Note
          title="NOTE"
          description="Pressing the delete button will immediately delete the post without any confirmation. Please proceed with caution."
        />
        <Table query={query} />
      </div>
    </div>
  );
};

export default DraftsPage;
