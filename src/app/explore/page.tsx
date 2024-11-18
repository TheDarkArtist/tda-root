import Footer from "@/components/footer/footer";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Explore - Kushagra Sharma",
  description:
    "Dive into a curated collection of news, posts, projects, quotes, and random favorites. Discover content that inspires, informs, and entertains.",
  keywords: [
    "Explore page",
    "Kushagra Sharma",
    "Curated content",
    "Favorite APIs",
    "News",
    "Posts",
    "Projects",
    "Quotes",
    "Random stuff",
    "Tech exploration",
  ],
  authors: [{ name: "Kushagra Sharma", url: "https://www.thedarkartist.in" }],
  robots: "index, follow",
  publisher: "Kushagra Sharma",
  twitter: {
    card: "summary_large_image",
    title: "Explore - Kushagra Sharma",
    description:
      "Browse a diverse range of content including projects, posts, news, quotes, and random favorites handpicked by Kushagra Sharma.",
    site: "@TheDarkArtist",
    creator: "@TheDarkArtist",
  },
  openGraph: {
    title: "Explore - Kushagra Sharma",
    type: "website",
    url: "https://thedarkartist.in/explore",
    description:
      "Explore a diverse collection of news, projects, random favorites, and more curated by Kushagra Sharma to spark curiosity and inspiration.",
    images: "https://thedarkartist.in/assets/explore-preview.png",
  },
};

const ExplorePage = () => {
  return (
    <main className="h-full flex flex-col justify-between pt-10">
      <div>
        <div className="bg-dot-red-600 text-6xl text-center pt-4 pb-8 mt-10">
          <h1 className="bg-clip-text bg-gradient-to-b text-transparent dark:from-gray-200 dark:via-gray-400 dark:to-gray-600 from-gray-600 via-gray-700 to-gray-800">
            Creativity + Code = Artistry
          </h1>
        </div>
        <div className="max-w-screen-lg w-full mx-auto">
          <p>Stay tuned, Working on some stuff</p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ExplorePage;
